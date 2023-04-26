window.SWEETS = [
    {text: 'ようこそ「Quizbot」へ!',continue:true,option:'normal'},
    {text: '会話内容は管理者へ送信されませんので、ご安心ください。',continue: true,option: 'normal'},
    {text: 'あなたのお名前は何ですか？', continue: true, option: 'normal'},
    {text: '', continue: false, option: 'normal'},
    {text: 'それでは問題を出します！',continue: true,option:'normal'},
    {text: {title:'Q1',question:'シュークリームの「シュー」の意味は？',choices:['A.キャベツ','B.わた','C.雲','D.島根県'],answer:'0'},continue:true,option:'choices'},
    {text: {qTrue:'あってるぅ！',qFalse:'ぶっぶ～!\n正解はAの「キャベツ」だよ', }, continue: false, option: 'normal'},
    {text: '「シュー」がフランス語でキャベツを意味していて、シュークリームがキャベツに似ていることから名付けられたらしいよ。', continue: true, option: 'normal'},
    {text: '今日の体調はいかがですか？', continue: false, option: 'normal'},
    {text: ['そうですか！', 'わかりました！', '承知致しました！'], continue: true, option: 'random'},
    {text: 'ここで問題です！', continue: true, option: 'normal'},
    {text: {title: 'Q2', question: 'どの山が世界一高いでしょう？', choices: ['エベレスト', 'K2', '富士山'], answer: '0'}, continue: false, option: 'choices'},
    {text: {qTrue: '', qFalse:'残念！正解は「エベレスト」でした。'}, continue: true, option: 'normal'},
    {text: '', continue: true, option: 'normal'},
    {text: {title: '満足度調査', question: 'このAIチャットボットの満足度を5段階で教えてください（数字が大きいほど満足度が高いものとします。）。', choices: ['5', '4', '3', '2', '1']}, continue: false, option: 'choices'},
    {text: 'ありがとうございます。最後に、ご感想をお聞かせください。', continue: false, option: 'normal'},
    {text: '', continue: false, option: 'normal'}
  ];