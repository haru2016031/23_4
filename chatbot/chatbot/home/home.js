const createAppList=['quiz','personal'];

const appNameList={
  'quiz':'Quiz',
  'personal':'心理テスト'
};


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
}


function CreateAppIcon(li,type){
        //imgタグの生成
        const appImg = document.createElement('img');
        appImg.classList.add('app-icon');
        appImg.setAttribute('src',`../../resource/img/${type}Icon.png`)
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
        //名前
        const namediv = document.createElement('div');
        namediv.classList.add('app-name');
        namediv.textContent=appNameList[type];
        li.appendChild(namediv);


}