const createAppList=['quiz','personal','background'];

const appList={
  'quiz':{'name':'Quiz','func':CreateAppFunc},
  'personal':{'name':'心理テスト','func':CreateAppFunc},
  'background':{'name':'背景変更','func':ChangeBackGround},
};

const homescreenTime = document.getElementById('homescreen-time');

const updateTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    homescreenTime.innerHTML = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    setTimeout(updateTime, 30000);
  }


Init();

function Init(){
    const ul = document.getElementById('homescreen-ul');
    //アプリアイコン表示
    for(let i=0;i<createAppList.length;i++)
    {
        const li = document.createElement('li');
        CreateAppIcon(li,createAppList[i]);
        ul.appendChild(li);
    }
    BackScene('../lock/lock.html');

    updateTime();
    
}

function CreateAppIcon(li,type){
    //imgタグの生成
    const appImg = document.createElement('img');
    appImg.classList.add('app-icon');
    appImg.setAttribute('src',`../../resource/img/homescreen/${type}Icon.png`)

    //クリックしたときの処理を登録
    appList[type]['func'](li,type,appImg);
    //名前
    const namediv = document.createElement('div');
    namediv.classList.add('app-name');
    namediv.textContent=appList[type]['name'];
    li.appendChild(namediv);
}

function CreateAppFunc(li,type,appImg){
    //aタグの生成
    const aTag = document.createElement('a');
    aTag.href = `../${type}bot/${type}Bot.html`;
    aTag.classList.add('app-link');
    aTag.appendChild(appImg);
    aTag.addEventListener('click', function(event) {
        event.preventDefault(); // デフォルトのリンク処理をキャンセル
        appImg.style.opacity = '0'; // 画像をフェードアウト
        setTimeout(function() {
          window.location.href = aTag.href; // アプリを起動
        }, 0); // 1秒後にアプリを起動
      });
    li.appendChild(aTag);
  
};

let backgroundID = '';

function ChangeBackGround(li,type,appImg){
    //画像変更のためのファイル選択
    li.appendChild(appImg);
    let backgroundFile = document.createElement('input');
    li.appendChild(backgroundFile);
    backgroundFile.type = 'file';
    backgroundFile.accept = '.png .jpg';
    backgroundFile.classList.add('background-button');
    backgroundFile.addEventListener('change',()=>{
      SelectBackGround()
    }); 
    appImg.addEventListener('click',()=>{
        if(backgroundFile){
          backgroundFile.click();
        }
    })

};

function SelectBackGround(){
  const file = window.event.target.files[0];
  const reader = new FileReader();
  reader.onload = function () {
    backgroundID = reader.result;
    const homescreen = document.getElementById('homescreen');
    homescreen.style.background = backgroundID;
  }
  reader.readAsDataURL(file);

}

//ひとつ前のページに戻る
function BackScene(url){
  // homescreen-back要素を取得
  const chatbotBack = document.getElementById('homescreen-back');

  // クリックイベントリスナーを設定
  chatbotBack.addEventListener('click', function() {
  // 遷移先のURLを指定
  const destinationUrl = url;

  // ページの遷移
  window.location.href = destinationUrl;
});
}

