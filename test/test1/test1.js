

// const chatList = {

//     1: {text: 'ようこそ「chatbot」へ!',continue:true,option:'normal'},
//     2: {text: '会話内容は管理者へ送信されませんので、ご安心ください。',continue: true,option: 'normal'},
//     3: {text: {title:'Q1',question:'何を知りたいですか？',choices:['開発者について','参考にしたチャットボット','デモアプリ','島根県']},continue:false,option:'choices',quetionNextSupport: true},
//     4: {text: ['https://mf3px.sakura.ne.jp/', 'https://www.hubspot.jp/', 'https://gallery.flutter.dev/', 'https://www.town.shimane-misato.lg.jp/misatoto/'], continue: true, option: 'normal', link: true},
//     5: {text: 'こちらの文字をクリックしてください。', continue: true, option: 'normal'},
//     6: {text: 'あなたのお名前は何ですか？', continue: false, option: 'normal'},
//     7: {text: '', continue: true, option: 'normal'},
//     8: {text: '今日の体調はいかがですか？', continue: false, option: 'normal'},
//     9: {text: ['そうですか！', 'わかりました！', '承知致しました！'], continue: true, option: 'random'},
//     10: {text: 'ここで問題です！', continue: true, option: 'normal'},
//     11: {text: {title: 'Q2', question: 'どの山が世界一高いでしょう？', choices: ['エベレスト', 'K2', '富士山'], answer: '0'}, continue: false, option: 'choices'},
//     12: {text: {qTrue: '', qFalse:'残念！正解は「エベレスト」でした。'}, continue: true, option: 'normal'},
//     13: {text: '', continue: true, option: 'normal'},
//     14: {text: {title: '満足度調査', question: 'このAIチャットボットの満足度を5段階で教えてください（数字が大きいほど満足度が高いものとします。）。', choices: ['5', '4', '3', '2', '1']}, continue: false, option: 'choices'},
//     15: {text: 'ありがとうございます。最後に、ご感想をお聞かせください。', continue: false, option: 'normal'},
//     16: {text: '', continue: false, option: 'normal'}
// };


function textSpecial(){
    chatList[7].text = `こんにちは！${userData[1]}先生`;
    chatList[12].text.qTrue = `正解！${userData[1]}先生,すごいですねー`;
    chatList[13].text = `${userData[1]}先生、ありがとうございました。今日はここで終了とさせていただきます。`; 
    chatList[16].text = `${userData[1]}さんの満足度は「${userData[4]}」，ご感想は「${userData[5]}」ですね！ありがとうございました。`;
}

let chatList = "";
let loadFlag = false;

function LoadJs(){
      var script = $('<script>').attr({
        'type': 'text/javascript',
        'src': '../resource/data/loadjson.js'
      });
      script.onload = function(){
        loadFlag = true;
        console.log('読み込み完了');
      };
      console.log(window.SWEETS);
    //   script.on('load', function(){
    //     var data = window.SWEETS;
    //     console.log(data);
    //   });
      $('body')[0].appendChild(script[0]);

}

let userCount = 0;
// ユーザの返信を入れる配列
let userData = [];

//一番下へ
function chatToBottom(){
    const chatField = document.getElementById('chatbot-body');
    chatField.scroll(0,chatField.scrollHeight - chatField.clientHeight);
}

const userText = document.getElementById('chatbot-text');
const chatSubmitBtn = document.getElementById('chatbot-submit');

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

function pushChoice(e){
    userCount ++;
    const choicedId = e.getAttribute('id'); //選択した選択肢のid
    //回答内容の保存
    userData.push(document.getElementById(choicedId).textContent);

    if(chatList[robotCount].text.answer){
        //正解、不正解のある選択肢
        const trueChoice = `q-${robotCount}-${chatList[robotCount].text.answer}`;
        if(choicedId === trueChoice){
            //正解
            nextTextOption = 'qTrue';
            qPoint++;
        }else{
            //不正解
            nextTextOption = 'qFalse';
        }
    }else{
        if(chatList[robotCount].quetionNextSupport){
            if(String(robotCount).length === 1){
                //robotCountの桁数が一桁の時
                nextTextOption = choicedId.slice(4);
            }
        }    
    }
    for(let i=0; i<chatList[robotCount].text.choices.length; i++){
        document.getElementById('q-'+robotCount+'-'+i).disabled = true;
        document.getElementById('q-'+robotCount+'-'+i).classList.add('choice-button-disabled');
        document.getElementById(choicedId).classList.remove('choice-button-disabled');
    }

    robotOutput();
}   

function ChangeRobotIcon(){
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

function ChangeMyIcon(){
    const file = window.event.target.files[0];
    const reader = new FileReader();
    reader.onload = function () {
        myIconID = reader.result;
        var imgs =  document.querySelectorAll(".myIconImg");
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].src = myIconID;
          }
    }
    reader.readAsDataURL(file);
}

function robotOutput(){

    robotCount ++;
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
    robotIconFile.addEventListener('change',ChangeRobotIcon);

    //アイコンクリックでアイコンの変更
    robotIconDiv.addEventListener('click',()=>{
        if(robotIconFile){
            robotIconFile.click();
        }
    })

    //考え中アニメ
    const robotLoadingDiv = document.createElement('div');

    do{setTimeout(() => {
        li.appendChild(robotLoadingDiv);
        robotLoadingDiv.classList.add('chatbot-left');
        robotLoadingDiv.innerHTML = '<div id= "robot-loading-field"><span id= "robot-loading-circle1" class="material-icons">circle</span> <span id= "robot-loading-circle2" class="material-icons">circle</span> <span id= "robot-loading-circle3" class="material-icons">circle</span>';

        //下までスクロール
        chatToBottom();
    }, 100);
    }while(!loadFlag)


    setTimeout(() => {
        //考え中アニメ削除
        robotLoadingDiv.remove();
        if(chatList[robotCount].option === 'choices'){
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
            const choiceQ = document.createElement('div');
            choiceQ.classList.add('choice-q');
            choiceQ.textContent = chatList[robotCount].text.question;
            choiceField.appendChild(choiceQ);
            //選択肢
            for (let i=0; i<chatList[robotCount].text.choices.length; i++){
                const choiceButton = document.createElement('button');
                choiceButton.id = `${choiceField.id}-${i}`;//id設定
                choiceButton.setAttribute('onclick','pushChoice(this)');//ボタンを押した際の合図
                choiceButton.classList.add('choice-button');
                choiceField.appendChild(choiceButton);
                choiceButton.textContent = chatList[robotCount].text.choices[i];
            }
        }else{
            // このdivにテキストを指定
            const div = document.createElement('div');
            li.appendChild(div);
            div.classList.add('chatbot-left');

            //テキストを加工
            textSpecial();

            //投稿内容のタイプ判別
            //通常の内容投稿
            if(chatList[robotCount].option == 'normal')
            {
                //問題の答えか
                if(chatList[robotCount].text.qTrue){
                    div.textContent = chatList[robotCount].text[nextTextOption];
                }
                //答えの詳細か
                else if (robotCount>1 && chatList[robotCount-1].quetionNextSupport){
                    console.log('次の回答の選択肢は'+nextTextOption);
                    if(chatList[robotCount].link){
                        div.innerHTML = `<a href= "${String(chatList[robotCount].text[nextTextOption])}" onclick= "chatbotLinkClick()">${String(chatList[robotCount].text[nextTextOption])}</a>`;
                    }
                }else{
                    div.textContent = chatList[robotCount].text;
                }
            } else{
                //複数の回答からランダムで投稿
                const rand = Math.random();
                const randNum = rand * chatList[robotCount].text.length;
                const num = Math.floor(randNum)

                div.textContent = chatList[robotCount].text[num];
            }
            //返信を可能にする
            chatSubmitBtn.disabled = false;

        }

        //下までスクロール
        chatToBottom();

         //連続投稿
        if(chatList[robotCount].continue){
            robotOutput();
        }

    },1000);

}

//jsonの読み込み
LoadJs();

chatList = window.SWEETS;

//最初のボットの発言
robotOutput();

function myOutput(){
    //空行の場合送信不可
    if(!userText.value || !userText.value.match(/\S/g)) return false;

    //投稿内容の保存
    userData.push(userText.value);
    //ulとliを作り、右寄せのスタイルを適用し投稿する
    const ul = document.getElementById('chatbot-ul');
    const li = document.createElement('li');
    //作成したdivに入力内容を挿入
    const div = document.createElement('div');

    // 入力内容を含む要素を作成し、アイコンを追加する
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('chatbot-right');
    contentDiv.textContent = userText.value;
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
    myIconFile.addEventListener('change',ChangeMyIcon);

    //アイコンクリックでアイコン変更
    iconDiv.addEventListener('click',()=>{
        if(myIconFile){
            myIconFile.click();
            }
        }
    )
    li.appendChild(iconDiv);

    li.classList.add('right');
    ul.appendChild(li);

    //一番下までスクロール
    chatToBottom();

    if(robotCount < Object.keys(chatList).length){
        robotOutput();
    }

    //入力欄を空白にする鵜
    userText.value = '';
    
}

function enterOutput(e){
    if(e.code === 'NumpadEnter')
    {
        DebugOutput();
    }
    else if(e.code === 'Enter')
    {
        myOutput();
    }
}

//自分の投稿
//クリック投稿
chatSubmitBtn.addEventListener('click',myOutput);
//エンター投稿
userText.addEventListener('keypress',enterOutput);

//デバック連投
function DebugOutput(){
    //空行の場合送信不可
    if(!userText.value || !userText.value.match(/\S/g)) return false;

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

    if(robotCount < Object.keys(chatList).length){
        robotOutput();
    }    
}