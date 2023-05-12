class Personalbot extends Chatbot{
    constructor(){
        super();
    }
}

 // loadjson.jsファイルの読み込み
 const quizbot = new Personalbot();
 var script = document.createElement('script');
 script.type = 'text/javascript';
 script.src = '../../resource/data/personalData.js';
 script.onload = function(){
    quizbot.loadjsonReady(quizbot);
 }
 document.body.appendChild(script);