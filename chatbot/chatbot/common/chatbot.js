
// ユーザの返信を入れる配列
let userData = [];
//自分のアイコンID
let myIconID = '../../resource/img/botIcon2.png';
//ロボットアイコンID
let robotIconID = '../../resource/img/botIcon1.png';

//投稿ロード時間
const defaultDelay = 800;
let delay = defaultDelay;
const stampDelay = 800;

const defaultTextDelay = 100;
let textDelay = 100; // 一文字ごとの遅延時間（ミリ秒）
let textFlag = false;

//遅延関数のID
let timeID = null;

//スタンプ返答path
let botStampPath = '';

//スタンプリスト
const stampList =['kaeruka','hamster_sleeping','mamoru','calender_shock',
'ganbare','murisuruna','flash_mob','dance_man','ahiruguchi_woman',
'ai_dance','drone_illumination','money_shihei','motion_capture',
'yumekawa_tenshi'
];

//waitOutputの間隔
const waitTime = 60000;

//サウンドマネージャー
const soundNameList = {'output':'se','stamp':'se','select':'se'}
const soundMng = new SoundManager();
for (const key in soundNameList) {
    if (soundNameList.hasOwnProperty(key)) {
        const path = soundNameList[key];
        soundMng.LoadSound(key,key,path);
    }
}


class Chatbot{
    constructor(){
        this.Init()
        this.botType='CHAT';
        this.chatList= "";
        this.allQuizList = [];
        this.loadFlag = false;
        this.robotCount = 0;
        userData = [];        
        //選択肢を押したときの次の選択肢
        this.nextTextOption = '';
        this.userText = document.getElementById('chatbot-text');
        this.chatSubmitBtn = document.getElementById('chatbot-submit');
        this.robotOutputList = {
            'choices':this.RobotOutputChoice,
            'select':this.RobotOutputSelect,
            'normal':this.RobotOutputNormal,
            'click':this.RobotOutputClick,
            'news':this.RobotOutputNews
        }
        }
    Init(){
        this.robotCount = 4;
        this.qPoint = 0;
        this.quizList = [];
        this.randomNum = 0;
        this.nextTextOption = '';
        userData.splice(1, userData.length - 1);        
        this.itemList = [];
        const ulElement = document.getElementById('chatbot-ul'); // ul要素の取得
        while (ulElement.firstChild) {
            ulElement.removeChild(ulElement.firstChild);
          }
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
                soundMng.PlaySound('select');
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
        const num = robotCount - 1;

        for (let i = 0; i < chatList[chatList.length-1][randomNum].choices.length; i++) {
            if(!document.getElementById('q-' + num + '-' + i)){
                return;
            }
        }

        //回答内容の保存
        const ans = document.getElementById(choicedId).textContent;
        userData.push(ans);
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
        const choiceField = document.createElement('div');
        choiceField.id = `q-${robotCount}`;
        choiceField.classList.add('chatbot-left-rounded','chatbot-left-rounded-size');
        li.appendChild(choiceField);

        //質問タイトル
        bot.CreateChoiceTitle(choiceField,chatList[robotCount].text.title);
        
        //問題のランダム選出
        const qList = chatList[chatList.length-1];
        if(bot.allQuizList.length >= qList.length){
            //問題がすべて出題されたたら、出題状況をリセットする
            bot.allQuizList.length = 0;
        }

        //すでに出題された問題と被らないよう調整
        while (true) {
            const n = Math.floor(Math.random() * qList.length);

            if (!bot.quizList.includes(n) && !bot.allQuizList.includes(n)) {
                bot.randomNum = n;
                bot.quizList.push(bot.randomNum);
                bot.allQuizList.push(bot.randomNum);
                break; // `quizList` に含まれない数字が出たらループから抜ける
            }
        }

        //質問文
        const choiceQ = document.createElement('div');
        choiceQ.classList.add('choice-q');
        choiceField.appendChild(choiceQ);

        bot.displayText(chatList[chatList.length-1][bot.randomNum].question,choiceQ,bot,function(){
            // choiceQ.textContent = chatList[chatList.length-1][bot.randomNum].question;
            //選択肢
            if(chatList[chatList.length-1][bot.randomNum].choices){
                bot.displayChoicesWithDelay(chatList[chatList.length-1][bot.randomNum].choices,0,choiceField,bot,'CHOICE');
                // for (let i = 0; i < chatList[chatList.length-1][bot.randomNum].choices.length; i++) {
                //     bot.CreateChoiceButton(choiceField,chatList[chatList.length-1][bot.randomNum].choices[i],i,bot,'CHOICE');
                // }
            }else{
                chatToBottom();
                bot.chatSubmitBtn.disabled = false;
            }
            return true;
        });
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
        choiceField.appendChild(choiceQ);
        // choiceQ.textContent = chatList[robotCount].text.question;

        bot.displayText(chatList[robotCount].text.question,choiceQ,bot,function(){

            //選択肢
            bot.displayChoicesWithDelay(chatList[robotCount].text.choices,0,choiceField,bot,'SELECT');
            // bot.CreateChoiceButton(choiceField,chatList[robotCount].text.choices[i],i,bot,'SELECT')
            return true;
            
        })
    }

    displayChoicesWithDelay(choices, index, choiceField, bot,type) {
        if (index < choices.length) {
          bot.CreateChoiceButton(choiceField, choices[index], index, bot, type);
          chatToBottom();
          setTimeout(() => {
            bot.displayChoicesWithDelay(choices, index + 1, choiceField, bot,type);
          }, 1000); // 1秒ごとに次の選択肢を表示する（適宜変更可能）
        }
      }

    //次の問題に行くか行かないか
    RobotOutputClick(li,bot){
        const choiceField = document.createElement('div');
        choiceField.classList.add('chatbot-left-rounded');
        const button = document.createElement('button');
        button.addEventListener('click', function() {
            bot.robotOutput();
            soundMng.PlaySound('select');
            button.disabled = true;
        });
        button.classList.add('choice-button');
        const text = bot.chatList[bot.robotCount].text;
        bot.displayText(text,button,bot,function(){
            return true;
        })
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
            return bot.BotOrgNormal(chatList,robotCount,div,bot,randomNum);
        } else {
            //複数の回答からランダムで投稿
            const rand = Math.random();
            const randNum = rand * chatList[robotCount].text.length;
            const num = Math.floor(randNum);
    
            div.textContent = chatList[robotCount].text[num];
        }
     }

     //ボットごとの特殊な投稿
     BotOrgNormal(){};

     //ニュース専用の投稿
     RobotOutputNews(){};

     //ボットの投稿のメイン部分
     robotOutput() {
        console.log('robotCount:' + this.robotCount);
    
        //返信を不可にする
        this.chatSubmitBtn.disabled = true;

        //ひとつ前の台本がcontinue=falseなら遅延描画をなくす
        if(this.chatList[this.robotCount].continue == false && delay > 0){
            delay =0;
        }else if(this.chatList[this.robotCount].continue == true && delay != defaultDelay){
            delay = defaultDelay;
        }
    
        // ulとliを作り、左寄せのスタイルを適用し投稿
        const ul = document.getElementById('chatbot-ul');
        const li = document.createElement('li');
        li.classList.add('left');
        ul.appendChild(li);
    
        //botアイコン表示
        const robotIconDiv = document.createElement('img');
        li.appendChild(robotIconDiv);
        robotIconDiv.classList.add('chatbot-icon');
        robotIconDiv.setAttribute('src',`${robotIconID}`);
    
        //画像変更のためのファイル選択
        let robotIconFile = document.createElement('input');
        li.appendChild(robotIconFile);
        robotIconFile.type = 'file';
        robotIconFile.accept = '.png';
        robotIconFile.classList.add('icon-button');
        robotIconFile.addEventListener('change',()=>{
            ChangeRobotIcon()
        });
    
        //下までスクロール
        chatToBottom();
    
        const robotLoadingDiv = document.createElement('div');
        setTimeout(() => {
            li.appendChild(robotLoadingDiv);
            robotLoadingDiv.classList.add('chatbot-left');
            robotLoadingDiv.innerHTML = '<div id= "robot-loading-field"><span id= "robot-loading-circle1" class="material-icons">circle</span> <span id= "robot-loading-circle2" class="material-icons">circle</span> <span id= "robot-loading-circle3" class="material-icons">circle</span>';
    
            //下までスクロール
            chatToBottom();
        }, delay);
    
        setTimeout(() => {
            //考え中アニメ削除
            robotLoadingDiv.remove();

            //内容の作成、投稿
            this.robotOutputList[this.chatList[this.robotCount].option](li,this);
            this.robotCount++;
   
            //時間の表示
            const t = CreateTime();
            t.style.bottom = '-8px';
            li.appendChild(t);
   
            //下までスクロール
            chatToBottom();
    
    
        }, delay*1.5);
    }    
   
    //自分の投稿生成
    CreateMyOutput(text){
       //ulとliを作り、右寄せのスタイルを適用し投稿する
       const ul = document.getElementById('chatbot-ul');
       const li = document.createElement('li');
   
       //時間の表示
       li.appendChild(CreateTime());
   
       // 名前の表示
       CreateName(li);
   
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
            ChangeMyIcon()
       });
   
       li.appendChild(iconDiv);
   
       li.classList.add('right');
       ul.appendChild(li);
   
       //一番下までスクロール
       chatToBottom();
       
    }

    //テキスト遅延描画(完了後実行関数あり)
    displayText(text, div,bot, callback) {
        let index = 0;
        div.textContent = text;
        function display() {
          if (index < text.length) {
            let nextText = text.substr(0, index + 1);
            chatToBottom(); 
            div.textContent = nextText;            
            index++;
            setTimeout(display, textDelay);
          } else {
            callback(); // displayTextが完了した後にコールバック関数を呼び出す
            //連続投稿
              if (bot.chatList[bot.robotCount].continue) {
                bot.robotOutput(); 
                if(timeID != null){
                    clearTimeout(timeID);
                    // clearInterval(timeID);
                    timeID = null;
                }
              } else if (timeID == null && bot.botType != 'NEWS'){
                timeID = setTimeout(function() {
                // timeID = setInterval(function() {
                    bot.waitOutput(bot);
                }, waitTime); // 10秒待機
              }
          }
        }
      
        display();
        chatToBottom(); // 改行が含まれていて、かつ前回のテキストと異なる場合にchattoButtom関数を呼び出す
      }

    //一定時間後に何か返信
    waitOutput(bot){
        const wordList = ['おきてますかぁ？','無言って気まずいよね。','1分経過、、、']
        // ulとliを作り、左寄せのスタイルを適用し投稿
        const ul = document.getElementById('chatbot-ul');
        const li = document.createElement('li');
        li.classList.add('left');
        ul.appendChild(li);
    
        //botアイコン表示
        const robotIconDiv = document.createElement('img');
        li.appendChild(robotIconDiv);
        robotIconDiv.classList.add('chatbot-icon');
        robotIconDiv.setAttribute('src',`${robotIconID}`);
    
        //画像変更のためのファイル選択
        let robotIconFile = document.createElement('input');
        li.appendChild(robotIconFile);
        robotIconFile.type = 'file';
        robotIconFile.accept = '.png';
        robotIconFile.classList.add('icon-button');
        robotIconFile.addEventListener('change',()=>{
            ChangeRobotIcon()
        });
    
        //下までスクロール
        chatToBottom();

        const robotLoadingDiv = document.createElement('div');
        setTimeout(() => {
            li.appendChild(robotLoadingDiv);
            robotLoadingDiv.classList.add('chatbot-left');
            robotLoadingDiv.innerHTML = '<div id= "robot-loading-field"><span id= "robot-loading-circle1" class="material-icons">circle</span> <span id= "robot-loading-circle2" class="material-icons">circle</span> <span id= "robot-loading-circle3" class="material-icons">circle</span>';
    
            //下までスクロール
            chatToBottom();
        }, delay);

        setTimeout(() => {
            //考え中アニメ削除
            robotLoadingDiv.remove();

            //内容の作成、投稿
            const div = document.createElement('div');
            li.appendChild(div);
            div.classList.add('chatbot-left');
            const n = Math.floor(Math.random() * wordList.length);
            bot.displayText(wordList[n],div,bot,function(){
                return true;
            });
       
            //時間の表示
            const t = CreateTime();
            t.style.bottom = '-8px';
            li.appendChild(t);
   
            //下までスクロール
            chatToBottom();
        }, delay*1.5);
    }
    
    //自分の投稿のメイン部分
    myOutput(bot) {
        //空行の場合送信不可
        if (!bot.userText.value || !bot.userText.value.match(/\S/g) || bot.chatSubmitBtn.disabled) return false;
    
        //投稿内容の保存
        
        if(bot.chatList[bot.chatList.length-1][bot.randomNum] &&
            bot.chatList[bot.chatList.length-1][bot.randomNum].items && 
            bot.chatList[bot.robotCount-1].option == 'choices'){
            bot.itemList.push(bot.userText.value);
        }else{
            if(bot.chatList[bot.robotCount].query){
                userData[1] = bot.userText.value;
                bot.query = userData[1];
                bot.GetInfo(bot);
            }else{
                userData.push(bot.userText.value);
            }
        }
   
        //返信の作成
        bot.CreateMyOutput(bot.userText.value);

        //SE
        soundMng.PlaySound('output');
   
        //一番下までスクロール
        chatToBottom();
   
    
        if (bot.robotCount < Object.keys(bot.chatList).length) {
            //複数回答えるタイプの問題か
            if(bot.chatList[bot.chatList.length-1][bot.randomNum] &&
                bot.chatList[bot.chatList.length-1][bot.randomNum].items && 
                bot.chatList[bot.robotCount-1].option == 'choices')
            {
                //itemsの分回答しているか
                if(bot.chatList[bot.chatList.length-1][bot.randomNum].items.length <= bot.itemList.length ){
                    userData.push(bot.itemList);
                    bot.itemList =[];
                    bot.robotOutput();
                }
            }else{
                bot.robotOutput();
            }
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

        const logo = document.getElementById("chatbot-logo");
        const text = logo.textContent;

        logo.innerHTML = "";

        for (let i = 0; i < text.length; i++) {
        const span = document.createElement("span");
        span.textContent = text[i];
        span.classList.add("rotate-animation");
        logo.appendChild(span);
        }

        //戻るボタンに関数設定
        BackScene('../home/home.html');

        // ここからchatListを利用する処理を記述
        settingInit(bot);

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

document.addEventListener('keyup', function(event) {
    if (event.key === "ArrowRight") {
      textDelay = defaultTextDelay;
    }
  });

// キー入力イベントを監視する要素にハンドラーを追加
document.addEventListener('keydown', function(event){
    if(event.key === "ArrowRight"){
        textDelay = 10;
    }
});

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

function CreateName(li){
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name-right');
    nameDiv.textContent = userData[0];

    li.appendChild(nameDiv);
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
    const stampHtml = SetStampHTML(stampList);
    return stampHtml;
};

//スタンプ投稿
function StampOutput(path){
    //ulとliを作り、右寄せのスタイルを適用し投稿する
    const ul = document.getElementById('chatbot-ul');
    const li = document.createElement('li');

    // 時間の表示
    li.appendChild(CreateTime());

    // 名前の表示
    CreateName(li);

    //作成したdivにスタンプ画像を挿入
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

    //SE
    soundMng.PlaySound('stamp');

    //一番下までスクロール
    chatToBottom();

    //スタンプに対する返答パス
    BotStampOutput(path);
    

}

//ボットのスタンプ投稿
function BotStampOutput(path){
    //ulとliを作り、右寄せのスタイルを適用し投稿する
    const ul = document.getElementById('chatbot-ul');
    const li = document.createElement('li');
    li.classList.add('left');
    ul.appendChild(li);

    //botアイコン表示
    const robotIconDiv = document.createElement('img');
    li.appendChild(robotIconDiv);
    robotIconDiv.classList.add('chatbot-icon');
    robotIconDiv.setAttribute('src', `${robotIconID}`); // ここにアイコンの画像ファイルのパスを指定する

    //robotIconDiv.style.backgroundImage = `url(${robotIconID})`;

    //画像変更のためのファイル選択
    let robotIconFile = document.createElement('input');
    li.appendChild(robotIconFile);
    robotIconFile.type = 'file';
    robotIconFile.accept = '.png';
    robotIconFile.classList.add('icon-button');
    robotIconFile.addEventListener('change',()=>{
        ChangeRobotIcon()
    });
    
    //アイコンクリックでアイコンの変更
    robotIconDiv.addEventListener('click', () => {
        if (robotIconFile) {
            robotIconFile.click();
        }
    })
    //下までスクロール
    chatToBottom();

    const robotLoadingDiv = document.createElement('div');
    setTimeout(() => {
        li.appendChild(robotLoadingDiv);
        robotLoadingDiv.classList.add('chatbot-left');
        robotLoadingDiv.innerHTML = '<div id= "robot-loading-field"><span id= "robot-loading-circle1" class="material-icons">circle</span> <span id= "robot-loading-circle2" class="material-icons">circle</span> <span id= "robot-loading-circle3" class="material-icons">circle</span>';

        //下までスクロール
        chatToBottom();
    }, stampDelay/2);

    setTimeout(() => {
        //考え中アニメ削除
        robotLoadingDiv.remove();

        //スタンプ画像追加
        const stampDiv = document.createElement('div');
        ul.appendChild(li);
        li.appendChild(stampDiv);
        stampDiv.classList.add('stamp');
        const stampImg = document.createElement('img');
        stampImg.classList.add('stampImg');
        //スタンプをランダムで選ぶ
        const n = Math.floor(Math.random() * stampList.length);
        const filename = path.split("/").pop().split(".")[0];
        const replacedPath = path.replace(filename, stampList[n]);
        stampImg.setAttribute('src',replacedPath);
        stampDiv.appendChild(stampImg);

        //時間の表示
        const t = CreateTime();
        t.style.bottom = '-8px';
        li.appendChild(t);

        //下までスクロール
        chatToBottom();
    }, stampDelay);

}

//ロボットのアイコンを変える
function ChangeRobotIcon() {
    const file = window.event.target.files[0];
    const reader = new FileReader();
    reader.onload = function () {
        robotIconID = reader.result;
        var imgs = document.querySelectorAll(".chatbot-icon");
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].src = robotIconID;
        }
    }
    reader.readAsDataURL(file);

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

//ひとつ前のページに戻る
function BackScene(url){
    // chatbot-back要素を取得
    const chatbotBack = document.getElementById('chatbot-back');

    // クリックイベントリスナーを設定
    chatbotBack.addEventListener('click', function() {
        // 遷移先のURLを指定
        const destinationUrl = url;

        //音声をフェードアウト
        const f = soundMng.AllSoundFadeOut();
        f.then(() => {
            // すべての音声のフェードアウトが完了し、Promiseが解決された後に実行される処理
            // ページの遷移
            window.location.href = destinationUrl;
          });
    });
}

//問題のリセット
function settingInit(bot){
    //設定の項目リスト
    const settingList = {'icon':'アイコンの変更',
        'botIcon':'ボットのアイコン変更',
        'name':'名前の変更',
        'reset':'問題のリセット',
        'sound':'音量の調整',
        'bgm':'BGMの変更',
        'default':'初期の設定に戻す'};

    //設定内容を生成
    const settingUl = document.getElementById('setting-ul');
    for (const setting in settingList) {
        //既に項目が生成済みか
        if(document.getElementById(`setting-${setting}`) == null){
            const settingDiv = document.createElement('div');
            settingDiv.id = `setting-${setting}`;
            settingDiv.classList.add('setting-item');
            settingDiv.textContent = settingList[setting];
            const i = document.createElement('i');
            i.classList.add('material-icons','setting-right');
            i.textContent = 'chevron_right';
            settingDiv.appendChild(i);
            settingUl.appendChild(settingDiv);
        }
    }

    // chatbot-reset要素を取得
    const chatbotSetBtn = document.getElementById('chatbot-setButton');
    chatbotSetBtn.addEventListener('click',function(){
        //設定画面を表示する
        const div = document.getElementById('chatbot-setting');
            div.style.display = 'block';

        //名前の更新
        const name = document.getElementById("setting-namePre");
        name.textContent = userData[0];
         })
    const backDiv = document.getElementById('setting-back');

    //戻るボタンで戻る処理
    backDiv.addEventListener('click',() => {
        const div = document.getElementById('chatbot-setting');
        div.style.display = 'none';
    })

    //アイコン変更のプレビュー生成
    if(document.getElementById("setting-iconImg") == null){
        const iconDiv = document.getElementById('setting-icon');
        //クリックでアイコン変更
        iconDiv.addEventListener('click',() => {
            const iconButtons = document.querySelectorAll(".right .icon-button");
            if (iconButtons.length > 0) {
                const myIconFile = iconButtons[0]; 
                myIconFile.click();
            }
        })
        const imgDiv = document.createElement('img');
        imgDiv.src = myIconID;
        imgDiv.id = 'setting-iconImg';
        imgDiv.classList.add('myIconImg')
        iconDiv.appendChild(imgDiv);
    }

    //ボットのアイコン変更のプレビュー生成
    if(document.getElementById("setting-botIconImg") == null){
        const iconDiv = document.getElementById('setting-botIcon');
        //クリックでアイコン変更
        iconDiv.addEventListener('click',() => {
            const iconButton = document.querySelector(".left .icon-button");
            iconButton.click();
        })
        const imgDiv = document.createElement('img');
        imgDiv.src = robotIconID;
        imgDiv.id = 'setting-iconImg';
        imgDiv.classList.add('chatbot-icon')
        iconDiv.appendChild(imgDiv);
    }
    //自分の名前プレビュー
    var settingName = document.getElementById("setting-name");
    if (document.getElementById("setting-namePre") == null) {
        const nameDiv = document.createElement('div');
        settingName.appendChild(nameDiv);
        nameDiv.textContent = userData[0];
        nameDiv.id = 'setting-namePre';
        nameDiv.classList.add('name-right');

        //名前の変更処理
        // setting-name要素がクリックされた時の処理
        settingName.addEventListener("click", function() {
        // 名前を入力するウィンドウを表示し、入力内容を取得
        var newName = prompt("新しい名前を入力してください (8文字以内)");
        if (newName.length > 8) {
            newName = newName.slice(0, 8); // 入力された文字列を最初の8文字までに制限
        }

        // 入力内容をuserData[0]に格納
        if (newName !== null) {
            userData[0] = newName;
            var nameRightElements = $(".name-right");
            nameRightElements.each(function() {
                this.textContent = userData[0];        
            })
        }
    });

    }

    //問題リセット
    function resetFunction() {
        bot.allQuizList = [];
        window.alert('†††💛問題がリセットされました💛†††');
        }
    const settingReset = document.getElementById('setting-reset');
    settingReset.addEventListener('click', resetFunction);

    //音量の調整
    const volumeSlider = document.createElement("input");
    volumeSlider.type = "range";
    volumeSlider.id = "setting-slider";
    volumeSlider.min = "0";
    volumeSlider.max = "1";
    volumeSlider.step = "0.1";
    volumeSlider.value = `${soundMng.GetVolume()/soundMng.maxVolume}`;

    // スライダーの値が変更されたときのイベントハンドラ
    volumeSlider.addEventListener("input", function() {
        const volume = parseFloat(volumeSlider.value);
        soundMng.SetVolume(volume);
    });

    // スライダー要素を設定項目要素に追加
    const settingSound = document.getElementById("setting-sound");
    settingSound.appendChild(volumeSlider);

    //BGMの変更
    //ファイルダイヤログを開く
    const bgmSetting = document.getElementById('setting-bgm');
    let bgmFile = document.createElement('input');
    bgmSetting.appendChild(bgmFile);
    bgmFile.type = 'file';
    bgmFile.accept = '.mp3, .m4a';
    bgmFile.id = 'bgm-button';
    bgmFile.addEventListener('change',()=>{
        ChangeBGM()
    });

    bgmSetting.addEventListener('click', () => {
        if (bgmFile) {
            bgmFile.click();
        }
    });

    //取得したファイルパスの音声を読み込む
    function ChangeBGM(){
        const file = window.event.target.files[0];
        const reader = new FileReader();
        const fullFileName = file.name;
        reader.onload = function () {
            const filepath = reader.result;
            const fileName = fullFileName.split('.').shift();
            const audio = new Audio(filepath);;
            //今鳴っているBGMを止める
            soundMng.StopSound();
            soundMng.AddSound('bgm',fileName,audio)
            window.alert('BGMが変更されました');

        }
        reader.readAsDataURL(file);
    };

    //初期設定に戻す
    const defaultSetting = document.getElementById('setting-default');
    defaultSetting.addEventListener('click',()=>{
        //自分のアイコンを戻す
        myIconID = '../../resource/img/botIcon2.png'
        var imgs = document.querySelectorAll(".myIconImg");
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].src = myIconID;
        }
        //ボットのアイコンを戻す
        robotIconID = '../../resource/img/botIcon1.png'
        var imgs = document.querySelectorAll(".chatbot-icon");
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].src = robotIconID;
        }

        // 入力内容をuserData[0]に格納
        userData[0] = '';
        var nameRightElements = $(".name-right");
        nameRightElements.each(function() {
            this.textContent = userData[0];        
        })

        //デフォルトの音量に戻す
        const slider = document.getElementById('setting-slider');
        slider.value = soundMng.defaultVolume;
        soundMng.SetVolume(soundMng.defaultVolume);

        window.alert('設定が初期化されました')

    })
} 





