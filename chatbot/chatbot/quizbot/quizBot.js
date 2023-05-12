
 class Quizbot extends Chatbot{
    constructor(){
        super();
        //ランダムで選ばれた問題のID
        this.randomNum = 0;
        this.quizList = [];

        //選択肢の正解個数
        this.qPoint = 0;

    }

    pushChoice(bot,e){
        const choicedId = e.getAttribute('id'); //選択した選択肢のid

        super.pushChoice(bot,choicedId);
        const chatList = bot.chatList;
        const robotCount = bot.robotCount;
        const randomNum = bot.randomNum;

        if (chatList[chatList.length-1][randomNum].answer) {
            //正解、不正解のある選択肢
            const trueChoice = `q-${robotCount -1}-${chatList[chatList.length-1][randomNum].answer}`;
            if (choicedId === trueChoice) {
                //正解
                bot.nextTextOption = 'qTrue';
                bot.qPoint++;
            } else {
                //不正解
                bot.nextTextOption = 'qFalse';
            }
        } else {
            if (chatList[robotCount -1].quetionNextSupport) {
                if (String(robotCount -1).length === 1) {
                    //robotCountの桁数が一桁の時
                    bot.nextTextOption = choicedId.slice(4);
                }
            }
        }
    }

    textSpecial(){
     
        this.chatList[3].text = `こんにちは！${this.userData[0]}先生`;
        this.chatList[this.chatList.length-4].text = `問題は以上です！${this.chatList[this.chatList.length-1].length}問中${this.qPoint}問正解でした！`;
        //  chatList[11].text.qTrue = `正解！${userData[0]}先生,すごいですねー`;
        //  chatList[12].text = `${userData[0]}先生、ありがとうございました。今日はここで終了とさせていただきます。`;
        //  chatList[15].text = `${userData[0]}さんの満足度は「${userData[4]}」，ご感想は「${userData[5]}」ですね！ありがとうございました。`;
     }
 }

 // loadjson.jsファイルの読み込み
 const quizbot = new Quizbot();
 var script = document.createElement('script');
 script.type = 'text/javascript';
 script.src = '../../resource/data/quizData.js';
 script.onload = function(){
    quizbot.loadjsonReady(quizbot);
 }
 document.body.appendChild(script);

 
 