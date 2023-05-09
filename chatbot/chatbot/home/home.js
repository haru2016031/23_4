Init();

function Init(){
    const ul = document.getElementById('homescreen-ul');
    //アプリアイコン表示
    for(let i=0;i<3;i++)
    {
        const li = document.createElement('li');
        //imgタグの生成
        const appImg = document.createElement('img');
        appImg.classList.add('app-icon');
        appImg.setAttribute('src','../../resource/img/quizIcon.png')
        //aタグの生成
        const aTag = document.createElement('a');
        aTag.href = '../quizbot/quizBot.html';
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
        namediv.textContent='Quiz';
        li.appendChild(namediv);

        ul.appendChild(li);
    
    }



}