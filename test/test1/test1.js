const chatList = {
    1:{text: 'ようこそ「chatbot」へ!',continue:true,option:'normal'},
    2:{text: '会話内容は管理者へ送信されませんので、ご安心ください。',continue: true,option: 'normal'},
    3:{text: {title:'Q1',quetion:'何を知りたいですか？',choices:['開発者について','参考にしたチャットボット','デモアプリ','島根県']},continue:false,option:'choices',quetionNextSupport: true}
};

let userCount = 0;
// ユーザの返信を入れる配列
let userData = [];

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
    if(chatList[robotCount].option === 'choices'){
        const qAnswer = `q-${robotCount}-${chatList[robotCount].text.answer}`;
        const choiceField = document.createElement('div');
        choiceField.id = `q-${robotCount}`;
        choiceField.classList.add('chatbot-left-rounded');
        li.appendChild(choiceField);
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
}

//最初のボットの発言
robotOutput();