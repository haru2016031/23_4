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
      info:'最近やってるゲームのキャラの名前の一部なんだけど、最初読めなかったらしいよ。'},
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

      // テンプレ
      // {question:'質問内容',choices:['A.選択肢A','B.選択肢B','C.選択肢C','D.選択肢D'],
      // answer:'答えの番号',qFalse:'ぶっぶ～!正解は〇の「正解内容」だよ',
      // info:'答え補足'},
    ],
  ];