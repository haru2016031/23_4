---------------------------------------------------------------------------------------------------
AviSynth plug-in L-SMASH Source r940 release1 [2020/01/05]
---------------------------------------------------------------------------------------------------

【概要】
L-SMASH Source は、muken氏が L-SMASH Works 開発の一環として実装を進めている OSS であり、
MP4/MOV/QT/3gp/3g2/F4V/M4A 等の L-SMASH 対応コンテナに格納された映像・音声ストリームを
AviSynth で読み込むためのプラグインです。
コーデックのデコードは ffmpeg や Libav が受け持ちます（当プラグインは ffmpeg を使用）。

r416 より LWLibavVideoSource() および LWLibavAudioSource() が追加され、 ffms を使用せずとも
Libav/ffmpeg がサポートするコンテナ・コーデックの読み込みが可能となりました。



===================================================================================================

【対応コンテナフォーマット】
	対応コンテナ・コーデックは下記の ffmpeg 公式情報をご覧下さい。
	
	FFmpeg Supported File Formats, Codecs or Features
	https://www.ffmpeg.org/general.html#Supported-File-Formats_002c-Codecs-or-Features
	
	また、以下の外部ライブラリによる拡張も行っています。

		・AOM AV1 Codec Library による AV1 のデコード
		  https://aomedia.googlesource.com/aom/

		・Game Music Emu によるゲーム音源ファイルのデコード（対応機種・音源は下記サイト参照のこと）
		  https://bitbucket.org/mpyne/game-music-emu/wiki/Home
		  		AviUtl で設定している最大フレーム数までループして音源を展開しますので
		  		最大フレームが多いほど展開に時間がかかります。
		    	必要な時間長に合わせて最大フレーム数を再設定しつつ読み込むことをおすすめします。



===================================================================================================

【導入】

LSMASHSource.dll を AviSynth の plugins フォルダにコピー。
または任意のディレクトリに置き、LoadPlugin で読み込みます。

	例)
	LoadPlugin("d:\hoge\LSMASHSource.dll")

64bit 版プラグインは x64 フォルダ内にあり、AviSynth 64bit 版や AviSynth+ にて利用可能です。
AviSynth の plugins64 フォルダまたは AviSynth+ の plugins64+ フォルダにコピーしてお使いください。
これにより、avs を 64bit 版エンコーダ・アプリケーションとダイレクトにリンクでき、
64bit OS 上で 32bit バイナリ使用時の WOW64 オーバーヘッドによる若干の処理速度低下(数％程度)を回避できます。



===================================================================================================

【AviSynthスクリプトの書式】
映像読み込みと音声読み込みが分かれており、それぞれの指定が必要です。



■映像読み込みの書式 (L-SMASHがサポートするコンテナの読み込み。MP4やMOVなど)

LSMASHVideoSource("source file", track, threads, seek_threshold, seek_mode, dr, fpsnum, fpsden, stacked, format, decoder)

	"source file"
		読み込む映像ファイルを指定します。

	track
		映像コンテナから読み込むトラックナンバーを指定します。
		=0   自動判定。最初に見つけたトラックの映像を読み込みます（推奨）
		=n   任意のトラックナンバー(n)を指定して読み込みます

	threads
		処理するスレッド数を指定します。
		=0   自動判定（推奨）
		=n   任意のスレッド数(n)を指定して処理します

	seek_threshold
		時間軸の未来方向にランダムアクセス（シーク）したフレーム間隔が設定範囲内であれば、
		キャッシュされているフレームから即デコードをして余分な処理を省きます。
		範囲を広げすぎるとIピクチャからデコードした方が速く、むしろ遅くなるケースが
		あるため、程々に設定するほうが良いでしょう。
		編集時など、ランダムなシークが要求されるシーンで役立つ可能性があります。
		=n   seek_threshold を有効化するフレーム数(n)を指定します。推奨値は10

	seek_mode
		シーク時の処理方法を指定します。
		=0   Normalモード。3回目のシーク失敗時にUnsafeモードで3回目と同じフレームから
	         デコードを試行し、それでも駄目な場合は前のフレームのコピーを生成します（推奨）
		=1   Unsafeモード。1回目のエラーで前のフレームのコピーを生成します
		=2   Aggressiveモード。シーク失敗（エラー）で再試行を一切しません。簡易確認向け。

	dr
		Libav/ffmpeg(libavcodec) の custom get_buffer() を使用したダイレクト読み込みをします。
		dr を使用しない場合と比較して約50%前後のスピードアップを実現（muken氏談）。
		ただし、インタレース映像で縦32の倍数デコードをそのまま、H.264の場合は縦2ラインが
		付加されるため、ストリームが表示すべき解像度にする場合は、読み込み後の映像解像度を
		確認のうえ、必要とあらば crop 処理を施してください。
		
		=true    ダイレクト読み込みを有効化します
		=false   ダイレクト読み込みを無効化します（デフォルト。従来の処理と同じ）

	fpsnum(デフォルト 0)
	fpsden(デフォルト 1)
		VFR->CFR 変換をする際にCFRのフレームレートをfpsnum(分子)、fpsden(分母)として
		それぞれ指定します。
		変換はフレームベースで行われ、フレームの水増し・削除によって指定された
		フレームレートに調整されます。
		
		例)
		fpsnum=60000, fpsden=1001	# 59.94fpsでCFR出力

	stacked 
		AviSynth の high bit-depth に対応します。
		ただし、このモードを有効化すると dr（ダイレクト読み込み）は使用できません。
		
		=true    high bit-depth を有効化します
		=false   high bit-depth を無効化します（デフォルト）

	format
		ピクセルフォーマットを指定します。
		デフォルトでは読み込んだ映像ストリームのフォーマットをそのまま出力します。
		ただし、dr モードの使用で出力されるピクセルフォーマットが決められている場合、
		format 指定は機能しません。
		
		"Y8"
		"RGB24"
		"RGB32"
		"YUY2"
		"YUV420P8"
		"YUV422P8"
		"YUV444P8"
		"YUV410P8"
		"YUV411P8"
		"YUV420P9"
		"YUV422P9"
		"YUV444P9"
		"YUV420P10"
		"YUV422P10"
		"YUV444P10"
		"YUV420P12" (ffmpeg only)
		"YUV422P12" (ffmpeg only)
		"YUV444P12" (ffmpeg only)
		"YUV420P14" (ffmpeg only)
		"YUV422P14" (ffmpeg only)
		"YUV444P14" (ffmpeg only)
		"YUV420P16"
		"YUV422P16"
		"YUV444P16"

	decoder
		優先的に使用したいデコーダ名を記述します。
		表記は libavcodec の decoder name に則り、一覧は decoder_name.txt に記載してありますのでそちらを参照してください。
		カンマ区切りで複数のデコーダを指定でき、記述した先頭のデコーダから優先的に使用を試みます。
		
		例1)
			h264_cuvid,h264
		
			最初に NVIDIA GPU がサポートする Video Decoder(CUVID) による H.264(MPEG-4 AVC)デコーダを使用。
			その処理が不可能であった場合は2番目の ffmpeg libavcodec に実装されている H.264 デコーダを使用します。
		
		例2)
			mpeg2_qsv,mpeg2video
		
			例2では、まず Intel QSV による MPEG-2 のデコードを試行し、
			それが不可能であった場合は ffmpeg libavcodec に実装されている MPEG-2 デコーダを使用します。
		
		例3)
			hevc_cuvid,hevc
		
			HEVC(H.265)を NVIDIA Video Decoder(CUVID)でデコードを試み、
			CUVID 無効時は ffmpeg libavcodec による HEVC デコーダを使用します。
	
	主に同一コーデックのデコーダが複数あるものに対して有効な機能であり、
	対象となるデコーダがひとつしか無かったり、読み込もうとしている動画・音声ファイルのコーデックが不明な場合は、
	未指定による自動判別が望ましいでしょう。



■音声読み込みの書式 (L-SMASHがサポートするコンテナの読み込み。MP4やM4Aなど)

LSMASHAudioSource("source file", track, skip_priming, layout, rate, decoder)

	"source file"
		読み込む音声ファイルを指定します。または、映像と音声がmuxされたファイルを指定します。

	track
		音声を読み込むトラックナンバーを指定します。
		=0   自動判定。最初に見つけたトラックの音声を読み込みます（推奨）
		=n   任意のトラックナンバー(n)を指定して読み込みます

	skip_priming
		コンテナの edit list に encoder delay が記されている場合、それに基づいて
		音声の priming samples（余白的なデータ部分）をスキップデコードするか否かを指定します。
		=true   skip primingを有効化します
		=false  skip primingを無効化します

	layout
		音声チャネルを強制指定することができます。
		音声ストリームを利用する際、意図したレイアウトで扱うことが可能となります。
		
		= 引数は以下を参照（ダブルクォーテーションで括ること）
		
		FL  = フロント・レフト
		FR  = フロント・ライト
		FC  = フロント・センター
		LFE = 低域周波数エフェクト（0.1chの低音）
		BL  = バック（リア）・レフト
		BR  = バック（リア）・ライト
		FLC = フロント・レフトのセンター
		FRC = フロント・ライトのセンター
		BC  = バック（リア）・センター
		SL  = サイド・レフト
		SR  = サイド・ライト
		TC  = トップ・センター
		TFL = トップ・フロント・レフト
		TFC = トップ・フロント・センター
		TFR = トップ・フロント・ライト
		TBL = トップ・バック・レフト
		TBC = トップ・バック・センター
		TBR = トップ・バック・ライト
		DL  = ダウンミックス・レフト
		DR  = ダウンミックス・ライト
		
		例)
		layout="FL+FR+FC+LFE+BL+BR"		# 5.1chサラウンドの指定
		
		また、以下のようにシンプルな指定方法もあります。
		
		mono           = FC（モノラル）
		1              = mono 指定と同様
		stereo         = FL+FR（ステレオ）
		2              = stereo 指定と同様
		2.1            = FL+FR+LFE
		3.0            = FL+FR+FC
		3.1            = FL+FR+FC+LFE
		3.0(back)      = FL+FR+BC
		4.0            = FL+FR+FC+BC
		4.1            = FL+FR+FC+LFE+BC
		quad           = FL+FR+BL+BR
		quad(side)     = FL+FR+SL+SR
		5.0            = FL+FR+FC+BL+BR
		5.0(side)      = FL+FR+FC+SL+SR
		5.1            = FL+FR+FC+LFE+BL+BR（5.1chサラウンド）
		5.1(side)      = FL+FR+FC+LFE+SL+SR
		5.1+downmix    = FL+FR+FC+LFE+BL+BR+DL+DR
		6              = 5.1指定と同様
		6.0            = FL+FR+FC+BC+SL+SR
		6.0(front)     = FL+FR+FLC+FRC+SL+SR
		hexagonal      = FL+FR+FC+BL+BR+BC
		6.1            = FL+FR+FC+LFE+BC+SL+SR
		6.1(front)     = FL+FR+LFE+FLC+FRC+SL+SR
		7              = 6.1指定と同様
		7.0            = FL+FR+FC+BL+BR+SL+SR
		7.0(front)     = FL+FR+FC+FLC+FRC+SL+SR
		7.1            = FL+FR+FC+LFE+BL+BR+SL+SR
		7.1(wide)      = FL+FR+FC+LFE+BL+BR+FLC+FRC
		7.1(wide-side) = FL+FR+FC+LFE+FLC+FRC+SL+SR
		7.1+downmix    = FL+FR+FC+LFE+BL+BR+SL+SR+DL+DR
		8              = 7.1指定と同様
		octagonal      = FL+FR+FC+BL+BR+BC+SL+SR
		downmix        = DL+DR（stereoへのダウンミックス）
		
		例)
		layout="5.1"			# layout="FL+FR+FC+LFE+BL+BR" 指定と同様
		layout="7.1(wide)"		# layout="FL+FR+FC+LFE+BL+BR+FLC+FRC" 指定と同様

	rate
		音声のサンプリングレートを指定します。通常は未指定でかまいません。
		
		例) 44.1KHz の場合
		rate=44100

	decoder
	優先的に使用したいデコーダ名を記述します。
	表記は libavcodec の decoder name に則り、一覧は decoder_name.txt に載せてありますのでそちらを参照してください。
	カンマ区切りで複数のデコーダを指定でき、記述した先頭のデコーダから優先的に使用を試みます。
	
	主に同一コーデックのデコーダが複数あるものに対して有効な機能であり、
	対象となるデコーダがひとつしか無かったり、読み込もうとしている動画・音声ファイルのコーデックが不明な場合は、
	未指定による自動判別が望ましいでしょう。



---------------------------------------------------------------------------------------------------

■Libav/ffmpeg がサポートするコンテナ及び映像コーデックの読み込み

LWLibavVideoSource("source file", cache, stream_index, threads, seek_threshold, seek_mode, dr, fpsnum, fpsden, repeat, dominance, stacked, format, decoder)

	"source file"
		読み込む映像ファイルを指定します。

	cache
		映像ストリームを解析してインデックスファイル（拡張子 lwi）を生成します。
		インデックスファイルを生成しておくと、編集時のシーク等が快適になります。
		インデックスファイルは AviUtl の Libav-SMASH File Reader が生成するものと相互に互換性があります。
		=true    インデックスファイルを生成します（デフォルト）
		=false   インデックスファイルを生成しません

	stream_index
		映像ストリームのインデックスナンバーを指定して読み込みます。
		複数のストリームが格納されているコンテナから任意の映像をデコードする際に指定しましょう。
		=-1   自動判定（デフォルト）
		=n    任意のインデックスナンバー(n)に対応する映像ストリームを読み込みます

		インデックスファイルの仕様についてはこちら https://pop.4-bit.jp/?p=5474 を参考にしてください。
		（現在は拡張子が lwi に変更され、インデックスファイルのフォーマットは ver.13）

	threads
		処理するスレッド数を指定します。
		=0    自動判定（推奨）
		=n    任意のスレッド数(n)を指定して処理します

	seek_threshold
		時間軸の未来方向にランダムアクセス（シーク）したフレーム間隔が設定範囲内であれば、
		キャッシュされているフレームから即デコードをして余分な処理を省きます。
		範囲を広げすぎるとIピクチャからデコードした方が速く、むしろ遅くなるケースが
		あるため、程々に設定するほうが良いでしょう。
		編集時など、ランダムなシークが要求されるシーンで役立つ可能性があります。
		=10  デフォルト（推奨値）
		=n   seek_thresholdを有効化するフレーム数(n)を指定します

	seek_mode
		シーク時の処理方法を指定します。
		=0    Normalモード。3回目のシーク失敗時にUnsafeモードで3回目と同じフレームから
	          デコードを試行し、それでも駄目な場合は前のフレームのコピーを生成します（推奨）
		=1    Unsafeモード。1回目のエラーで前のフレームのコピーを生成します
		=2    Aggressiveモード。シーク失敗（エラー）で再試行を一切しません。簡易確認向け。

	dr
		Libav/ffmpeg(libavcodec)のcustom get_buffer()を使用したダイレクト読み込みをします。
		dr を使用しない場合と比較して約50%前後のスピードアップを実現（muken氏談）。
		ただし、インタレース映像で縦32の倍数デコードをそのまま、
		H.264の場合は縦2ラインが付加されるため、
		映像が最終的に表示すべき解像度にする場合はcrop処理を必要とするケースがあります。
		
		例えば、1080i の MPEG-2 ストリームは縦1088でダイレクトにデコード・表示されるため、
		下8ラインを crop して1080にするといった具合です。
		
		=true    ダイレクト読み込みを有効化します
		=false   ダイレクト読み込みを無効化します（デフォルト。従来の処理と同じ）


	fpsnum(デフォルト 0)
	fpsden(デフォルト 1)
		VFR->CFR 変換をする際にCFRのフレームレートをfpsnum(分子)、fpsden(分母)として
		それぞれ指定します。
		変換はフレームベースで行われ、フレームの水増し・削除によって指定された
		フレームレートに調整されます。
		
		例)
		fpsnum=60000, fpsden=1001	# 59.94fpsとしてVFR->CFR変換

	repeat
		映像ストリームにRFF(Repeat First Field)フラグがある場合、それを有効化します。
		
		プログレッシブベースのRFF付き映像を指定されたフラグに従って
		プルダウン出力します（例えば、出力先がテレビを想定している映像は59.94iへプルダウン出力）。
		プルダウン時のフィールド順は後述の dominance で指定。
		ただし、fpsnum および fpsden 指定による VFR->CFR 変換を有効化した場合 repeat 設定は無視されます。
		
		純粋なプログレッシブ映像に対して有効化すると2:1インタレース出力となります(1フレームが2フィールド扱いになる)。
		
		=true    機能を有効化します
		=false   機能を無効化します

	dominance
		上記 repeat 有効時に機能し、プルダウン処理のフィールド順を指定します。
		
		=0    Obey source flags ソース映像のフラグに従い設定します(デフォルト)
		=1    TFF(Top Field First)としてフィールド処理を行います
		=2    BFF(Bottom Field First)としてフィールド処理を行います

	stacked 
		AviSynth の high bit-depth に対応します。
		ただし、このモードを有効化すると dr（ダイレクト読み込み）は使用できません。
		
		=true    high bit-depth を有効化します
		=false   high bit-depth を無効化します（デフォルト）

	format
		ピクセルフォーマットを指定します。
		デフォルトでは読み込んだ映像ストリームのフォーマットをそのまま出力します。
		ただし、dr モードの使用で出力されるピクセルフォーマットが決められている場合、
		format 指定は機能しません。
		
		"Y8"
		"RGB24"
		"RGB32"
		"YUY2"
		"YUV420P8"
		"YUV422P8"
		"YUV444P8"
		"YUV410P8"
		"YUV411P8"
		"YUV420P9"
		"YUV422P9"
		"YUV444P9"
		"YUV420P10"
		"YUV422P10"
		"YUV444P10"
		"YUV420P12" (ffmpeg only)
		"YUV422P12" (ffmpeg only)
		"YUV444P12" (ffmpeg only)
		"YUV420P14" (ffmpeg only)
		"YUV422P14" (ffmpeg only)
		"YUV444P14" (ffmpeg only)
		"YUV420P16"
		"YUV422P16"
		"YUV444P16"

	decoder
		優先的に使用したいデコーダ名を記述します。
		表記は libavcodec の decoder name に則り、一覧は decoder_name.txt に記載してありますのでそちらを参照してください。
		カンマ区切りで複数のデコーダを指定でき、記述した先頭のデコーダから優先的に使用を試みます。
		
		例1)
			h264_cuvid,h264
		
			最初に NVIDIA GPU がサポートする Video Decoder(CUVID) による H.264(MPEG-4 AVC)デコーダを使用。
			その処理が不可能であった場合は2番目の ffmpeg libavcodec に実装されている H.264 デコーダを使用します。
		
		例2)
			mpeg2_qsv,mpeg2video
		
			例2では、まず Intel QSV による MPEG-2 のデコードを試行し、
			それが不可能であった場合は ffmpeg libavcodec に実装されている MPEG-2 デコーダを使用します。
		
		例3)
			hevc_cuvid,hevc
		
			HEVC(H.265)を NVIDIA Video Decoder(CUVID)でデコードを試み、
			CUVID 無効時は ffmpeg libavcodec による HEVC デコーダを使用します。
	
	主に同一コーデックのデコーダが複数あるものに対して有効な機能であり、
	対象となるデコーダがひとつしか無かったり、読み込もうとしている動画・音声ファイルのコーデックが不明な場合は、
	未指定による自動判別が望ましいでしょう。



■Libav/ffmpeg がサポートするコンテナ及び音声の読み込み

LWLibavAudioSource("source file", cache, stream_index, av_sync, layout, rate, decoder)

	"source file"
		読み込む映像ファイルを指定します。

	cache
		ストリームを解析してインデックスファイル（拡張子 lwi）を生成します。
		インデックスファイルを生成しておくと、編集時のシーク等が快適になります。
		インデックスファイルは AviUtl の Libav-SMASH File Reader が生成するものと
		互換性があるため、AviSynth・AviUtl 互いの環境で利用できます。
		=true    インデックスファイルを生成します（デフォルト）
		=false   インデックスファイルを生成しません

	stream_index
		音声ストリームのインデックスナンバーを指定して読み込みます。
		複数のストリームが格納されているコンテナから任意の音声をデコードする際に指定しましょう。
		=-1  自動判定（デフォルト）
		=n   任意のインデックスナンバー(n)に対応する音声ストリームを読み込みます

	av_sync
		LWLibavVideoSource読み込み時のインデックスファイル(またはファイルを生成せず
		内部的に生成したインデックス）で設定された映像ストリームと音声を同期させて、音ズレを防ぎます。
		ただし、映像・音声ともに Libav で読み込まれていることが同期条件となります。
		
		先頭フレームが音声の同期ポイントとなりますが、ffmpegを用いてMPEG系映像を表示する場合、
		先頭GOPのIピクチャ、またはデコードが保証されないBおよびPピクチャが先頭にある場合は最初のIピクチャで
		代替表示するため、ClosedGOPとOpenGOPでは表示ルールが若干異なります（いずれも音声は同期する）。
		* 当プラグインは ffmpeg を使用しています。

		Libav を用いている場合も先頭フレームが同期ポイントとなりますが、
		OpenGOP等のようにBピクチャ始まりであってもIピクチャで代替表示せず、壊れていても強制表示します。
		
		=true    インデックスファイルで指定されている映像ストリームと音声を同期します
		=false   音声を同期させません（デフォルト）

	layout
		音声チャネルのレイアウトを強制指定することができます。
		音声を意図したレイアウトで出力したいときに指定しましょう。
		
		= 引数は以下を参照（ダブルクォーテーションで括ること）
		
		FL  = フロント・レフト
		FR  = フロント・ライト
		FC  = フロント・センター
		LFE = 低域周波数エフェクト（0.1chの低音）
		BL  = バック（リア）・レフト
		BR  = バック（リア）・ライト
		FLC = フロント・レフトのセンター
		FRC = フロント・ライトのセンター
		BC  = バック（リア）・センター
		SL  = サイド・レフト
		SR  = サイド・ライト
		TC  = トップ・センター
		TFL = トップ・フロント・レフト
		TFC = トップ・フロント・センター
		TFR = トップ・フロント・ライト
		TBL = トップ・バック・レフト
		TBC = トップ・バック・センター
		TBR = トップ・バック・ライト
		DL  = ダウンミックス・レフト
		DR  = ダウンミックス・ライト
		
		例)
		layout="FL+FR+FC+LFE+BL+BR"		# 5.1chサラウンドの指定
		
		また、以下のようにシンプルな指定方法もあります。
		
		mono           = FC（モノラル）
		1              = mono 指定と同様
		stereo         = FL+FR（ステレオ）
		2              = stereo 指定と同様
		2.1            = FL+FR+LFE
		3.0            = FL+FR+FC
		3.1            = FL+FR+FC+LFE
		3.0(back)      = FL+FR+BC
		4.0            = FL+FR+FC+BC
		4.1            = FL+FR+FC+LFE+BC
		quad           = FL+FR+BL+BR
		quad(side)     = FL+FR+SL+SR
		5.0            = FL+FR+FC+BL+BR
		5.0(side)      = FL+FR+FC+SL+SR
		5.1            = FL+FR+FC+LFE+BL+BR（5.1chサラウンド）
		5.1(side)      = FL+FR+FC+LFE+SL+SR
		5.1+downmix    = FL+FR+FC+LFE+BL+BR+DL+DR
		6              = 5.1指定と同様
		6.0            = FL+FR+FC+BC+SL+SR
		6.0(front)     = FL+FR+FLC+FRC+SL+SR
		hexagonal      = FL+FR+FC+BL+BR+BC
		6.1            = FL+FR+FC+LFE+BC+SL+SR
		6.1(front)     = FL+FR+LFE+FLC+FRC+SL+SR
		7              = 6.1指定と同様
		7.0            = FL+FR+FC+BL+BR+SL+SR
		7.0(front)     = FL+FR+FC+FLC+FRC+SL+SR
		7.1            = FL+FR+FC+LFE+BL+BR+SL+SR
		7.1(wide)      = FL+FR+FC+LFE+BL+BR+FLC+FRC
		7.1(wide-side) = FL+FR+FC+LFE+FLC+FRC+SL+SR
		7.1+downmix    = FL+FR+FC+LFE+BL+BR+SL+SR+DL+DR
		8              = 7.1指定と同様
		octagonal      = FL+FR+FC+BL+BR+BC+SL+SR
		downmix        = DL+DR（stereoへのダウンミックス）
		
		例)
		layout="5.1"			# layout="FL+FR+FC+LFE+BL+BR" 指定と同様
		layout="7.1(wide)"		# layout="FL+FR+FC+LFE+BL+BR+FLC+FRC" 指定と同様

	rate
		音声のサンプリングレートを指定します。通常は未指定でかまいません。
		
		例) 44.1KHz の場合
		rate=44100

	decoder
	優先的に使用したいデコーダ名を記述します。
	表記は libavcodec の decoder name に則り、一覧は decoder_name.txt に載せてありますのでそちらを参照してください。
	カンマ区切りで複数のデコーダを指定でき、記述した先頭のデコーダから優先的に使用を試みます。
	
	主に同一コーデックのデコーダが複数あるものに対して有効な機能であり、
	対象となるデコーダがひとつしか無かったり、読み込もうとしている動画・音声ファイルのコーデックが不明な場合は、
	未指定による自動判別が望ましいでしょう。



===================================================================================================

【LWLibavVideoSource 使用時の注意点】

LWLibavVideoSource で一部コンテナ(TS等)を読み込むとフレームレートが正しく取得できないケースが稀にあるため、
その場合は AssumeFPS で正確なフレームレートを再設定してください（現在は改善されています）。

わからない場合はフレームレートを再指定すべきではありませんが、どうしても確認したい場合は
MediaInfo 等でフレームレートを調べるのも手です。

# MPEG 系コーデックで先頭または最後の GOP が不完全であるケースで発生し易いですが、現在はかなり改善されています


例)テレビベースである29.97(30000/1001)fpsの映像ストリーム

	V1 = LWLibavVideoSource("e:\video\hogehoge.ts")
	～中略～
	AssumeFPS(30000,1001)    # trimや逆3-2プルダウン前に指定する

または

	LWLibavVideoSource("e:\video\hogehoge.ts").AssumeFPS(30000,1001)



===================================================================================================

【 avs 書式例 】

■MP4コンテナの映像のみ読み込む
	LSMASHVideoSource("e:\video\hogehoge.mp4", track=0, threads=0, seek_threshold=10, seek_mode=0)

■音声のみ読み込む
	LSMASHAudioSource("e:\video\hogehoge.m4a", track=0, skip_priming=true)

■映像と音声がmuxされた動画、または映像・音声が別々のストリームを読み込む
	例1)
	V1 = LSMASHVideoSource("e:\video\hogehoge.mp4", track=0, threads=0, seek_threshold=10, seek_mode=0)
	A1 = LSMASHAudioSource("e:\video\hogehoge.mp4", track=0, skip_priming=true)
	AudioDub(V1, A1)

	例2)
	V1 = LSMASHVideoSource("e:\video\hogehoge.mp4", track=0, threads=0, seek_threshold=10, seek_mode=0)
	A1 = LSMASHAudioSource("e:\video\hogehoge.m4a", track=0, skip_priming=true)
	AudioDub(V1, A1)

■Libav/ffmpeg 対応の動画を音声同期で読み込む
	V1 = LWLibavVideoSource("e:\video\hogehoge.ts", cache=true, stream_index=-1, threads=0).AssumeFPS(30000,1001)
	A1 = LWLibavAudioSource("e:\video\hogehoge.ts", av_sync=true)
	AudioDub(V1, A1)



===================================================================================================

【修正・特記事項】

avi および divx コンテナに格納された一部動画において

	・正常に展開できない
	・シークすると映像と音声の同期がずれる

等の現象を確認しており、異常を確認した場合は AVISource または OpenDMLSource にて読み込んでください。
その際は動画に使用したコーデック(デコーダ)を別途インストールする必要があります。



===================================================================================================

【ソースコード】
	* L-SMASH Works(r940)
	https://github.com/VFR-maniac/L-SMASH-Works
	
	* L-SMASH(r1474)
	https://github.com/l-smash/l-smash
	
	* ffmpeg(4.2.2)
	https://www.ffmpeg.org/
	
	* ffnvcodec headers r52
	https://github.com/FFmpeg/nv-codec-headers
	
	* External libraries
	AOM AV1 Codec Library r28701	https://aomedia.googlesource.com/aom/
	libgme 0.6.2					https://bitbucket.org/mpyne/game-music-emu/wiki/Home
	libgme 0.6.2-1(MSVC)			https://github.com/ShiftMediaProject/game-music-emu
	libvpx v1.8.2					https://github.com/webmproject/libvpx
	mfx_dispatch 1.25				https://github.com/lu-zero/mfx_dispatch
	zlib 1.2.11						https://www.zlib.net/

	ビルドに使用した L-SMASH Works、L-SMASH、ffmpeg のソースコードは以下からも取得できます
	https://pop.4-bit.jp/bin/l-smash/L-SMASH_Works_r940_sourcecodes.tar.bz2



===================================================================================================
【ビルドした人】
	POPn
	RePOPn https://pop.4-bit.jp/

===================================================================================================

【更新履歴】
L-SMASH Works ソースコードの更新履歴は changelog.txt をご覧ください
