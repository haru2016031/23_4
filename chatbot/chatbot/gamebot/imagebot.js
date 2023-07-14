class Imagebot extends Chatbot{
    constructor(){
        super();
        this.botType='IMAGE';

        //ランダムで選ばれた問題のID
        this.randomNum = 0;

        //検索ワード
        this.query = 'Twitter';
        //検索ワードエラーフラグ
        this.queryError = false;
        //サウンドマネージャー
        const soundNameList = {'correct':'se','incorrect':'se','newsBot':'bgm'}
        this.soundMng = new SoundManager();
        for (const key in soundNameList) {
            if (soundNameList.hasOwnProperty(key)) {
              const path = soundNameList[key];
              this.soundMng.LoadSound(key,key,path);
            }
        }
    }

    GetInfo(bot){
        const apiKey = 'gFw97EQh-ff5ke8sOIkoCzcuCJP3Qfr3brIYKFBaTyM';
        const apiUrl = `https://api.unsplash.com/search/photos?query=${bot.query}&client_id=${apiKey}`;

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // レスポンスデータの処理
            console.log(data.results[0].urls.regular);
            bot.chatList[bot.chatList.length-1] = data.results;
            // const img = document.createElement('img');
            // img.src = data.results[0].urls.regular;
            // document.body.appendChild(img);
        })
        .catch(error => {
            // エラーハンドリング
            console.error('An error occurred:', error);
            bot.queryError = true;

        });
    }

    CreateMyText(text,li){
        const div = super.CreateMyText(text);
        div.classList.add('imagebot-right');
        li.appendChild(div);
    }

    BotOrgNormal(chatList,robotCount,div,bot,randomNum){
        //問題の答えか
        let text = '';

        text = chatList[robotCount].text;

        if(bot.robotCount == 8){
            bot.robotCount = 4;
        }
        bot.displayText(text,div,bot,function(){
            return true;
        });
        bot.chatSubmitBtn.disabled = false;

    }

    RobotOutputNews(li,bot){
        //検索でエラーが出たかどうか
        if(bot.queryError){
            const div = document.createElement('div');
            li.appendChild(div);
            div.classList.add('chatbot-left');
            const text = `${userData[1]}に関する画像が見つかりませんでした。\n他の言葉に変更してください。`;
            bot.displayText(text,div,bot,function(){
                bot.queryError = false;
                bot.robotOutput(); 
            });
        }else{
            //画像を表示する台紙作成
            const imageField = document.createElement('div');
            imageField.classList.add('imagebot-left-rounded','chatbot-left-rounded-size');
            //画像を表示
            const imagesData = bot.chatList[bot.chatList.length-1];
            const img = document.createElement('img');
            img.classList.add('imagebot-img');
            const n = Math.floor(Math.random() * imagesData.length);

            img.src = imagesData[n].urls.regular;
            imageField.appendChild(img);
            img.onload = function(){
                chatToBottom();
                bot.robotOutput();
            }
            li.appendChild(imageField);
        }
    }

    textSpecial(){
     
        this.chatList[3].text = `こんにちは！${userData[0]}先生`;
        this.chatList[5].text = `${userData[1]}の画像ですね！`;
    }

}

 // loadjson.jsファイルの読み込み
 const imagebot = new Imagebot();
 var script = document.createElement('script');
 script.type = 'text/javascript';
 script.src = '../../resource/data/imageData.js';
 script.onload = function(){
    imagebot.loadjsonReady(imagebot);
    // soundMng.PlaySound('newsBot','true','true');
 }
 document.body.appendChild(script);