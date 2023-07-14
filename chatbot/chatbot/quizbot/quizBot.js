
 class Quizbot extends Chatbot{
    constructor(){
        super();
        this.botType='QUIZ';

        this.qNum = 6;
        //ランダムで選ばれた問題のID
        this.randomNum = 0;
        this.allQuizList = [];
        this.quizList = [];

        //選択肢の正解個数
        this.qPoint = 0;

        //サウンドマネージャー
        const soundNameList = {'correct':'se','incorrect':'se','quizBot':'bgm'}
        this.soundMng = new SoundManager();
        for (const key in soundNameList) {
            if (soundNameList.hasOwnProperty(key)) {
              const path = soundNameList[key];
              this.soundMng.LoadSound(key,key,path);
            }
        }
    }

    CreateMyText(text,li){
        const div = super.CreateMyText(text);
        div.classList.add('quizbot-right');
        li.appendChild(div);
    }

    CreateChoiceTitle(choiceField,text){
        const div = super.CreateChoiceTitle(text);
        div.classList.add('quiz-choice-title');
        choiceField.appendChild(div);
    }

    CreateChoiceButton(choiceField,text,num,bot,type){
        const div = super.CreateChoiceButton(choiceField,text,num,bot,type);
        div.classList.add('quiz-choice-button');
        choiceField.appendChild(div);
    }

    RobotOutputClick(li,bot){
        const div = super.RobotOutputClick(li,bot);
        div.classList.add('quiz-choice-button');
    }    
    
    BotOrgNormal(chatList,robotCount,div,bot,randomNum){
        //問題の答えか
        let text = '';
        if (chatList[robotCount].text.qTrue) {
            //現在の問題が自分が入力するタイプの問題かどうか
            if(!chatList[chatList.length-1][randomNum].choices){
                //入力された内容と答えがあっているか
                const answerWords = chatList[chatList.length - 1][randomNum].answer;
                const userInput = userData[userData.length - 1];

                let containsWord = false;
                for (let i = 0; i < answerWords.length; i++) {
                    if (userInput.includes(answerWords[i])) {
                      containsWord = true;
                      break;
                    }
                  }
                if(containsWord){
                    // div.textContent = chatList[robotCount].text['qTrue'];
                    text = chatList[robotCount].text['qTrue'];
                    bot.qPoint++;
                    this.soundMng.PlaySound('correct');    
                }else{
                    chatList[robotCount].text['qFalse'] = chatList[chatList.length-1][randomNum].qFalse;
                    // div.textContent = chatList[robotCount].text['qFalse'];
                    text = chatList[robotCount].text['qFalse'];
                    this.soundMng.PlaySound('incorrect');    
                }
            }else{
                chatList[robotCount].text['qFalse'] = chatList[chatList.length-1][randomNum].qFalse;
                // div.textContent = chatList[robotCount].text[bot.nextTextOption];
                text = chatList[robotCount].text[bot.nextTextOption];
                if(bot.nextTextOption =='qTrue'){
                    this.soundMng.PlaySound('correct');    
                }else{
                    this.soundMng.PlaySound('incorrect');    
                }
            }
        }
        //答えの詳細か
        else if (robotCount > 1 && chatList[robotCount].questionNextSupport) {
            console.log('次の回答の選択肢は' + bot.nextTextOption);
            text = chatList[chatList.length-1][randomNum].info;
            // div.textContent = chatList[chatList.length-1][randomNum].info;
        } else {
            text = chatList[robotCount].text;
            // div.textContent = chatList[chatList.length-1][randomNum].info;

        }
        bot.displayText(text,div,bot,function(){
            return true;
        });
        bot.chatSubmitBtn.disabled = false;

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
                // SEを再生
                // this.soundMng.PlaySound('correct');    
        } else {
                //不正解
                bot.nextTextOption = 'qFalse';
                // this.soundMng.PlaySound('incorrect');    

            }
        } else {
            if (chatList[robotCount -1].quetionNextSupport) {
                if (String(robotCount -1).length === 1) {
                    //robotCountの桁数が一桁の時
                    bot.nextTextOption = choicedId.slice(4);
                } else if (String(robotCount).length === 2) {
                    // robotCountの桁数が2桁の時
                    nextTextOption = choicedId.slice(5);
                } else if (String(robotCount).length === 3) {
                    // robotCountの桁数が3桁の時
                    nextTextOption = choicedId.slice(6);
                }
            }
        }
    }

    textSpecial(){
     
        this.chatList[3].text = `こんにちは！${userData[0]}先生`;
        this.chatList[this.chatList.length-4].text = `問題は以上です！${this.qNum}問中${this.qPoint}問正解でした！`;
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
    soundMng.PlaySound('quizBot','true','true');
 }
 document.body.appendChild(script);

 
 