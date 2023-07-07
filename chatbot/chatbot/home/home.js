const createAppList=['quiz','personal','psycho','news','background'];

const appList={
  'quiz':{'name':'Quiz','func':CreateAppFunc},
  'personal':{'name':'心理テスト','func':CreateAppFunc},
  'psycho':{'name':'サイコパス診断','func':CreateAppFunc},
  'news':{'name':'ニュース','func':CreateAppFunc},
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
    BackScene('../../chatBot.html');

    BarInit();

    updateTime();
    
}

function CreateAppIcon(li,type){
    //imgタグの生成
    const appImg = document.createElement('img');
    appImg.classList.add('app-icon');
    appImg.setAttribute('src',`../../resource/img/homescreen/${type}Icon.png`)
    var timeoutId;

    // マウスが要素に入ったときの処理
    appImg.addEventListener('mouseenter', function() {
      // 0.2秒後に処理を実行するためのタイマーを設定
      timeoutId = setTimeout(function() {
        appImg.style.transform = 'scale(1.1)';
      }, 200);
    });

    // マウスが要素から出たときの処理
    appImg.addEventListener('mouseleave', function() {
      // タイマーが設定されている場合はキャンセルする
      if (timeoutId) {
        clearTimeout(timeoutId);
        appImg.style.transform = 'scale(1.0)';
        timeoutId = null;
      }    
    });

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
    appImg.appendChild(aTag);
    appImg.addEventListener('click', function(event){
        event.preventDefault(); // デフォルトのリンク処理をキャンセル
        appImg.style.opacity = '0'; // 画像をフェードアウト
        setTimeout(function() {
          window.location.href = aTag.href; // アプリを起動
        }, 0); // 1秒後にアプリを起動
      });

    li.appendChild(appImg);
  
};

let backgroundID = '';

function ChangeBackGround(li,type,appImg){
    //画像変更のためのファイル選択
    li.appendChild(appImg);
    let backgroundFile = document.createElement('input');
    li.appendChild(backgroundFile);
    backgroundFile.type = 'file';
    backgroundFile.accept = '.png, .jpg';
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
    homescreen.style.backgroundImage = `url(${backgroundID})`;
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

function BarInit(){
  var barElement = document.getElementById('bar');
  var isDragging = false;
  var startPosX;

  barElement.addEventListener('mousedown', function(event) {
    isDragging = true;
    startPosX = event.clientX;
  });
  
  document.addEventListener('mousemove', function(event) {
    if (isDragging) {
      var deltaX = event.clientX - startPosX;
      var newLeft = barElement.offsetLeft + deltaX;
      const computedStyle = window.getComputedStyle(homescreen);
      var borderSize = parseInt(computedStyle.borderLeftWidth) + parseInt(computedStyle.borderRightWidth);
  
      if(0 <= newLeft && newLeft+barElement.offsetWidth <= homescreen.offsetWidth - borderSize){
        barElement.style.left = newLeft + 'px';
      }
      startPosX = event.clientX;

    }
  });
  
  document.addEventListener('mouseup', function() {
    isDragging = false;
  });  
}

var ball = document.getElementById('ball');
const ballStyle = window.getComputedStyle(ball);

var x = parseInt(ballStyle.left);  // ボールのX座標の初期値
var y = parseInt(ballStyle.top);  // ボールのY座標の初期値
var speed = 3;  // ボールの速度
var pastelColors = ['#dddddd', '#ffffcc', '#ffcccc', '#e6ccff', '#ccddff', '#ccffcc', '#ffddb3', '#f9ccdc', '#ccffe6', '#ffccc9'];

// ボールの速度ベクトルを正規化する関数
function normalizeVector(vector){
    var magnitude = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
    return { x: vector.x / magnitude, y: vector.y / magnitude };
}

// ボールの速度ベクトルを更新する
function updateVelocity() {
    var velocity = normalizeVector({ x: speedX, y: speedY });
    speedX = velocity.x * speed;
    speedY = velocity.y * speed;
}

// ボールの移動を制御する関数
function moveBall() {
    let oldX = x;
    let oldY =y;
    x += speedX;
    y += speedY;

    // 要素内の境界に到達した場合、速度を反転させます
    const computedStyle = window.getComputedStyle(homescreen);
    var borderSize = parseInt(computedStyle.borderLeftWidth) + parseInt(computedStyle.borderRightWidth);
    if (x < 0 || x + ball.offsetWidth > homescreen.offsetWidth-borderSize) {
        speedX *= -1;
    }
    if (y < 0 || y + ball.offsetHeight > homescreen.offsetHeight-borderSize) {
        speedY *= -1;
    }

    var centerX = x + ball.offsetWidth/2;
    var centerY = y + ball.offsetWidth/2;
    //アイコンとの判定
    var appIconElements = document.getElementsByClassName('app-icon');
    for (var appIconElement of appIconElements) {
      // 計算されたスタイルを取得
      var appIconsytle = window.getComputedStyle(appIconElement);

      // transformが設定されているか判定
      var transform = appIconsytle.transform !== 'none';
      var appIconLeft = appIconElement.offsetLeft;
      var appIconTop = appIconElement.offsetTop;
      var appIconWidth = appIconElement.offsetWidth;
      var appIconHeight = appIconElement.offsetHeight;

      // transformが設定されている場合はサイズを変更
      if (transform) {
        // matrixの値からscaleの値を抽出
        var matrixMatch = appIconsytle.transform.match(/matrix\(([^)]+)\)/);
        var matrixValues = matrixMatch[1].split(',').map(parseFloat);
        var scaleX = matrixValues[0];
        var scaleY = matrixValues[3]; 
        if(scaleX == 1.1 && scaleY == 1.1){
          scaleX -= 1.0;
          scaleY -= 1.0;
          var offsetX = appIconWidth * scaleX/2;
          var offsetY = appIconHeight * scaleY/2;
          appIconLeft -= offsetX;
          appIconTop -= offsetY;
          appIconWidth += offsetX;
          appIconHeight += offsetY;
        }
      } 
      //当たり判定の処理      
      const colResult = HitCheck(appIconLeft,appIconTop,appIconWidth,appIconHeight)

      //当たった方向に対してに揺らす
      if(colResult.col){
        if(colResult.dir == 'X'){
          appIconElement.classList.add('shakeX');
        }else{
          appIconElement.classList.add('shakeY');
        }

        //色を変化させる
        var randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
        ball.style.backgroundColor = randomColor;
        
        // アニメーションが完了したらアニメーションを停止する
        appIconElement.addEventListener('animationend', stopShakingElement, { once: true });
        
        function stopShakingElement() {
          if(colResult.dir == 'X'){
            this.classList.remove('shakeX');
          }else{
            this.classList.remove('shakeY');
          }
        }
      };
  
    }

    //barとの判定
    const barElement = document.getElementById('bar');
    var barsytle = window.getComputedStyle(barElement);

    // transformが設定されているか判定
    var transform = barsytle.transform !== 'none';
    var barLeft = barElement.offsetLeft;
    var barTop = barElement.offsetTop;
    var barWidth = barElement.offsetWidth;
    var barHeight = barElement.offsetHeight;

    HitCheck(barLeft,barTop,barWidth,barHeight);

    function HitCheck(objLeft,objTop,objWidth,objHeight){

      const px = Math.max(objLeft, Math.min(centerX,  objLeft + objWidth));
      const py = Math.max(objTop,Math.min(centerY, objTop + objHeight));
          
      const distance = ((px - centerX) * (px - centerX) +
                (py - centerY) * (py - centerY));

      //ヒット
      let res ={col: false}

      if(distance < ball.offsetWidth/2 * ball.offsetWidth/2){
        var hitVecX = Math.abs(px - centerX);
        var hitVecY = Math.abs(py - centerY);
        //当たっていたら、trueと方向を連想配列で返す
        if(hitVecX >= hitVecY){
          speedX *= -1;
          res = { col: true, dir: 'X' };

        }
        if(hitVecY >= hitVecX){
          speedY *= -1;
          res = { col: true, dir: 'Y' };

        }
        if(res.col){
          x = oldX;
          y = oldY;
        }
      }
      return res;
    }
  
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
}

// 初期速度ベクトルを設定
var speedX = 1;
var speedY = 1;
updateVelocity();

setInterval(moveBall, 10);

