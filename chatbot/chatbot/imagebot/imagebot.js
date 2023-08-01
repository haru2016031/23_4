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
            console.log(data.results);
            if (data.results.length === 0) {
                throw new Error('No results found'); // エラーを投げる
            }
            bot.chatList[bot.chatList.length-1] = data.results;
        })
        .catch(error => {
            // エラーハンドリング
            console.error('An error occurred:', error);
            bot.queryError = true;
        });
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

    RobotOutputInfo(li,bot){
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
            //テキスト追加
            const textDiv = document.createElement('div');
            textDiv.classList.add('imagebot-text');
            const text = `${userData[1]}に関する画像です。\nクリックでダウンロードサイトにアクセスできます。`;
            textDiv.textContent = text;
            imageField.appendChild(textDiv);
            //画像を表示
            const imagesData = bot.chatList[bot.chatList.length-1];

            //画像表示部分
            function DisplayImage(imagesData){
                for(let i=0; i<imagesData.length;i++){
                    if(i > 2){
                        setTimeout(() => {
                            bot.robotOutput(); 
                        }, 1000*i);

                        break;
                    }
                    setTimeout(() => {
                        //画像の追加
                        const a = document.createElement('a');
                        a.href = imagesData[i].links.html;
                        a.target = "_blank";
                        imageField.appendChild(a);
                        const img = document.createElement('img');
                        img.classList.add('imagebot-img');
                        img.src = imagesData[i].urls.regular;
                        img.alt = imagesData[i].alt_description;
                        img.onload = function(){
                            chatToBottom();
                        }
                        a.appendChild(img);

                        //画像のタグ追加
                        //タグ部分の大枠div
                        const tagsWrapper = document.createElement('div');
                        imageField.appendChild(tagsWrapper);
                        //Tags:の部分
                        const tagsLabel = document.createElement('span');
                        tagsWrapper.appendChild(tagsLabel);
                        const labelIcon = document.createElement('i');
                        tagsLabel.appendChild(labelIcon);
                        labelIcon.classList.add('material-icons','waves-effect','waves-light','imagebot-tagIcon');
                        labelIcon.textContent = 'label';
                        //タグ本体
                        const tagsContainer = document.createElement('span');
                        tagsWrapper.appendChild(tagsContainer);
                        imagesData[i].tags.forEach(tag => {
                            const tagElement = document.createElement('span');
                            tagElement.classList.add('imagebot-tag');
                            tagElement.textContent = tag.title;
                            tagsContainer.appendChild(tagElement);
                        });
                        
                        //いいね！数の表示
                        //いいねアイコン
                        const likeDiv = document.createElement('div');
                        imageField.appendChild(likeDiv);
                        const likeIcon = document.createElement('i');
                        likeDiv.appendChild(likeIcon);
                        likeIcon.classList.add('material-icons','waves-effect','waves-light','imagebot-likeIcon');
                        likeIcon.textContent = 'favorite';
                        //いいね数
                        const likeNum = document.createElement('span');
                        likeDiv.appendChild(likeNum);
                        likeNum.classList.add('imagebot-likeNum')
                     likeNum.textContent = imagesData[i].likes;
                    }, 1000*i);
                }
            };

            bot.displayText(text,textDiv,bot,function(){
                DisplayImage(imagesData);
            })
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