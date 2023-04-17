const chatList = {
    1:{text: 'ようこそ「chatbot」へ!',continue:true,option:'normal'},
    2:{text: '会話内容は管理者へ送信されませんので、ご安心ください。',continue: true,option: 'normal'},
    3:{text: {title:'Q1',question:'何を知りたいですか？',choices:['開発者について','参考にしたチャットボット','デモアプリ','島根県']},continue:false,option:'choices',quetionNextSupport: true}
};

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

function robotOutput(){
    robotCount ++;
    console.log('robotCount:' + robotCount);
    // ulとliを作り、左寄せのスタイルを適用し投稿
    const ul = document.getElementById('chatbot-ul');
    const li = document.createElement('li');
    li.classList.add('left');
    ul.appendChild(li);

    //考え中アニメ
    const robotLoadingDiv = document.createElement('div');

    setTimeout(() => {
        li.appendChild(robotLoadingDiv);
        robotLoadingDiv.classList.add('chatbot-left');
        robotLoadingDiv.innerHTML = '<div id= "robot-loading-field"><span id= "robot-loading-circle1" class="material-icons">circle</span> <span id= "robot-loading-circle2" class="material-icons">circle</span> <span id= "robot-loading-circle3" class="material-icons">circle</span>';
    }, 800);

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
            for (let i=0; i<chatList[robotCount].text.choices.lenght; i++){
                const choiceButton = document.createElement('button');
                choiceButton.id = `${choiceField.id}-${i}`;//id設定
                choiceButton.setAttribute('onclick','pushChoice(this)');//ボタンを押した際の合図
                choiceButton.classList.add('choice-button');
            }
        }else{
            // このdivにテキストを指定
            const div = document.createElement('div');
            li.appendChild(div);
            div.classList.add('chatbot-left');
            div.textContent = chatList[robotCount].text;
        }

            //連続投稿
        if(chatList[robotCount].continue){
            robotOutput();
        }

    },2000);

}

//最初のボットの発言
robotOutput();

//自分の投稿
chatSubmitBtn.addEventListener('click',()=>{
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

    //入力欄を空白にする鵜
    userText.value = '';
});