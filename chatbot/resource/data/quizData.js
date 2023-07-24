window.SWEETS = [
    {text: 'ようこそ「Quizbot」へ!',continue:true,option:'normal'},
    {text: '会話内容は管理者へ送信されませんので、ご安心ください。',continue: true,option: 'normal'},
    {text: 'あなたのお名前は何ですか？', continue: true, option: 'normal'},
    {text: '', continue: false, option: 'normal'},
    {text: 'それでは問題を出します！',continue: true,option:'normal'},
    {text: '~1問目~',continue:true,option:'normal'},
    {text: {title:'Q1',question:'',choices:[''],answer:''},continue:true,option:'choices'},
    {text: {qTrue:'あってるぅ！',qFalse:'' }, continue: false, option: 'normal'},
    {text: '', continue: true, option: 'normal',questionNextSupport: true},
    {text: '次の問題へ', continue: true, option: 'click'},
    {text: '~2問目~',continue:false,option:'normal'},
    {text: {title:'Q2',question:'',choices:[''],answer:''},continue:true,option:'choices'},
    {text: {qTrue:'あってるぅ！',qFalse:'' }, continue: false, option: 'normal'},
    {text: '', continue: true, option: 'normal',questionNextSupport: true},
    {text: '次の問題へ', continue: true, option: 'click'},
    {text: '~3問目~',continue:false,option:'normal'},
    {text: {title:'Q3',question:'',choices:[''],answer:''},continue:true,option:'choices'},
    {text: {qTrue:'あってるぅ！',qFalse:'' }, continue: false, option: 'normal'},
    {text: '', continue: true, option: 'normal',questionNextSupport: true},
    {text: '次の問題へ', continue: true, option: 'click'},
    {text: '~4問目~',continue:false,option:'normal'},
    {text: {title:'Q4',question:'',choices:[''],answer:''},continue:true,option:'choices'},
    {text: {qTrue:'あってるぅ！',qFalse:'' }, continue: false, option: 'normal'},
    {text: '', continue: true, option: 'normal',questionNextSupport: true},
    {text: '次の問題へ', continue: true, option: 'click'},
    {text: '~5問目~',continue:false,option:'normal'},
    {text: {title:'Q5',question:'',choices:[''],answer:''},continue:true,option:'choices'},
    {text: {qTrue:'あってるぅ！',qFalse:'' }, continue: false, option: 'normal'},
    {text: '', continue: true, option: 'normal',questionNextSupport: true},
    {text: '次の問題へ', continue: true, option: 'click'},
    {text: '~6問目~',continue:false,option:'normal'},
    {text: {title:'Q6',question:'',choices:[''],answer:''},continue:true,option:'choices'},
    {text: {qTrue:'あってるぅ！',qFalse:'' }, continue: false, option: 'normal'},
    {text: '', continue: true, option: 'normal',questionNextSupport: true},
    {text: '', continue: true, option: 'normal'},
    {text: '遊んでいただきありがとうございました！！', continue: true, option: 'normal'},
    {text: {title:'Q.End',question:'終了する？もう一回やる？',choices:['終了する','もう一回']}, continue: true, option: 'select'},

    [ 
      //1
      {question:'いまにも泣き出しそうな人がいます。１人はトイレにいて、もう１人はどこにいるでしょう？(答えだけを入力してね)',
      answer:['居間','いま'],qFalse:'ぶっぶ～!正解は「居間（いま）」だよ',
      info:'「いまにも」泣き出しそうな人がいるから「居間」が答えです！'},
      //2
      {question:'孫がおじいちゃんとボール遊びをしました、何をしたでしょう?(答えだけを入力してね)',
      answer:['祖父とボール','ソフトボール','そふとぼーる'],qFalse:'ぶっぶ～!正解は「ソフトボール」だよ',
      info:'おじいちゃん（祖父）とボール遊びだから「ソフトボール（祖父とボール）」が答えです！'},
      //3
      {question:'三つの花束と、二つの花束。合わせたら、何束になる？(答えだけを入力してね)',
      answer:['一束','ひとたば'],qFalse:'ぶっぶ～!正解は「一束」だよ',
      info:'いくつあっても束を合わせたらひとつになるから「一束」が答えです！'},
      //4
      {question:'七夕で有名な織姫と彦星の関係は？',choices:['A.友達','B.恋人','C.夫婦','D.親戚'],
      answer:'2',qFalse:'ぶっぶ～!正解はCの「夫婦」だよ',
      info:'二人は夫婦になった途端働かなくなったため、織姫の父親である天帝に引き離さ\nれてしまったと言われてるみたい、、、。'},
      //5
      {question:'シュークリームの「シュー」の意味は？',choices:['A.キャベツ','B.わた','C.雲','D.島根県'],
      answer:'0',qFalse:'ぶっぶ～!正解はAの「キャベツ」だよ',
      info:'「シュー」がフランス語でキャベツを意味していて、シュークリームがキャベツ\nに似ていることから名付けられたらしいよ。'},
      //6
      {question:'納豆は元々は何？',choices:['A.小豆','B.枝豆','C.とうもろこし','D.ナッツ'],
      answer:'1',qFalse:'ぶっぶ～!正解はBの「枝豆」だよ',
      info:'納豆は大豆を発酵させてできているけど、この大豆は枝豆が成長したものなんだってさ。'},
      //7
      {question:'人間の味覚にないのは？',choices:['A.甘さを感じる味覚','B.辛さを感じる味覚','C.苦さを感じる味覚','D.酸っぱさを感じる味覚'],
      answer:'1',qFalse:'ぶっぶ～!正解はBの「辛さを感じる味覚」だよ',
      info:'実は人間の舌に辛さを感じる感覚ってないらしく、カレーとか食べて「辛い」と\n思うのは、「痛み」を感じているんです！'},
      //8
      {question:'「雲雀」って何て読む？',choices:['A.くじゃく','B.すざく','C.すずめ','D.ひばり'],
      answer:'3',qFalse:'ぶっぶ～!正解はDの「ひばり」だよ',
      info:'最近やってるゲームのキャラの名前なんだけど、最初読めなかったらしいよ。'},
      //9
      {question:'1日にはく空気で、何個の風船を膨らませられる？',choices:['A.100個','B.1000個','C.10000個','D.100000個'],
      answer:'2',qFalse:'ぶっぶ～!正解はCの「10000個」だよ',
      info:'10000個も風船があったら空が飛べるのでは、、、すごい。'},
      //10
      {question:'日本人で一番多い血液型は？',choices:['A.A型','B.B型','C.AB型','D.C型'],
      answer:'0',qFalse:'ぶっぶ～!正解はAの「A型」だよ',
      info:'日本人で一番多い血液型はA型で全体の約40％、O型は約30%、B型は約20%、AB型は約10%らしいよ。\nちなみに管理者はA型なんだって。'},
      //11
      {question:'板チョコに溝がある理由は？',choices:['A.固めやすくするため','B.割れやすくするため','C.数人で分けやすくするため','D.コントラストを高めるため'],
      answer:'0',qFalse:'ぶっぶ～!正解はAの「固めやすくするため」だよ',
      info:'空気に触れている面積（表面積）を増やし、チョコレートを固めやすくするために溝があります。'},
      //12
      {question:'アンパンマンが苦手なものは？',choices:['A.鉄棒','B.お芝居','C.カラオケ','D.ダンス'],
      answer:'1',qFalse:'ぶっぶ～!正解はBの「お芝居」だよ',
      info:'しらたまさんに誘われて何度かお芝居をしていますが、あまり上手ではないみたいです……。'},
      //13
      {question:'アンパンマンのごはんは？',choices:['A.パン','B.ごはん','C.何も食べない','D.うどん'],
      answer:'2',qFalse:'ぶっぶ～!正解はCの「何も食べない」だよ',
      info:'アンパンマンの頭にはあんこが入っており、それがエネルギーになっています。\nそのため食事をしなくても大丈夫らしいよ。'},
      //14
      {question:'キティちゃんの身長は？',choices:['A.181cm','B.ひみつ','C.りんご5個','D.りんご3個'],
      answer:'2',qFalse:'ぶっぶ～!正解はCの「りんご5個」だよ',
      info:'キティちゃんの身長はりんご5個分。\nちなみに体重はりんご3個分です。夢のある身長と体重ですね。'},
      //15
      {question:'日本の人口は？',choices:['A.約1億人','B.約1億2,000万人','C.約1億6,000万人','D.約1億8,000万人'],
      answer:'1',qFalse:'ぶっぶ～!正解はBの「約1億2,000万人」だよ',
      info:'詳細な人数は日本人の総人口は1億2,477万人だって。でも、年々日本の人口は減っているらしいよ。'},

      //16
      {question:'金色の折り紙は、銀色の折り紙にある色を塗ることで作られます。\nその色はなんでしょうか？',choices:['A.黒色','B.白色','C.オレンジ色','D.緑色'],
      answer:'2',qFalse:'ぶっぶ～!正解はCの「オレンジ色」だよ',
      info:'金と銀の折り紙は他の色の折り紙とは別の工場で作られており、紙にアルミ箔を貼った物です。\n金の折り紙の場合はそうして出来た銀の折り紙の上にオレンジ色のインクを塗ることで完成します。'},

      //17
      {question:'お酢に卵を殻ごといれると卵はどうなるでしょう？',choices:['A.透明な卵になる','B.鏡のようになんでもうつる卵になる','C.卵が溶けてなくなる','D.卵が石のように堅くなる'],
      answer:'0',qFalse:'ぶっぶ～!正解はAの「透明な卵になる」だよ',
      info:'お酢にはカルシウムを溶かす力があり、カルシウムでできた卵の殻は、お酢につけると溶けてなくなります。\n卵をむくときについている、薄い皮と中身が残って透明な卵ができます'},

      //18
      {question:'植物にも人間と同じようにあるものがあります。あるものとはなんでしょう？',choices:['A.血液型','B.脳みそ','C.心臓','D.髪の毛'],
      answer:'0',qFalse:'ぶっぶ～!正解はAの「血液型」だよ',
      info:'血は流れていないのですが、「糖タンパク質」というもので、人間と同じ血液型を調べられるみたい。\n植物も「A・B・O・AB型」があるんだよ。'},

      //19
      {question:'臭い靴にお金を入れると臭いがなくなります。\n何円玉を入れるとよいでしょうか？',choices:['A.1円玉','B.10円玉','C.50円玉','D.500円玉'],
      answer:'1',qFalse:'ぶっぶ～!正解はBの「10円玉」だよ',
      info:'10円玉には、「銅イオン」というものがはいっており、これが臭いの原因である雑菌を少なくさせることで、靴の中の臭いがなくなります。'},

      //20
      {question:'飛行機の操縦士と副操縦士は、食事の際に絶対に同じメニューを食べません。\nその理由は何でしょうか？',choices:['A.単純に好みが違う','B.食材の減りの偏りを無くすため','C.特に理由は無い','D.食中毒対策'],
      answer:'3',qFalse:'ぶっぶ～!正解はDの「食中毒対策」だよ',
      info:'同じものを食べて、万が一操縦できる人が誰も動けなくなる事態を防ぐためなんだって。\nモニターの確認も重要だから食事の時間もずらしているんだよ。'},

      //21
      {question:'世界一高いティッシュボックス、その1箱の値段はいくらでしょうか？',choices:['A.700円','B.5000円','C.1万円','D.10万円'],
      answer:'2',qFalse:'ぶっぶ～!正解はCの「1万円」だよ',
      info:'大昭和紙工業というメーカーが販売する「十二単ティッシュ」が１万円もするみたい。\nその名の通り着物の十二単をイメージした12色の高級ティッシュです。\nちょっと使うのを勿体なく感じてしまいそうですね。'},

      //22
      {question:'｢女の子だって暴れたい｣というコンセプトのもとで始まった女の子向けの大人気アニメシリーズはなんでしょうか？',choices:['A.プリキュア','B.セーラームーン','C.アイカツ','D.たまごっち'],
      answer:'0',qFalse:'ぶっぶ～!正解はAの「プリキュア」だよ',
      info:'2004年（平成16年）にスタートし、現在も女の子たちからの人気が高いプリキュアシリーズは、｢女の子だって暴れたい｣というコンセプトで考えられたんだって。'}, 

      //23
      {question:'中学生からの人気が最も高い部活はなんでしょうか？',choices:['A.テニス','B.バスケットボール','C.卓球','D.陸上'],
      answer:'0',qFalse:'ぶっぶ～!正解はAの「テニス」だよ',
      info:'テニス部に所属する中学生は、全国で約30万人いると言われており中学生の部活としては最も人気があるみたい。\n2位はバスケットボール、3位は卓球、4位は陸上なんだって。'},
      
      //24
      {question:'塾に通っている中学生の割合はどのくらいでしょうか？',choices:['A.約10％','B.約30％','C.約50％','D.約70％'],
      answer:'2',qFalse:'ぶっぶ～!正解はCの「約50％」だよ',
      info:'現在の中学生の54.2%は、塾に通っているみたい。\n塾に通っている中学生のうち、約53％は個別指導塾に通っていて近年人気が高まってるっぽい。'},
      
      //25
      {question:'人気漫画「鬼滅の刃」にて、藤の花は鬼に有効な毒として描かれています。\nでは、現実の藤の花の毒はどの程度の強さでしょうか？',choices:['A.人間には一切効かない','B.摂りすぎると眩暈や吐き気がする','C.少量でも人間の命に関わる','D.毒は一切ない'],
      answer:'1',qFalse:'ぶっぶ～!正解はBの「摂りすぎると眩暈や吐き気がする」だよ',
      info:'藤はマメ科の植物であり、毒はありますがその花は天ぷらなどにして食べることができます。\nしかし、食べ過ぎると吐き気や頭痛・眩暈などの症状に見舞われ、酷い場合は胃腸炎になっちゃうんだって。'},

      //26
      {question:'東京の県の花はなんでしょうか？',choices:['A.ソメイヨシノ','B.バラ','C.ヒマワリ','D.そんなものはない'],
      answer:'3',qFalse:'ぶっぶ～!正解はDの「そんなものはない」だよ',
      info:'東京都の花は、ソメイヨシノです。\nしかし、東京は「都」であって「県」ではないので東京には「都の花」はあっても「県の花」は存在しませ～ん！'},

      //27
      {question:'エベレストの高さが判明するよりも前に世界で一番高い山はなんだったでしょうか？',choices:['A.富士山','B.エベレスト','C.ロッキー山脈','D.マッターホルン'],
      answer:'1',qFalse:'ぶっぶ～!正解はBの「エベレスト」だよ',
      info:'エベレストの高さが判明していない時代であったとしても、山の高さが変動しているわけじゃないの。\nつまり、エベレストは世界一高い山としてずっと存在していたということになりま～す！'},

      //28
      {question:'次の中で花にトゲがある植物はどれでしょうか？',choices:['A.バラ','B.コスモス','C.チューリップ','D.この中にはない'],
      answer:'3',qFalse:'ぶっぶ～!正解はDの「この中にはない」だよ',
      info:'バラはトゲがある植物ですが、トゲが生えているのは花の部分ではなく茎の部分だよ。\nつまり、この中には「花に」トゲがある植物はないんですね～。'},
      
      //29
      {question:'アルファベットの最初の文字はAです。\nでは、最後の文字はなんでしょうか？',choices:['1.Z','2.B','3.T','4.R'],
      answer:'2',qFalse:'ぶっぶ～!正解は3の「T」だよ',
      info:'「ALPHABET（アルファベット）」という英単語の最初の文字はA、最後の文字はTとなってるからで～す。'},

      //30
      {question:'Aさんはいちご狩りにやってきました。\nまず一周見て回りながら10個カゴの中に入れ、その後さらに5個入れました。\nカゴの中のイチゴは何個でしょうか？',choices:['A.0個','B.5個','C.10個','D.15個'],
      answer:'2',qFalse:'ぶっぶ～!正解はCの「10個」だよ',
      info:'カゴの中に10個入れた後、さら（皿）に5個入れています。\nよって、カゴの中のイチゴの数は最初に入れた【10個】ということになりま～す！'},

      //31
      {question:'ハルカさんは毎日何時間もピアノの練習をしています。\nしかし、どれだけ練習しても全然曲を弾けるようになりません。なぜでしょうか？',choices:['A.才能がないから','B.音痴だから','C.ドとレの音だけ練習したから','D.曲が難し過ぎるから'],
      answer:'2',qFalse:'ぶっぶ～!正解はCの「ドとレの音だけ練習したから」だよ',
      info:'「どれだけ（ドレだけ）」つまり、ドとレの音だけを練習していたということなんです。\nその2つの音だけを練習したのであれば、曲を弾けるようにはなりませんよね。'},      

      //32
      {question:'農家さんに好きな果物のアンケートを取りました。\nリンゴ・イチゴ・スイカ・メロン、この中で一番人気がある果物はなんでしょうか？',choices:['A.リンゴ','B.イチゴ','C.スイカ','D.メロン'],
      answer:'0',qFalse:'ぶっぶ～!正解はAの「リンゴ」だよ',
      info:'イチゴ・スイカ・メロンは果物として認識されていますが、分類上は野菜です。\nそのため、厳密に言えば選択肢の中にある果物はリンゴだけということになります。'},

      //33
      {question:'日本人が行きたい旅行先で人気第2位の海外はどこでしょうか？',choices:['A.ハワイ','B.台湾','C.イタリア','D.アメリカ'],
      answer:'1',qFalse:'ぶっぶ～!正解はBの「台湾」だよ',
      info:'コロナが落ち着いたら行きたい旅行先として、2番目に人気だった海外は「台湾」でした。\n台湾は日本から比較的近く、グルメや観光を満喫できる魅力的な国らしいよ。'},

      //34
      {question:'一番カロリーが高くて太りやすいお菓子はどれでしょうか？',choices:['A.クッキー','B.菓子パン','C.ポテトチップス','D.チョコレート'],
      answer:'1',qFalse:'ぶっぶ～!正解はBの「菓子パン」だよ',
      info:'菓子パンとはお菓子のように甘くてお砂糖や油をたくさん使っているから、太りやすいみたい。'},

      //35
      {question:'レゴブロックで、一番多くブロックを使っているレゴセットは、いくつのブロックを使っているでしょうか？',choices:['A.241ピース','B.1541ピース','C.4695ピース','D.11695ピース'],
      answer:'3',qFalse:'ぶっぶ～!正解はDの「11695ピース」だよ',
      info:'2021年時点で、LEGOより発売されているレゴブロックセットでブロック数が最も多いものは、11695ピースもある「レゴアート・ワールドマップ」です。\nLEGOでは初めての1万ピースを超えたセットで、世界地図を作ることが出来るものになっています。'},

      //36
      {question:'1円玉を造るのにかかるお金はいくらでしょうか？',choices:['A.0.5円(50銭)','B.1円','C.2円','D.5円'],
      answer:'2',qFalse:'ぶっぶ～!正解はCの「2円」だよ',
      info:'1円玉が2円・・・変な感じですが、1円の重さは1gです。\n材料はアルミニウム100％で造られています。\nこのアルミニウムを製造するコストなどを考えると、1円を1枚作るのには2円かかると言われています。'},

      //37
      {question:'タバコを1本吸うとどのくらいの寿命が縮まるでしょうか？',choices:['A.16秒','B.1分','C.14分','D.39分'],
      answer:'2',qFalse:'ぶっぶ～!正解はCの「14分」だよ',
      info:'イギリスの医学誌には、20歳前から1日平均20本、50年間タバコを吸っている人の場合、タバコの数は累計36万本になり、男性8年、女性10年と寿命が短くなると書かれています。'},
      
      //38
      {question:'昔、薬として売られていた物は次のうちどれでしょうか？',choices:['A.チーズ','B.入浴剤','C.アイスクリーム','D.歯磨き粉'],
      answer:'2',qFalse:'ぶっぶ～!正解はCの「アイスクリーム」だよ',
      info:'アイスクリームはかつて疲労回復の薬として売られていました。\n主に、戦争で疲れた兵士や、夜遅くまで働いている人の疲れを回復してくれる「疲労回復効果」のある薬として食べられてきました。'},

      // 39
      {question:'日本で一番古いと言われるお菓子は、次のうちどれでしょうか？',choices:['A.ガム','B.チョコレート','C.麩菓子(ふがし)','D.クッキー'],
      answer:'3',qFalse:'ぶっぶ～!正解はDの「クッキー」だよ',
      info:'一説によると、日本最古のお菓子はクッキーだと言われています。\nどれくらい昔か、それは縄文時代までさかのぼります。\n栗やくるみ、そのほかの木の実をすりつぶし、こねて焼いたものを食べていました。'},

      //40
      {question:'アイスクリームの賞味期限はどれくらいでしょうか？',choices:['A.半年','B.1年','C.3年','D.ない'],
      answer:'3',qFalse:'ぶっぶ～!正解はDの「ない」だよ',
      info:'アイスクリームの賞味期限はなんとありません。\nしっかりとマイナス18度以下で保存されていれば、菌の増殖が抑えられるため、10年前のアイスであっても食べても問題ありません。'},

      // 41
      {question:'コアラは1日の大半を寝て過ごしますが、その理由は次のうちどれでしょうか？',choices:['A.常に毒が体内にあるから','B.寝るのが大好きな怠け者だから','C.眠り体質だから','D.気絶しているから'],
      answer:'0',qFalse:'ぶっぶ～!正解はAの「常に毒が体内にあるから」だよ',
      info:'コアラの主食は「ユーカリ」という植物です。ユーカリには猛毒が含まれています。\nその猛毒を体内で分解するために睡眠が必要で、1日24時間のうち22時間も眠っています。'},

      // 42
      {question:'「笑う」と「爆笑」の言葉の意味の違いは何で決まるでしょうか？',choices:['A.笑顔の大きさ','B.笑う時間の長さ','C.笑う声の大きさ','D.笑う人の数'],
      answer:'3',qFalse:'ぶっぶ～!正解はDの「笑う人の数」だよ',
      info:'「爆笑」とは、大勢の人が笑っていることを指します。\nちなみに「大笑い」もありますが、これは個人が笑っている状態です。'},

      // 43
      {question:'「もやし」の漢字は、次のうちどれでしょうか？',choices:['A.燃やし','B.茂やし','C.萌やし','D.藻やし'],
      answer:'2',qFalse:'ぶっぶ～!正解はCの「萌やし」だよ',
      info:'とても可愛い感じですが、しっかりと理由があります。\n芽がでることを「萌ゆる」と言いますが、そこから来ているそうです。'},

      // 44
      {question:'リスは敵に襲われた時、ある物が取れてしまいます。\nそれは次のうちどれでしょうか？',choices:['A.爪','B.歯','C.しっぽ','D.ヒゲ'],
      answer:'2',qFalse:'ぶっぶ～!正解はCの「しっぽ」だよ',
      info:'リスはピンチになると、しっぽがトカゲのように取れてしまうことが分かっています。\n引っ張っても簡単に切れてしまうので触れ合う機会が合ったら注意しましょう。'},

      // 45
      {question:'人間の体にある血管をすべて繋げると、ある距離と同じぐらいだと言われています。\nそれは次のうちどれでしょうか？',choices:['A.日本列島の北海道から沖縄までの距離','B.アメリカを横断するぐらいの距離','C.地球1周ぐらいの距離','D.地球2周以上の距離'],
      answer:'3',qFalse:'ぶっぶ～!正解はDの「地球2周以上の距離」だよ',
      info:'人間の体の中にある血管をすべて繋げると、およそ10万kmになると言われています。\n地球1周はおよそ4万kmであるため、血管の長さは地球2周以上の距離ということになります。'},

      // 46
      {question:'世界にはいろんな国や地域があり、それぞれ名前が付けられています。\nギネス記録に認定されている世界で最も長い名前の地域は、いったい何文字でしょうか？',choices:['A.21文字','B.43文字','C.92文字','D.142文字'],
      answer:'2',qFalse:'ぶっぶ～!正解はCの「92文字」だよ',
      info:'ギネス記録に認定されている最も長い名前を持つ地域は、ニュージーランドにある丘の「タウマタファカタンギハンガコアウアウオタマテアポカイフェヌアキタナタフ」です。'},

      // 47
      {question:'お菓子のガムとチョコレートを同時に食べると不思議な現象が起こります。\nいったいどうなるでしょうか？',choices:['A.どちらも永遠に無くならない','B.味がしなくなる','C.ガムも溶けて無くなってしまう','D.お腹が痛くなる'],
      answer:'2',qFalse:'ぶっぶ～!正解はCの「ガムも溶けて無くなってしまう」だよ',
      info:'普通に噛んでいるだけでは溶けないガムも、チョコレートの油脂が混ざることで溶けて無くなってしまいます。'},

      // 48
      {question:'海の生物は人間とはまったく体の構造が違います。イカの心臓は私たちのように1つではありません。\n何個あるでしょうか？',choices:['A.0個','B.2個','C.3個','D.4個'],
      answer:'2',qFalse:'ぶっぶ～!正解はCの「3個」だよ',
      info:'イカはなんと心臓が3個もあります！\nちなみに、よく似ている軟体動物のたこも心臓が3つあります。\n3つの心臓は中心にあるものがメインの心臓で、その左右にあるものは血液をエラに送り出すものだと言われています。'},

      // 49
      {question:'幸せを運んでくれるという四つ葉のクローバー。\nこれまでに見つかったクローバーのうち、一番たくさんの葉があったクローバーはいったい何枚だったでしょうか？',choices:['A.12枚','B.24枚','C.38枚','D.56枚'],
      answer:'3',qFalse:'ぶっぶ～!正解はDの「56枚」だよ',
      info:'これまでに見つかったクローバーには、56枚も葉があるものが見つかっています。\n2009年に日本の岩手県花巻市に住む男性が自宅の庭で発見しました。'},

      // 50
      {question:'自然界で確認されているキノコのうち、本当にあるキノコは次のうちどれでしょうか？',choices:['A.真っ赤で悪魔の指のような形。触るだけでヤケドのような症状が出る毒キノコ。','B.見た目は普通の茶色いキノコ。近くに寄るだけで幻覚症状が現れる。','C.無数の針のようなトゲを持つキノコ。食べられそうになるとトゲを発射する。','D.青紫色をした人の手ほどの大きさ。食べると爪が青く染まってしまうキノコ。'],
      answer:'0',qFalse:'ぶっぶ～!正解はAの「真っ赤で悪魔の指のような形。触るだけでヤケドのような症状が出る毒キノコ。」だよ',
      info:'自然界で実際に確認されているキノコは、日本の山にも自生している「カエンタケ」というキノコです。\n毒性が強く、触ると炎症を起こし、大量に食べると死んでしまうこともあります。'},

      // テンプレ
      // {question:'質問内容',choices:['A.選択肢A','B.選択肢B','C.選択肢C','D.選択肢D'],
      // answer:'答えの番号',qFalse:'ぶっぶ～!正解は〇の「正解内容」だよ',
      // info:'答え補足'},
    ],
  ];