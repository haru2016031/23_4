class Personalbot extends Chatbot{
    constructor(){
        super();
        this.botType='PERSONAL';
        this.robotOutputList['item'] = this.RobotOutputItem;

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

    CreateItemButton(choiceField,text,num,bot){
        const itemDiv = document.createElement('div');
        itemDiv.id = `${choiceField.id}-${num}`;
        itemDiv.classList.add('personal-item');
        itemDiv.textContent = text;
        itemDiv.classList.add('personal-choice-button');
        choiceField.appendChild(itemDiv);
    }

    RobotOutputClick(li,bot){
        const div = super.RobotOutputClick(li,bot)
        div.classList.add('personal-choice-button');
    }

    RobotOutputChoice(li,bot){
        const robotCount = bot.robotCount;
        const chatList = bot.chatList;
        const choiceField = document.createElement('div');
        choiceField.id = `q-${robotCount}`;
        choiceField.classList.add('chatbot-left-rounded');
        li.appendChild(choiceField);

        //質問タイトル
        bot.CreateChoiceTitle(choiceField,chatList[robotCount].text.title);
        
        //問題のランダム選出
        const qList = chatList[chatList.length-1];
        while (true) {
            const n = Math.floor(Math.random() * qList.length);

            if (!bot.quizList.includes(n)) {
                bot.randomNum = n;
                bot.quizList.push(bot.randomNum);
                break; // `quizList` に含まれない数字が出たらループから抜ける
            }
        }

        //質問文
        const choiceQ = document.createElement('div');
        choiceQ.classList.add('choice-q');
        choiceQ.textContent = chatList[chatList.length-1][bot.randomNum].question;
        choiceField.appendChild(choiceQ);
        //選択肢
        if(chatList[chatList.length-1][bot.randomNum].choices){
            for (let i = 0; i < chatList[chatList.length-1][bot.randomNum].choices.length; i++) {
                bot.CreateChoiceButton(choiceField,chatList[chatList.length-1][bot.randomNum].choices[i],i,bot,'CHOICE');
            }
        }else if(chatList[chatList.length-1][bot.randomNum].items){
            for (let i = 0; i < chatList[chatList.length-1][bot.randomNum].items.length; i++) {
                bot.CreateItemButton(choiceField,chatList[chatList.length-1][bot.randomNum].items[i],i,bot);
            }
            bot.chatSubmitBtn.disabled = false;
        }else{
            bot.chatSubmitBtn.disabled = false;
        }
        

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