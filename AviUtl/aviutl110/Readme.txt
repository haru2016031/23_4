-----------------------------------------------------------------------------
AviUtl/AviSynth/VapourSynth plug-in
L-SMASH Works r940 release1 [2020/01/05]
-----------------------------------------------------------------------------

【概要】
	当プラグインは、muken 氏が L-SMASH Works 開発の一環として実装を進めている OSS であり、
	MP4/MOV/QT/3gp/3g2/F4V/M4A 等の L-SMASH 対応コンテナに格納された映像・音声ストリームおよび
	libav / ffmpeg ライブラリ対応のコンテナフォーマットを読み込むためのものです。
	コーデックのデコードは ffmpeg や Libav が受け持ちます（当プラグインは ffmpeg を使用）。

	AviSynth 用プラグイン ( LSMASHSource.dll ) については、
	AviSynth フォルダの Readme.txt をご覧ください。



【ファイル】
	lwcolor.auc						# AviUtl L-SMASH Works LW ColorSpace(LW48)プラグイン
	lwdumper.auf					# AviUtl L-SMASH Works Dumper プラグイン
	lwinput.aui						# AviUtl L-SMASH Works File Reader プラグイン
	lwmuxer.auf						# AviUtl L-SMASH Works Muxer プラグイン
	changelog.txt					# L-SMASH Works ソースコード更新履歴
	decoder_name.txt				# 当プラグインで有効化されているデコーダ一覧（Preferred decoders 指定時に使用）
	Readme.txt						# 当テキスト

	AviSynth/LSMASHSource.dll		# AviSynth LSMASHSource プラグイン（32bit版）
	AviSynth/Readme.txt				# AviSynth LSMASHSource プラグインについてのテキスト

	AviSynth/x64/LSMASHSource.dll	# AviSynth LSMASHSource プラグイン（64bit版）

	LICENSE/						# 各ライセンスのテキスト

	readme/							# 公式 readme テキスト。各設定項目について更に詳細な解説が書かれています

	VapourSynth/vslsmashsource.dll	# VapourSynth LSMASHSource プラグイン



【AviUtl用プラグインの簡易説明】

・L-SMASH Works File Reader
	L-SMASH および Libav / AviSynth ライブラリを用いて
	MP4(mov等)コンテナを AviUtl へ読み込む入力プラグインです。
	映像をYUY2/YC48、音声をPCMで読み込みます。

・L-SMASH Works Muxer
	Libav+L-SMASH で読み込んだ映像・音声ストリームを同じコンテナ
	フォーマットで出力します。
	出力データは入力ソースの再圧縮でなくストリームコピーとなります。

・L-SMASH Works Dumper
	MP4等のBOX情報をダンプし、テキストファイルとして出力します。
	また、Timecode v2 も出力可能。

・LW ColorSpace
	YUVそれぞれ16bit長のデータを扱うことを前提とした色変換プラグイン。
	
	AviUtlのYC48はYUV各16bit長のデータのうち約12bitをリミットレンジ(8bit長のデータ的に言えば別名TVスケール)に
	マップして扱う事を前提としていますが、LW ColorSpace においては16bit長をめいっぱい扱うため、
	従来からある他のプラグインフィルタが確実に処理できる保証は無いことに注意してください。
	(リミットレンジとしてはY4096～60160、U,V4096～61440(無色32768)という幅になります)
	
	AviUtl内部色空間・ピクセルフォーマットである「YC48」と区別するため、
	LW ColorSpace は「LW48」として定義されています。
	基本的には外部⇔YC48のデータコピーであるため、色空間変換もYC48と同様に BT.601 相当となります。



【動作互換情報】
	AviUtl 0.99i7 以降で動作します。
	0.99i7 以前では、音声を正常に処理できない可能性を確認しております。



【対応コンテナフォーマット】
	対応コンテナ・コーデックは下記の ffmpeg 公式情報をご覧下さい。
	
	FFmpeg Supported File Formats, Codecs or Features
	https://www.ffmpeg.org/general.html#Supported-File-Formats_002c-Codecs-or-Features
	
	また、以下の外部ライブラリによる拡張も行っています。

		・AOM AV1 Codec Library による AV1 のデコード
		  https://aomedia.googlesource.com/aom/

		・OpenCORE AMR による AMR-NB, AMR-WB のデコード
		  https://sourceforge.net/projects/opencore-amr/

		・Game Music Emu によるゲーム音源ファイルのデコード（対応機種・音源は下記サイト参照のこと）
		  https://bitbucket.org/mpyne/game-music-emu/wiki/Home
		  		AviUtl で設定している最大フレーム数までループして音源を展開しますので
		  		最大フレームが多いほど展開に時間がかかります。
		    	必要な時間長に合わせて最大フレーム数を再設定しつつ読み込むことをおすすめします。

	実際に利用可能な（ビルド時に有効化されている）デコーダ一覧は decoder_name.txt をご覧ください。



【導入】
	lwcolor.auc、lwdumper.auf、lwinput.aui、lwmuxer.auf 各ファイルを
	AviUtl と同じフォルダ、または AviUtl 直下の Plugins フォルダにコピーしてください。



【導入の確認】
・L-SMASH Works File Reader の確認
	AviUtl を起動し、[その他]→[入力プラグイン情報]を確認。
	L-SMASH Works File Reader が表示されていれば導入完了です。

・L-SMASH Works Muxer / L-SMASH Works Dumper の確認
	AviUtl を起動し、[その他]→[プラグインフィルタ情報]を確認。
	L-SMASH Works Dumper と L-SMASH Works Muxer が表示されていれば導入完了です。



【使い方】
・L-SMASH Works File Reader
	[ファイル]→[ファイルを開く] 
	または AviUtl のウィンドウにプラグイン対応動画、音声ファイルをドラッグ＆ドロップすると読み込めます。

	ただし、拡張編集では静止画を読み込む場合であっても、
	「メディアオブジェクトの追加」→「動画ファイル」として参照ファイルで読み込んでください。
	Allfile 表示で対応画像が読み込めます（もちろん動画も可）。

	当プラグインは、メディアタイプに関係なく動画を読み込むプラグインとして動作するための仕様です。

・L-SMASH Works Muxer
	[ファイル]→[エクスポート]→[L-SMASH Works Muxer]を選択すると
	任意のコンテナフォーマットでファイル保存できます。
	ただし、対応する入出力コンテナはMP4等一部のフォーマットに限られます。

・L-SMASH Works Dumper
	[ファイル]→[エクスポート]→[L-SMASH Works Dumper]を選択し、
	ダンプはファイルの種類で「dump File」
	タイムコードの出力は「Timecode v2 File」
	を選択してください。

・LW ColorSpace
	[設定]→[色変換の設定]で「LW ColorSpace」を選択します。
	ツールウィンドウを表示してから[入力][出力]で選ぶこともできます。



【設定】
ファイル→環境設定→入力プラグインの設定→L-SMASH Works File Reader で
プラグインの設定ができます。


・L-SMASH Works Muxer と L-SMASH Works Dumper 自体の設定はありません

・Libav+L-SMASH のチェック
	L-SMASH から Libav または ffmpeg にアクセスしてファイルを読み込みます。

・AviSynth Script のチェック
	AviSynth リーダーを用いて AviSynth スクリプトファイル（拡張子 avs）を読み込みます。

・VSScript
	VapourSynth スクリプトファイル（拡張子 vpy）を読み込みます。

・LW-Libav のチェック
	L-SMASH Works に実装されている Libav Reader を使用して
	Libav または ffmpeg に直接アクセスします。
	FFMS よりも読み込めるフォーマットが多く、フレームアキュレートな読み込みが可能です。
	
	複数にチェックを入れた場合は、Libav+L-SMASH → Libav 順にアクセスを試行します。
	これらの処理は映像・音声ストリーム別々にアクセスを試みます。
	avs は AviSynth リーダー、vpy は VapourSynth リーダーで読み込みを試みます。

・threads
	処理スレッド数を設定します。
	指定数 0 で Auto となり、最大数4で自動的にセットされます。
	情報は lsmash.ini ファイルに保存されます。

・Forward htreshold
	時間軸の未来方向にランダムアクセス（シーク）したフレーム間隔が設定範囲内であれば、
	キャッシュされているフレームから即デコードをして余分な処理を省きます。
	範囲を広げすぎるとIピクチャからデコードした方が速く、むしろ遅くなるケースがあるため、
	程々に設定するほうが良いでしょう。
	編集時など、ランダムなシークが要求されるシーンで役立つ可能性があります。
	デフォルト推奨値は 10 です。

・Seek mode
	シーク時の処理方法を指定します。
		Normal     = 3回目のシーク失敗時にUnsafeモードで3回目と同じフレームからデコードを試行し、
		             それでも駄目な場合は前のフレームのコピーを生成します（推奨）
		Unsafe     = 1回目のエラーで前のフレームのコピーを生成します
		Aggressive = シーク失敗（エラー）で再試行を一切しません。簡易確認向け。

・Video scaler
	色差スケーリング時の窓関数（拡大・縮小アルゴリズム）を指定します。

・Apply repeat flag
	映像ストリームにRFF(Repeat First Field)フラグがある場合、それを有効化します。

	プログレッシブベースの RFF 付き映像を指定されたフラグに従って
	プルダウン出力します（例えば、出力先にテレビを想定している場合は 59.94i へプルダウン出力）。
	プルダウン時のフィールド順は後述の field dominance で指定。
	ただし、後述の VFR->CFR を有効化すると Apply repeat flag は無視されます。

	純粋なプログレッシブ映像に対して有効化すると2:1インタレース出力となります(1フレームが2フィールド扱いになる)。

・Field dominance
	上記 Apply repeat flag 有効時に機能し、プルダウン処理のフィールド順を当オプションで指定します。
	今のところ、ffmpeg の libavcodec がフィールド順を適切に渡してくれないため、
	現状では TFF か BFF を手動指定するほうが無難です。
		Obey source flags = ソース映像のフラグに従い設定します
		Top -> Bottom     = TFF(Top Field First)としてフィールド処理を行います
		Bottom -> Top     = BFF(Bottom Field First)としてフィールド処理を行います

	注) 適切なフィールド順を指定して AviUtl へ渡す機能であり、AviUtl で正しいフィールド処理をする際は
		AviUtl 側でもトップファースト or ボトムファーストの指定が必要です（設定→インターレースの解除）。

・VFR->CFR
	VFR (Variable Frame Rate : 可変フレームレート)映像を CRF (Constant Frame Rate : 固定フレームレート)に
	変換したいケースで使用します（デフォルトはチェック OFF で使用しない）。
	出力フレームレートは 分子/分母 として指定し、デフォルトでは 60000/1001(59.94fps) となっています。
	VFR->CFR 変換はフレームベースの水増しまたは間引きにより行われます。

・Audio delay
	音声の遅延量を指定します。
	-（マイナス）指定により時間軸の過去へ遅延(マイナス遅延)させることも可能です。
	数値はサンプリング単位で詳細に指定できます（msなどの時間指定ではありません）。
	サンプリング周波数 48KHz の音声を 500ms (0.5秒)遅延させたい場合は 24000 を指定するといった具合です。

・Sampling rate
	読み込む音声のサンプリングレートを指定します。単位は Hz
	0 指定でオート（リサンプリングせずソースのサンプリングレートで読み込む）。
	ソースと指定サンプリングレートが異なるケースではリサンプリングして読み込みます。
	例えば、48KHz の音声を 96000Hz (96KHz)指定で読み込むと 48KHz → 96KHz のリサンプリングとなります。

・Channel layout
	音声チャネルのレイアウトを強制指定することができます。
	音声を意図したレイアウトで扱いたい場合に有効な機能です。
	
	引数は以下を参照
		
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
		FL+FR+FC+LFE+BL+BR		# 5.1chサラウンドの指定
		
	また、以下のようにシンプルな指定方法もあります。
		
		mono            = FC（モノラル）
		1               = mono 指定と同様
		stereo          = FL+FR（ステレオ）
		2               = stereo 指定と同様
		2.1             = FL+FR+LFE
		3.0             = FL+FR+FC
		3.1             = FL+FR+FC+LFE
		3.0(back)       = FL+FR+BC
		4.0             = FL+FR+FC+BC
		4.1             = FL+FR+FC+LFE+BC
		quad            = FL+FR+BL+BR
		quad(side)      = FL+FR+SL+SR
		5.0             = FL+FR+FC+BL+BR
		5.0(side)       = FL+FR+FC+SL+SR
		5.1             = FL+FR+FC+LFE+BL+BR（5.1chサラウンド）
		5.1(side)       = FL+FR+FC+LFE+SL+SR
		5.1+downmix     = FL+FR+FC+LFE+BL+BR+DL+DR
		6               = 5.1指定と同様
		6.0             = FL+FR+FC+BC+SL+SR
		6.0(front)      = FL+FR+FLC+FRC+SL+SR
		hexagonal       = FL+FR+FC+BL+BR+BC
		6.1             = FL+FR+FC+LFE+BC+SL+SR
		6.1(front)      = FL+FR+LFE+FLC+FRC+SL+SR
		7               = 6.1指定と同様
		7.0             = FL+FR+FC+BL+BR+SL+SR
		7.0(front)      = FL+FR+FC+FLC+FRC+SL+SR
		7.1             = FL+FR+FC+LFE+BL+BR+SL+SR
		7.1(wide)       = FL+FR+FC+LFE+BL+BR+FLC+FRC
		7.1(wide-side)  = FL+FR+FC+LFE+FLC+FRC+SL+SR
		7.1+downmix     = FL+FR+FC+LFE+BL+BR+SL+SR+DL+DR
		8               = 7.1指定と同様
		octagonal       = FL+FR+FC+BL+BR+BC+SL+SR
		downmix         = DL+DR（stereoへのダウンミックス）
		
		例)
		5.1				# FL+FR+FC+LFE+BL+BR 指定と同様
		7.1(wide)		# FL+FR+FC+LFE+BL+BR+FLC+FRC 指定と同様

・Mix level
	音声のミックスレベル設定です。
	センター、サラウンドチャネル全般、LFE(低域エフェクト：0.1ch)それぞれに指定可能。

・A/V sync correction
	Libav 読み込み時にインデックスファイルで設定された映像ストリームと音声を同期させて音ズレを防ぎます。
	ただし、映像・音声ともに Libav で読み込まれていることが同期条件となります。
	
	先頭フレームが音声の同期ポイントとなりますが、ffmpeg を用いて MPEG 系映像を表示するケースで、
	先頭 GOP の I ピクチャ、またはデコードが保証されない B および P ピクチャが先頭にある場合に最初のIピクチャで
	代替表示するため、ClosedGOP と OpenGOP では表示ルールが若干異なります（いずれも音声は同期する）。
	* 当プラグインは ffmpeg を使用しています。
	
	Libav を用いている場合も先頭フレームが同期ポイントとなりますが、
	OpenGOP 等のように B ピクチャ始まりであっても I ピクチャで代替表示せず、壊れていても強制表示します。
		
	チェックON  = インデックスで指定されている映像ストリームと音声を同期させます
	チェックOFF = 音声の同期機能を無効化します

・Create Index file
	LW-Libav 読み込み時にストリームを解析してインデックスファイル（拡張子 lwi）を生成します。
	インデックスファイルを生成しておくと、次回以降のファイル読み込みや編集時のシーク等が快適になります。
	インデックスファイルは AviSynth の LWLibavVideoSource が生成するものと互換性があるため、
	AviSynth・AviUtl 互いの環境でそのまま流用できます。

	インデックスファイルの大まかな仕様についてはこちら https://pop.4-bit.jp/?p=5474 を参考にしてください。
	（現在は拡張子が lwi に変更され、インデックスファイルのフォーマットは ver.0.0.2.0-13）

・Libav video index
	映像ストリームのインデックスナンバーを指定することで、任意の映像を読み込みます。
	マルチチャネルの映像ストリームを扱う際に役立つでしょう。

・Libav audio index
	音声ストリームのインデックスナンバーを指定することで、任意の音声を読み込みます。
	マルチチャネルの音声ストリームを扱う際に役立ちます。

・Dummy resolution
	音声ファイルオンリーの編集時に生成するダミー映像の解像度を指定します。

・Dummy flamerate
	ダミー映像のフレームレートを指定します。

・Dummy colorspace
	ダミー映像のカラーフォーマットを指定します。
	YUY2、RGB、YC48(AviUtl内部の色空間) いずれかを指定しましょう。

・LW48 output
	L-SMASH Works 独自のピクセルフォーマットおよび色空間である「LW48」出力を有効化します。

・AVS bit-depth
	AviSynth Script 入力におけるビット深度を選択し、そのビット深度と見なして展開処理を行います。
	デフォルトは YUV および RGB 各8bit。

・Preferred decoders
	優先的に使用したいデコーダ名を記述します。
	表記は libavcodec の decoder name に則り、一覧は decoder_name.txt に載せてありますのでそちらを参照してください。
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
	未指定（空欄）による従来どおりの自動判別が望ましいでしょう。



【注意事項】

・入力プラグインの優先度について
	L-SMASH File Reader については、AviUtl の
	[入力プラグイン優先度の設定] にて適切な優先度を設定して下さい。
	
	DirectShow File Reader や MP4 File Reader といった、
	処理が重複する可能性のある入力プラグインを導入されている環境ではとくに注意が必要です。

・フレームレートが正常に取得できないケース（現在はかなり改善されています）
	TS 等、一部のコンテナでフレームレートが正常に取得できないケースが稀にあります。
	読み込んでから「編集」→「再生速度の情報を変更」で本来のフレームレートを指定するか、
	ファイル読み込み（「ファイル」→「開く」）時にフレームレートを指定して開いてください。
	
	可変フレームレート（VFR）のデータは VFR->CFR 変換を有効にして読み込むことも検討してみてください。
	
	システム設定で「ロード時に29.97fpsに近いものは自動的に29.97fpsに変換する」を
	利用する手段もありますが、29.97fpsとは微妙に異なるフレームレートの映像を
	意図せず正常に読み込めなくなるデメリットもありますので、当方としてはあまり推奨できません。
	
	映像のフレームレートを確認したい場合は
	MediaInfo https://mediaarea.net/ja/MediaInfo 等をご利用ください。

・最初の読み込みに時間のかかるケース
	サイズの大きなファイルや総フレーム数の多いファイルを最初に読み込む際、
	ファイルサーチに時間がかかり無反応に見えるケースがありますが、
	2度目以降の読み込みでは index ファイル(.lwi)の情報を元に読み込むため時間はかかりません。



【修正・特記事項】

avi および divx コンテナに格納された一部動画において

	・正常に展開できない
	・シークすると映像と音声の同期がずれる

等の現象を確認しており、異常を確認した場合は AVI/AVI2 File Reader にて読み込んでください。
その際は動画に使用したコーデック(デコーダ)を別途インストールする必要があります。



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
	libopus 1.3.1					https://opus-codec.org/
	libopencore-amr 0.1.5			https://sourceforge.net/projects/opencore-amr/
	libgme 0.6.2					https://bitbucket.org/mpyne/game-music-emu/wiki/Home
	libgme 0.6.2-1(MSVC)			https://github.com/ShiftMediaProject/game-music-emu
	libvpx v1.8.2					https://github.com/webmproject/libvpx
	mfx_dispatch 1.25				https://github.com/lu-zero/mfx_dispatch
	zlib 1.2.11						https://www.zlib.net/

	ビルドに使用した L-SMASH Works、L-SMASH、ffmpeg のソースコードは以下からも取得できます
	https://pop.4-bit.jp/bin/l-smash/L-SMASH_Works_r940_sourcecodes.tar.bz2



【謝辞】
	これらの機能を実現するため OSS の精神に則り開発されました
	VFR-maniac（muken）氏をはじめとする各ライブラリの作者様
	および AviUtl SDK のライセンスを明確にするため早急に対処
	くださりましたＫＥＮくん氏に深い感謝の意を申し上げます。



【ビルドした人】
	POPn
	RePOPn https://pop.4-bit.jp

====================================================================================================

【更新履歴】
L-SMASH Works ソースコードの更新履歴は changelog.txt をご覧ください
