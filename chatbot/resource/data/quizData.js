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
      {question:'いまにも泣き出しそうな人がいます。１人はトイレにいて、もう１人はどこにいるでしょう？(答えだけを入力してね)',
      answer:['居間','いま'],qFalse:'ぶっぶ～!正解は「居間（いま）」だよ',
      info:'「いまにも」泣き出しそうな人がいるから「居間」が答えです！'},
      {question:'孫がおじいちゃんとボール遊びをしました、何をしたでしょう?(答えだけを入力してね)',
      answer:['祖父とボール','ソフトボール','そふとぼーる'],qFalse:'ぶっぶ～!正解は「ソフトボール」だよ',
      info:'おじいちゃん（祖父）とボール遊びだから「ソフトボール（祖父とボール）」が答えです！'},
      {question:'三つの花束と、二つの花束。合わせたら、何束になる？(答えだけを入力してね)',
      answer:['一束','ひとたば'],qFalse:'ぶっぶ～!正解は「一束」だよ',
      info:'いくつあっても束を合わせたらひとつになるから「一束」が答えです！'},
      {question:'七夕で有名な織姫と彦星の関係は？',choices:['A.友達','B.恋人','C.夫婦','D.親戚'],
      answer:'2',qFalse:'ぶっぶ～!正解はCの「夫婦」だよ',
      info:'二人は夫婦になった途端働かなくなったため、織姫の父親である天帝に引き離さ\nれてしまったと言われてるみたい、、、。'},

      {question:'シュークリームの「シュー」の意味は？',choices:['A.キャベツ','B.わた','C.雲','D.島根県'],
      answer:'0',qFalse:'ぶっぶ～!正解はAの「キャベツ」だよ',
      info:'「シュー」がフランス語でキャベツを意味していて、シュークリームがキャベツ\nに似ていることから名付けられたらしいよ。'},
      {question:'納豆は元々は何？',choices:['A.小豆','B.枝豆','C.とうもろこし','D.ナッツ'],
      answer:'1',qFalse:'ぶっぶ～!正解はBの「枝豆」だよ',
      info:'納豆は大豆を発酵させてできているけど、この大豆は枝豆が成長したものなんだってさ。'},
      {question:'人間の味覚にないのは？',choices:['A.甘さを感じる味覚','B.辛さを感じる味覚','C.苦さを感じる味覚','D.酸っぱさを感じる味覚'],
      answer:'1',qFalse:'ぶっぶ～!正解はBの「辛さを感じる味覚」だよ',
      info:'実は人間の舌に辛さを感じる感覚ってないらしく、カレーとか食べて「辛い」と\n思うのは、「痛み」を感じているんです！'},
      {question:'「雲雀」って何て読む？',choices:['A.くじゃく','B.すざく','C.すずめ','D.ひばり'],
      answer:'3',qFalse:'ぶっぶ～!正解はDの「ひばり」だよ',
      info:'最近やってるゲームのキャラの名前の一部なんだけど、最初読めなかったらしいよ。'},
      {question:'1日にはく空気で、何個の風船を膨らませられる？',choices:['A.100個','B.1000個','C.10000個','D.100000個'],
      answer:'2',qFalse:'ぶっぶ～!正解はCの「10000個」だよ',
      info:'10000個も風船があったら空が飛べるのでは、、、すごい。'},
      {question:'日本人で一番多い血液型は？',choices:['A.A型','B.B型','C.AB型','D.C型'],
      answer:'0',qFalse:'ぶっぶ～!正解はAの「A型」だよ',
      info:'日本人で一番多い血液型はA型で全体の約40％、O型は約30%、B型は約20%、AB型は約10%らしいよ。\nちなみに管理者はA型なんだって。'},
    ],
  ];