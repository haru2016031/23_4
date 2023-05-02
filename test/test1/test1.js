
 let chatList = "";
 
 function textSpecial(){
     chatList[3].text = `こんにちは！${userData[0]}先生`;
    //  chatList[11].text.qTrue = `正解！${userData[0]}先生,すごいですねー`;
    //  chatList[12].text = `${userData[0]}先生、ありがとうございました。今日はここで終了とさせていただきます。`;
    //  chatList[15].text = `${userData[0]}さんの満足度は「${userData[4]}」，ご感想は「${userData[5]}」ですね！ありがとうございました。`;
 }

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
        html += `<div class="preStamp" onclick="StampOutput('../resource/img/stamp/${pathList[i]}.png')"><img src="../resource/img/stamp/${pathList[i]}.png"></div>`;
    }
    return html;     
 }

//スタンプ部分のHTMLの内容
const stampPath = '../resource/img/stamp/';
function CreateStampField(){
    const stampList =['kaeruka','hamster_sleeping','mamoru','calender_shock',
        'ganbare','murisuruna','flash_mob','dance_man','ahiruguchi_woman',
        'ai_dance','drone_illumination','money_shihei','motion_capture',
        'yumekawa_tenshi','yumekawa_tenshi','yumekawa_tenshi','yumekawa_tenshi'
    ];
    const stampHtml = SetStampHTML(stampList);
    return stampHtml;
}

//スタンプボタンについて
function SetStampButton(){
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

let loadFlag = false;
 
 // ユーザの返信を入れる配列
 let userData = [];
 
 function pushChoice(e) {
     const choicedId = e.getAttribute('id'); //選択した選択肢のid
     //回答内容の保存
     const ans = document.getElementById(choicedId).textContent;
     userData.push(ans);
     //問題文のindexを取得
     const quizNum = robotCount -1;
     if (chatList[chatList.length-1][randomNum].answer) {
         //正解、不正解のある選択肢
         const trueChoice = `q-${quizNum}-${chatList[chatList.length-1][randomNum].answer}`;
         if (choicedId === trueChoice) {
             //正解
             nextTextOption = 'qTrue';
             qPoint++;
         } else {
             //不正解
             nextTextOption = 'qFalse';
         }
     } else {
         if (chatList[quizNum].quetionNextSupport) {
             if (String(quizNum).length === 1) {
                 //robotCountの桁数が一桁の時
                 nextTextOption = choicedId.slice(4);
             }
         }
     }
     for (let i = 0; i < chatList[chatList.length-1][randomNum].choices.length; i++) {
         document.getElementById('q-' + quizNum + '-' + i).disabled = true;
         document.getElementById('q-' + quizNum + '-' + i).classList.add('choice-button-disabled');
         document.getElementById(choicedId).classList.remove('choice-button-disabled');
     }

    CreateMyOutput(ans.split('.')[1])
 
     robotOutput();
 }
 
 //ランダムで選ばれた問題のID
 let randomNum = 0;
 let quizList = [];

 function robotOutput() {
     console.log('robotCount:' + robotCount);
 
     //返信を不可にする
     chatSubmitBtn.disabled = true;
 
     // ulとliを作り、左寄せのスタイルを適用し投稿
     const ul = document.getElementById('chatbot-ul');
     const li = document.createElement('li');
     li.classList.add('left');
     ul.appendChild(li);
 
     //botアイコン表示
     const robotIconDiv = document.createElement('div');
     li.appendChild(robotIconDiv);
     robotIconDiv.classList.add('chatbot-icon');
     robotIconDiv.style.backgroundImage = `url(${robotIconID})`;
 
     //画像変更のためのファイル選択
     let robotIconFile = document.createElement('input');
     li.appendChild(robotIconFile);
     robotIconFile.type = 'file';
     robotIconFile.accept = '.png';
     robotIconFile.classList.add('icon-button');
     robotIconFile.addEventListener('change', ChangeRobotIcon);
 
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
     }, 800);
 
     setTimeout(() => {
         //考え中アニメ削除
         robotLoadingDiv.remove();
         if (chatList[robotCount].option === 'choices') {
             const qAnswer = `q-${robotCount}-${chatList[robotCount].text.answer}`;
             const choiceField = document.createElement('div');
             choiceField.id = `q-${robotCount}`;
             choiceField.classList.add('chatbot-left-rounded');
             li.appendChild(choiceField);
 
             //質問タイトル
             const choiceTitle = document.createElement('div');
             choiceTitle.classList.add('choice-title');
             choiceTitle.textContent = chatList[robotCount].text.title;
             choiceField.appendChild(choiceTitle);
             //質問文
             const qList = chatList[chatList.length-1];
             while (true) {
                n = Math.floor(Math.random() * qList.length);
                if (!quizList.includes(n)) {
                  randomNum = n;
                  quizList.push(randomNum);
                  break; // `quizList` に含まれない数字が出たらループから抜ける
                }
              }
             const choiceQ = document.createElement('div');
             choiceQ.classList.add('choice-q');
             choiceQ.textContent = chatList[chatList.length-1][randomNum].question;
             choiceField.appendChild(choiceQ);
             //選択肢
             for (let i = 0; i < chatList[chatList.length-1][randomNum].choices.length; i++) {
                 const choiceButton = document.createElement('button');
                 choiceButton.id = `${choiceField.id}-${i}`;//id設定
                 choiceButton.setAttribute('onclick', 'pushChoice(this)');//ボタンを押した際の合図
                 choiceButton.classList.add('choice-button');
                 choiceField.appendChild(choiceButton);
                 choiceButton.textContent = chatList[chatList.length-1][randomNum].choices[i];
             }
         } else {
             // このdivにテキストを指定
             const div = document.createElement('div');
             li.appendChild(div);
             div.classList.add('chatbot-left');
 
             //テキストを加工
             textSpecial();
 
             //投稿内容のタイプ判別
             //通常の内容投稿
             if (chatList[robotCount].option == 'normal') {
                 //問題の答えか
                 if (chatList[robotCount].text.qTrue) {
                    chatList[robotCount].text['qFalse'] = chatList[chatList.length-1][randomNum].qFalse;
                     div.textContent = chatList[robotCount].text[nextTextOption];
                 }
                 //答えの詳細か
                 else if (robotCount > 1 && chatList[robotCount].questionNextSupport) {
                     console.log('次の回答の選択肢は' + nextTextOption);
                     div.textContent = chatList[chatList.length-1][randomNum].info;
                 } else {
                     div.textContent = chatList[robotCount].text;
                 }
             } else {
                 //複数の回答からランダムで投稿
                 const rand = Math.random();
                 const randNum = rand * chatList[robotCount].text.length;
                 const num = Math.floor(randNum)
 
                 div.textContent = chatList[robotCount].text[num];
             }
             //返信を可能にする
             chatSubmitBtn.disabled = false;
 
         }
 
         robotCount++;

         //時間の表示
         const t = CreateTime();
         t.style.bottom = '-8px';
         li.appendChild(t);

         //下までスクロール
         chatToBottom();
 
         //連続投稿
         if (chatList[robotCount].continue) {
             robotOutput();
         }
 
     }, 2000);
 
 }
 
 // ロボットの投稿回数
 let robotCount = 0;
 //ロボットアイコンID
 let robotIconID = '../resource/img/botIcon1.png';
 //自分のアイコンID
 let myIconID = '../resource/img/botIcon2.png';
 
 //選択肢の正解個数
 let qPoint = 0;
 
 //選択肢を押したときの次の選択肢
 let nextTextOption = '';
 
 //一番下へ
 function chatToBottom() {
     const chatField = document.getElementById('chatbot-body');
     chatField.scroll(0, chatField.scrollHeight - chatField.clientHeight);
 }
 
 const userText = document.getElementById('chatbot-text');
 const chatSubmitBtn = document.getElementById('chatbot-submit');
 
 function ChangeRobotIcon() {
     const file = window.event.target.files[0];
     const reader = new FileReader();
     reader.onload = function () {
         robotIconID = reader.result;
         console.log(robotIconID);
         $('.chatbot-icon').css({
             backgroundImage: `url(${robotIconID})`
         });
     }
     reader.readAsDataURL(file);
 
 }
 
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

 function CreateMyOutput(text){
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

    // 入力内容を含む要素を作成
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('chatbot-right');
    contentDiv.textContent = text;
    li.appendChild(contentDiv);


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
    ul.appendChild(li);

    //一番下までスクロール
    chatToBottom();
    
 }
 
 
 function myOutput() {
     //空行の場合送信不可
     if (!userText.value || !userText.value.match(/\S/g)) return false;
 
     //投稿内容の保存
     userData.push(userText.value);

     //返信の作成
     CreateMyOutput(userText.value);

     //一番下までスクロール
     chatToBottom();
 
     if (robotCount < Object.keys(chatList).length) {
         robotOutput();
     }
 
     //入力欄を空白にする鵜
     userText.value = '';
 
 }
 
 function enterOutput(e) {
     if (e.code === 'NumpadEnter') {
         DebugOutput();
     }
     else if (e.code === 'Enter') {
         myOutput();
     }
 }

 //スタンプ投稿
 function StampOutput(path){
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
 
 //デバック連投
 function DebugOutput() {
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
 function loadjsonReady() {
     console.log(window.SWEETS);
     
     // window.SWEETSをchatList変数に代入
     if (chatList.length == 0)
     {
         chatList = window.SWEETS;
         loadFlag = true;
     }

     //スタンプ部分の追加
     const html = CreateStampField();
     const id = document.getElementById('stampField-ul');
     id.innerHTML = html;
     const stampFieldId = document.getElementById('chatbot-stampField');
     stampFieldId.style.height = `${id.scrollHeight}px`;
 
 
     // ここからchatListを利用する処理を記述
 
     //最初のボットの発言
     robotOutput();
 
     //自分の投稿
     //クリック投稿
     chatSubmitBtn.addEventListener('click', myOutput);
     //エンター投稿
     userText.addEventListener('keypress', enterOutput);

    //  スタンプ関連
     SetStampButton();
 
 }
 
 
 // loadjson.jsファイルの読み込み
 var script = document.createElement('script');
 script.type = 'text/javascript';
 script.src = '../resource/data/loadjson.js';
 script.onload = loadjsonReady;
 document.body.appendChild(script);
 
 