class Personalbot extends Chatbot{
    constructor(){
        super();
        this.botType='PERSONAL';

    }

    CreateMyText(text,li){
        const div = super.CreateMyText(text);
        div.classList.add('personalbot-right');
        li.appendChild(div);
    }

    CreateChoiceTitle(choiceField,text){
        const div = super.CreateChoiceTitle(text);
        div.classList.add('personal-choice-title');
        choiceField.appendChild(div);

    }

    CreateChoiceButton(choiceField,text,num,bot,type){
        const div = super.CreateChoiceButton(choiceField,text,num,bot,type);
        div.classList.add('personal-choice-button');
        choiceField.appendChild(div);
    }

    RobotOutputClick(li,bot){
        const div = super.RobotOutputClick(li,bot)
        div.classList.add('personal-choice-button');

    }

    BotOrgNormal(chatList,robotCount,randomNum,div,bot){
        //問題の答えか
        if (robotCount > 1 && chatList[robotCount].questionNextSupport) {
            console.log('次の回答の選択肢は' + bot.nextTextOption);
            div.textContent = chatList[chatList.length-1][randomNum].info;
        } 
        //質問の詳細か
        else if (bot.nextTextOption !== "") {
            div.textContent = chatList[chatList.length-1][randomNum].answer[bot.nextTextOption];
            bot.nextTextOption = "";
        }else {
            div.textContent = chatList[robotCount].text;
            //返信を可能にする
            bot.chatSubmitBtn.disabled = false;

        }    
    }

    pushChoice(bot,e){
        const choicedId = e.getAttribute('id');
        super.pushChoice(bot,choicedId);
        if (bot.chatList[bot.robotCount].questionNextSupport) {
            if (String(bot.robotCount).length === 1) {
                //robotCountの桁数が一桁の時
                bot.nextTextOption = choicedId.slice(4);
            } else if (String(bot.robotCount).length === 2) {
                // robotCountの桁数が2桁の時
                bot.nextTextOption = choicedId.slice(5);
            } else if (String(bot.robotCount).length === 3) {
                // robotCountの桁数が3桁の時
                bot.nextTextOption = choicedId.slice(6);
            }
        }
    }

    textSpecial(){
     
        this.chatList[3].text = `こんにちは！${userData[0]}先生`;
        // this.chatList[this.chatList.length-4].text = `問題は以上です！${this.chatList[this.chatList.length-1].length}問中${this.qPoint}問正解でした！`;
        //  chatList[11].text.qTrue = `正解！${userData[0]}先生,すごいですねー`;
        //  chatList[12].text = `${userData[0]}先生、ありがとうございました。今日はここで終了とさせていただきます。`;
        //  chatList[15].text = `${userData[0]}さんの満足度は「${userData[4]}」，ご感想は「${userData[5]}」ですね！ありがとうございました。`;
     }
}

 // loadjson.jsファイルの読み込み
 const personalbot = new Personalbot();
 var script = document.createElement('script');
 script.type = 'text/javascript';
 script.src = '../../resource/data/personalData.js';
 script.onload = function(){
    personalbot.loadjsonReady(personalbot);
 }
 document.body.appendChild(script);