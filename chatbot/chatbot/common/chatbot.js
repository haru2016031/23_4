
// ユーザの返信を入れる配列
let userData = [];
//自分のアイコンID
let myIconID = '../../resource/img/botIcon2.png';


class Chatbot{
    constructor(){
        this.botType='CHAT';
        this.chatList= "";
        this.loadFlag = false;
         //ロボットアイコンID
        this.robotIconID = '../../resource/img/botIcon1.png';
        //選択肢を押したときの次の選択肢
        this.nextTextOption = '';
        this.userText = document.getElementById('chatbot-text');
        this.chatSubmitBtn = document.getElementById('chatbot-submit');
        this.robotOutputList = {
            'choices':this.RobotOutputChoice,
            'select':this.RobotOutputSelect,
            'normal':this.RobotOutputNormal,
            'click':this.RobotOutputClick
        }
        this.Init()
        }
    Init(){
        this.robotCount = 0;
        this.qPoint = 0;
        this.randomNum = 0;
        this.nextTextOption = '';
        this.quizList = [];
        userData = [];
    }

    //可変する文章
    textSpecial(){};

    //自分の投稿作成
    CreateMyText(text) {
        // 入力内容を含む要素を作成
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('chatbot-right');
        contentDiv.textContent = text;
        return contentDiv;
        
    };

    //選択肢のタイトル作成
    CreateChoiceTitle(text){
        const choiceTitle = document.createElement('div');
        choiceTitle.classList.add('choice-title');
        choiceTitle.textContent = text;
        return choiceTitle;
    };

    //選択肢のボタン作成
    CreateChoiceButton(choiceField,text,num,bot,type){
        const choiceButton = document.createElement('button');
        choiceButton.id = `${choiceField.id}-${num}`;//id設定
        choiceButton.addEventListener('click', function() {
            if(type==='CHOICE'){
                bot.pushChoice(bot,choiceButton);
            }else if(type==='SELECT'){
                bot.pushSelect(bot,choiceButton);
            }
          });            
        choiceButton.classList.add('choice-button');
        choiceButton.textContent = text;
        return choiceButton;

    }


    //スタンプボタンについて
    SetStampButton(){
        const stampSubmit = document.getElementById('stamp-submit');
        const chatbotStampField = document.getElementById('chatbot-main');

        stampSubmit.addEventListener('click', () => {
            const stampId = document.getElementById('stampField-ul');
            if(chatbotStampField.style.top == '0px')
            {
                const h = stampId.scrollHeight.toString();
                chatbotStampField.style.top = `-${h}px`;
            }else{
                chatbotStampField.style.top = '0px';
            }
        });
    }

    //チャットの最後の文言
    pushSelect(bot,e){
        const choicedId = e.getAttribute('id'); //選択した選択肢のid
        //回答内容の保存
        const ans = document.getElementById(choicedId).textContent;
        userData.push(ans);
        const quizNum = bot.robotCount -1;

        for (let i = 0; i < bot.chatList[quizNum].text.choices.length; i++) {
            document.getElementById('q-' + quizNum + '-' + i).disabled = true;
            document.getElementById('q-' + quizNum + '-' + i).classList.add('choice-button-disabled');
            document.getElementById(choicedId).classList.remove('choice-button-disabled');
        }

        bot.CreateMyOutput(ans)

        if(ans == '終了する'){
            // 2秒後に指定したURLに遷移する
            setTimeout(() => {
                window.location.href = '../home/home.html';
            }, 2000);
        }else{
            bot.Init();
            bot.robotOutput();
        }
    }

    //選択肢の処理
    pushChoice(bot,choicedId) {
        const chatList = bot.chatList;
        const robotCount = bot.robotCount;
        const randomNum = bot.randomNum;
        //回答内容の保存
        const ans = document.getElementById(choicedId).textContent;
        userData.push(ans);
        const num = robotCount - 1;
        for (let i = 0; i < chatList[chatList.length-1][randomNum].choices.length; i++) {
            document.getElementById('q-' + num + '-' + i).disabled = true;
            document.getElementById('q-' + num + '-' + i).classList.add('choice-button-disabled');
            document.getElementById(choicedId).classList.remove('choice-button-disabled');
        }
        bot.CreateMyOutput(ans.split('.')[1])

        bot.robotOutput();

    }

    //選択肢のある投稿を生成
    RobotOutputChoice(li,bot){
        const robotCount = bot.robotCount;
        const chatList = bot.chatList;
        const qAnswer = `q-${robotCount}-${chatList[robotCount].text.answer}`;
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
        for (let i = 0; i < chatList[chatList.length-1][bot.randomNum].choices.length; i++) {
            bot.CreateChoiceButton(choiceField,chatList[chatList.length-1][bot.randomNum].choices[i],i,bot,'CHOICE');
        }

    }

    //終了する？の生成
    RobotOutputSelect(li,bot){
        const chatList = bot.chatList;
        const robotCount = bot.robotCount;
        const choiceField = document.createElement('div');
        choiceField.id = `q-${robotCount}`;
        choiceField.classList.add('chatbot-left-rounded');
        li.appendChild(choiceField);
    
        //質問タイトル
        bot.CreateChoiceTitle(choiceField,chatList[robotCount].text.title)
    
        //質問文
        const choiceQ = document.createElement('div');
        choiceQ.classList.add('choice-q');
        choiceQ.textContent = chatList[robotCount].text.question;
        choiceField.appendChild(choiceQ);
        
        //選択肢
        for (let i = 0; i < chatList[robotCount].text.choices.length; i++) {
            bot.CreateChoiceButton(choiceField,chatList[robotCount].text.choices[i],i,bot,'SELECT')
        }
    
     }

    //次の問題に行くか行かないか
    RobotOutputClick(li,bot){
        const choiceField = document.createElement('div');
        choiceField.classList.add('chatbot-left-rounded');
        const button = document.createElement('button');
        button.addEventListener('click', function() {
            bot.robotOutput();
        });
        button.classList.add('choice-button');
        button.textContent = bot.chatList[bot.robotCount].text;
        button.style.marginBottom='0px';
        choiceField.appendChild(button);
        li.appendChild(choiceField);
        return button;
    };
    
    //通常の投稿
    RobotOutputNormal(li,bot){
        // このdivにテキストを指定
        const div = document.createElement('div');
        li.appendChild(div);
        div.classList.add('chatbot-left');
    
        //テキストを加工
        bot.textSpecial();
    
        //投稿内容のタイプ判別
        //通常の内容投稿
        const chatList = bot.chatList;
        const robotCount = bot.robotCount;
        const randomNum = bot.randomNum;
        if (chatList[robotCount].option == 'normal') {
            bot.BotOrgNormal(chatList,robotCount,randomNum,div,bot);
        } else {
            //複数の回答からランダムで投稿
            const rand = Math.random();
            const randNum = rand * chatList[robotCount].text.length;
            const num = Math.floor(randNum)
    
            div.textContent = chatList[robotCount].text[num];
        }
     }

     //ボットごとの特殊な投稿
     BotOrgNormal(){};

     //ボットの投稿のメイン部分
     robotOutput() {
        console.log('robotCount:' + this.robotCount);
    
        //返信を不可にする
        this.chatSubmitBtn.disabled = true;
    
        // ulとliを作り、左寄せのスタイルを適用し投稿
        const ul = document.getElementById('chatbot-ul');
        const li = document.createElement('li');
        li.classList.add('left');
        ul.appendChild(li);
    
        //botアイコン表示
        const robotIconDiv = document.createElement('div');
        li.appendChild(robotIconDiv);
        robotIconDiv.classList.add('chatbot-icon');
        robotIconDiv.style.backgroundImage = `url(${this.robotIconID})`;
    
        //画像変更のためのファイル選択
        let robotIconFile = document.createElement('input');
        li.appendChild(robotIconFile);
        robotIconFile.type = 'file';
        robotIconFile.accept = '.png';
        robotIconFile.classList.add('icon-button');
        robotIconFile.addEventListener('change',()=>{
            this.ChangeRobotIcon(this)
        });
    
        //アイコンクリックでアイコンの変更
        robotIconDiv.addEventListener('click', () => {
            if (robotIconFile) {
                robotIconFile.click();
            }
        })
    
        const robotLoadingDiv = document.createElement('div');
        setTimeout(() => {
            li.appendChild(robotLoadingDiv);
            robotLoadingDiv.classList.add('chatbot-left');
            robotLoadingDiv.innerHTML = '<div id= "robot-loading-field"><span id= "robot-loading-circle1" class="material-icons">circle</span> <span id= "robot-loading-circle2" class="material-icons">circle</span> <span id= "robot-loading-circle3" class="material-icons">circle</span>';
    
            //下までスクロール
            chatToBottom();
        }, 100);
   
   
    
        setTimeout(() => {
            //考え中アニメ削除
            robotLoadingDiv.remove();
            this.robotOutputList[this.chatList[this.robotCount].option](li,this);
            this.robotCount++;
   
            //時間の表示
            const t = CreateTime();
            t.style.bottom = '-8px';
            li.appendChild(t);
   
            //下までスクロール
            chatToBottom();
    
            //連続投稿
            if (this.chatList[this.robotCount].continue) {
                this.robotOutput();
            }
    
        }, 200);
    
    }


    //ロボットのアイコンを変える
    ChangeRobotIcon(bot) {
        const file = window.event.target.files[0];
        const reader = new FileReader();
        reader.onload = function () {
            bot.robotIconID = reader.result;
            $('.chatbot-icon').css({
                backgroundImage: `url(${bot.robotIconID})`
            });
        }
        reader.readAsDataURL(file);
    
    }
    
   
    //自分の投稿生成
    CreateMyOutput(text){
       //ulとliを作り、右寄せのスタイルを適用し投稿する
       const ul = document.getElementById('chatbot-ul');
       const li = document.createElement('li');
   
       //時間の表示
       li.appendChild(CreateTime());
   
       // 名前の表示
       const nameDiv = document.createElement('div');
       nameDiv.classList.add('name-right');
       nameDiv.textContent = userData[0];
       li.appendChild(nameDiv);
   
       //投稿するテキスト作成
       this.CreateMyText(text,li);

       // アイコン用の要素を作成し、チャットボットのアイコンを設定する
       const iconDiv = document.createElement('div');
       iconDiv.classList.add('myIcon');
       const iconImg = document.createElement('img');
       iconImg.classList.add('myIconImg');
       iconImg.setAttribute('src', `${myIconID}`); // ここにアイコンの画像ファイルのパスを指定する
       iconDiv.appendChild(iconImg);
   
       //画像変更のためのファイル選択
       let myIconFile = document.createElement('input');
       li.appendChild(myIconFile);
       myIconFile.type = 'file';
       myIconFile.accept = '.png';
       myIconFile.classList.add('icon-button');
       myIconFile.addEventListener('change', ()=>{
        this.ChangeMyIcon(this)
       });
   
       //アイコンクリックでアイコン変更
       iconDiv.addEventListener('click', () => {
           if (myIconFile) {
               myIconFile.click();
           }
       }
       )
       li.appendChild(iconDiv);
   
       li.classList.add('right');
       ul.appendChild(li);
   
       //一番下までスクロール
       chatToBottom();
       
    }
    
    //自分の投稿のメイン部分
    myOutput(bot) {
        //空行の場合送信不可
        if (!bot.userText.value || !bot.userText.value.match(/\S/g) || bot.chatSubmitBtn.disabled) return false;
    
        //投稿内容の保存
        userData.push(bot.userText.value);
   
        //返信の作成
        bot.CreateMyOutput(bot.userText.value);
   
        //一番下までスクロール
        chatToBottom();
   
    
        if (bot.robotCount < Object.keys(bot.chatList).length) {
            bot.robotOutput();
        }
    
        //入力欄を空白にする鵜
        bot.userText.value = '';
    
    }
    
    //エンターで登校できるように
    enterOutput(bot,e) {
        if (e.code === 'NumpadEnter') {
            this.DebugOutput();
        }
        else if (e.code === 'Enter') {
            bot.myOutput(bot);
        }
    }
   


     //デバック連投
    DebugOutput() {
        //空行の場合送信不可
        if (!userText.value || !userText.value.match(/\S/g)) return false;

        //投稿内容の保存
        userData.push(userText.value);
        //ulとliを作り、右寄せのスタイルを適用し投稿する
        const ul = document.getElementById('chatbot-ul');
        const li = document.createElement('li');
        //作成したdivに入力内容を挿入
        const div = document.createElement('div');

        li.classList.add('right');
        ul.appendChild(li);
        li.appendChild(div);
        div.classList.add('chatbot-right');
        div.textContent = userText.value;

        //一番下までスクロール
        chatToBottom();

        if (robotCount < Object.keys(chatList).length) {
            robotOutput();
        }
    }


    // loadjson.jsファイルの読み込みが完了したら実行される関数を定義
    loadjsonReady(bot) {
        console.log(window.SWEETS);
        
        // window.SWEETSをchatList変数に代入
        if (bot.chatList.length == 0)
        {
            bot.chatList = window.SWEETS;
            bot.loadFlag = true;
        }

        //スタンプ部分の追加
        const html = CreateStampField();
        const id = document.getElementById('stampField-ul');
        id.innerHTML = html;
        const stampFieldId = document.getElementById('chatbot-stampField');
        stampFieldId.style.height = `${id.scrollHeight}px`;


        // ここからchatListを利用する処理を記述

        //最初のボットの発言
        bot.robotOutput();

        //自分の投稿
        //クリック投稿
        bot.chatSubmitBtn.addEventListener('click', function (){
            bot.myOutput(bot)
        });
        //エンター投稿
        bot.userText.addEventListener('keypress', function(event){
            bot.enterOutput(bot,event)
        });

        //  スタンプ関連
        bot.SetStampButton();

    }
};

//時間表示生成
function CreateTime(){
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0'); // 2桁に調整す;
    const timeDiv = document.createElement('div');
    timeDiv.classList.add('time');
    timeDiv.textContent = `${hours}:${minutes}`;
    return timeDiv;
    }

  //スタンププレビュー生成
function SetStampHTML(pathList){
    let html = '';
    for(let i=0;i<pathList.length;i++)
    {
        html += `<div class="preStamp" onclick="StampOutput('../../resource/img/stamp/${pathList[i]}.png')"><img src="../../resource/img/stamp/${pathList[i]}.png"></div>`;   
    };
    return html;     
};

//スタンプ部分のHTMLの内容
function CreateStampField(){
    const stampList =['kaeruka','hamster_sleeping','mamoru','calender_shock',
        'ganbare','murisuruna','flash_mob','dance_man','ahiruguchi_woman',
        'ai_dance','drone_illumination','money_shihei','motion_capture',
        'yumekawa_tenshi'
    ];
    const stampHtml = SetStampHTML(stampList);
    return stampHtml;
};

//スタンプ投稿
function StampOutput(path,bot){
    //ulとliを作り、右寄せのスタイルを適用し投稿する
    const ul = document.getElementById('chatbot-ul');
    const li = document.createElement('li');

    // 時間の表示
    li.appendChild(CreateTime());

    // 名前の表示
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name-right');
    nameDiv.textContent = userData[0];
    li.appendChild(nameDiv);
    

    //作成したdivに入力内容を挿入
    const stampDiv = document.createElement('div');
    ul.appendChild(li);
    li.appendChild(stampDiv);
    stampDiv.classList.add('stamp');
    const stampImg = document.createElement('img');
    stampImg.classList.add('stampImg');
    stampImg.setAttribute('src',path);
    stampDiv.appendChild(stampImg);

    // アイコン用の要素を作成し、チャットボットのアイコンを設定する
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('myIcon');
    const iconImg = document.createElement('img');
    iconImg.classList.add('myIconImg');
    iconImg.setAttribute('src', `${myIconID}`); // ここにアイコンの画像ファイルのパスを指定する
    iconDiv.appendChild(iconImg);

    //画像変更のためのファイル選択
    let myIconFile = document.createElement('input');
    li.appendChild(myIconFile);
    myIconFile.type = 'file';
    myIconFile.accept = '.png';
    myIconFile.classList.add('icon-button');
    myIconFile.addEventListener('change', ChangeMyIcon);

    //アイコンクリックでアイコン変更
    iconDiv.addEventListener('click', () => {
        if (myIconFile) {
            myIconFile.click();
        }
    }
    )
    li.appendChild(iconDiv);

    li.classList.add('right');

    //一番下までスクロール
    chatToBottom();

}

//自分のアイコンを変える
function ChangeMyIcon() {
    const file = window.event.target.files[0];
    const reader = new FileReader();
    reader.onload = function () {
        myIconID = reader.result;
        var imgs = document.querySelectorAll(".myIconImg");
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].src = myIconID;
        }
    }
    reader.readAsDataURL(file);
}

//一番下へ
function chatToBottom() {
    const chatField = document.getElementById('chatbot-body');
    chatField.scroll(0, chatField.scrollHeight - chatField.clientHeight);
}