class Psychobot extends Chatbot{
    constructor(){
        super();
        this.botType='PSYCHO';
        this.qNum = 5;
        this.psyPt=0;
        this.psyAnsList=[
            'サイコパス度は20%、ほとんどサイコパスの素質はありません。\n非常に共感力が高く、優しい心の持ち主といえるでしょう。\nサイコパスとは真逆の性格なので、身の回りにサイコパスと思われる人がいる場合は、自分とは違う感覚の人間であることを理解しておきましょう。',
            'サイコパス度は50%、少しサイコパスの素質を持っています。\n普通の人と同じレベルの共感力を持っていますが、嘘をついたり利己的な行動を取ったりすると、トラブルを引き起こす危険性があります。\nサイコパス性のある人がやりがちな行動をしないように十分注意しましょう。',
            'サイコパス度は70%、サイコパスの可能性が高いです。\n基本的に共感力が低く、利己的で他人に配慮がありません。\nしかし、感情をコントロールするのがうまく、決断が速いという特徴もあります。',
            'サイコパス度は100%、間違いなくサイコパスです。\nサイコパスの人は、無計画で衝動的な行動を取ってしまう傾向にあります。\n人生が破綻するような犯罪を引き起こしてしまう可能性もあるので、十分注意してください。\nまた、サイコパスは良心と共感が欠如しているので、人が離れていき、孤独に悩むケースが多いようです。\n他人に接することができるといいでしょう。']
    }
    Init(){
        super.Init();
        this.psyPt = 0;
    }

    CreateMyText(text,li){
        const div = super.CreateMyText(text);
        div.classList.add('psychobot-right');
        li.appendChild(div);
    }

    CreateChoiceTitle(choiceField,text){
        const div = super.CreateChoiceTitle(text);
        div.classList.add('psycho-choice-title');
        choiceField.appendChild(div);
    }

    CreateChoiceButton(choiceField,text,num,bot,type){
        const div = super.CreateChoiceButton(choiceField,text,num,bot,type);
        div.classList.add('psycho-choice-button');
        choiceField.appendChild(div);
    }

    RobotOutputClick(li,bot){
        const div = super.RobotOutputClick(li,bot)
        div.classList.add('psycho-choice-button');
        return true;
    }

    RobotOutputChoice(li,bot){
        const robotCount = bot.robotCount;
        const chatList = bot.chatList;
        const choiceField = document.createElement('div');
        choiceField.id = `q-${robotCount}`;
        choiceField.classList.add('chatbot-left-rounded','chatbot-left-rounded-size');
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
        choiceField.appendChild(choiceQ);

        bot.displayText(chatList[chatList.length-1][bot.randomNum].question,choiceQ,bot,function(){
            //choiceQ.textContent = chatList[chatList.length-1][bot.randomNum].question;
            //選択肢
            if(chatList[chatList.length-1][bot.randomNum].choices){
                bot.displayChoicesWithDelay(chatList[chatList.length-1][bot.randomNum].choices, 0, choiceField, bot,'CHOICE');
            }else{
                bot.chatSubmitBtn.disabled = false;
            }
            chatToBottom();
            return true;
        });

    }

    BotOrgNormal(chatList,robotCount,randomNum,div,bot){
        let text='';
        if (robotCount > 1 && chatList[robotCount].questionNextSupport){
            if(chatList[chatList.length-1][randomNum].answer) {
                text = chatList[chatList.length-1][randomNum].answer[bot.nextTextOption];
                const pt = Math.floor(100/this.qNum*(1/chatList[chatList.length-1][randomNum].point[bot.nextTextOption]));
                bot.psyPt += pt;
                text += `\nサイコパスポイント+${pt}!!`;
                bot.displayText(text,div,bot,function(){
                    bot.nextTextOption = "";
                });
            }else if(chatList[chatList.length-1][randomNum].input){
                //文章がサイコパスか調べる
                text = bot.checkPsycho(chatList,randomNum,bot);
                bot.displayText(text,div,bot,function(){
                    return true;
                })    
            }
        //質問の詳細か
        }else{
            if(robotCount == chatList.length-4){
                //0~24(0),25~49(1),50~74(2),75~99(3)でランク分けする
                const num = Math.floor((bot.psyPt-1)/25);
                text +=`あなたのサイコパスポイントは${bot.psyPt }ポイントでした！！！\n\n`
                text += bot.psyAnsList[num];
            }else{
                text = chatList[robotCount].text; // 表示するテキスト
            }
            //返信を可能にする
            bot.chatSubmitBtn.disabled = false;   
            bot.displayText(text,div,bot,function(){
                return true;
            })    
        }
    }

    checkPsycho(chatList,randomNum,bot){
        //入力された内容にword配列の文字列がいくつ含まれているか探索する
        //入力された文
        const userDataLastSentence = userData[userData.length-1];
        //含まれているか判定する文字列の配列
        const wordsToMatch = chatList[chatList.length-1][randomNum].word;
        //それぞれの文字列の有無を保持する配列
        const matchCounts = {};
        //実際の判定する処理
        for (const word of wordsToMatch) {
            matchCounts[word] = userDataLastSentence.includes(word);
        }   

        //判定する文字列が一定以上(デフォルトは半分)含まれていたらサイコパス判定
        let num=0;
        let psychoFlag = false;
        //まずは何種類マッチングしたかカウント
        for(const word of Object.keys(matchCounts)){
            if(matchCounts[word]){
                num++;
            }
        }
        if(chatList[chatList.length-1][randomNum].psychoNum){
            if(chatList[chatList.length-1][randomNum].psychoNum <= num){
                psychoFlag = true;
            }
        }else{
            if(num >= wordsToMatch.length/2){
                psychoFlag = true;
            }
        }  
        //サイコパスかどうかで文章を変える
        let text = '';
        text += 'あなたの回答は、、、\n\n'
        if(psychoFlag){
            const pt = 100/this.qNum;
            bot.psyPt += pt;
            text += `サイコパスといえるでしょう。\nサイコパスポイント+${pt}!!\n\n`;
        }else{
            text += '一般人ですね。\n\n'
        }         
        text += chatList[chatList.length-1][randomNum].input;
        return text;
    }


    pushChoice(bot,e){
        const choicedId = e.getAttribute('id');
        super.pushChoice(bot,choicedId);
        if (bot.chatList[bot.robotCount].questionNextSupport) {
            //選んだ選択肢の添え字をnextTextOptionに保存する
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
 const psychobot = new Psychobot();
 var script = document.createElement('script');
 script.type = 'text/javascript';
 script.src = '../../resource/data/psychoData.js';
 script.onload = function(){
    psychobot.loadjsonReady(psychobot);
 }
 document.body.appendChild(script);