
class Newsbot extends Chatbot{
    constructor(){
        super();
        this.botType='NEWS';

        this.qNum = 6;
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
        // GNews APIのエンドポイントURLを指定
        const apiUrl = "https://gnews.io/api/v4/search";

        // APIリクエストの作成
        const apiKey = "df3871c920ec617c56f32569f50063e6"; // APIキーは不要ですが、必要な場合は指定してください
        const url = `${apiUrl}?q=${bot.query}&lang=ja&country=jp&max=1&apikey=` + apiKey;


        // Fetch APIを使用してAPIリクエストを送信
        fetch(url)
        .then(response => response.json())
        .then(data => {
            // APIからのレスポンスを処理
            console.log(data); // レスポンスデータを表示する例
            if(data.articles.length == 0){
                throw new Error("Data is empty.");
            }
            bot.chatList[bot.chatList.length-1] = data.articles;
        })
        .catch(error => {
            // エラーハンドリング
            console.error("An error occurred:", error);
            bot.queryError = true;
        });
    }

    CreateMyText(text,li){
        const div = super.CreateMyText(text);
        div.classList.add('newsbot-right');
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

    RobotOutputInfo(li,bot){
        //検索でエラーが出たかどうか
        if(bot.queryError){
            const div = document.createElement('div');
            li.appendChild(div);
            div.classList.add('chatbot-left');
            const text = `${userData[1]}に関するニュースが見つかりませんでした。\n他の言葉に変更してください。`;
            bot.displayText(text,div,bot,function(){
                bot.queryError = false;
                bot.robotOutput(); 
            });
        }else{
            //ニュース記事の土台のdiv作成
            const newsField = document.createElement('div');
            newsField.classList.add('newsbot-left-rounded','chatbot-left-rounded-size');
            const news = bot.chatList[bot.chatList.length-1][0];

            //タイトルを追加
            const titleDiv = document.createElement('div');
            titleDiv.classList.add('newsbot-title');
            newsField.appendChild(titleDiv);
            //公開日を追加
            const releaceDiv = document.createElement('div');
            releaceDiv.classList.add('newsbot-releace')
            const formattedDate = news.publishedAt.replace("T", " ").replace("Z", "");

            //画像を追加
            const newsImg = document.createElement('img');
            newsImg.classList.add('newsbot-img');
            //内容を追加
            const contentDiv = document.createElement('div');
            newsImg.classList.add('newsbot-content');
            let modifytext = news.content.replace(/\n/g, '').replace(/。/g, "。\n").replace(/\s*\[\d+ chars\]/, '');
            //全文案内
            const underAllContent = document.createElement('div');
            underAllContent.classList.add('newsbot-underAll');
            const underURL =  '\n↓続きは、こちらをクリック！↓'

            //全文のURLを追加
            const contentURL = document.createElement('a');
            contentURL.classList.add('newsbot-url');
            contentURL.href = news.url;
            contentURL.textContent = news.source.url;
            contentURL.target = "_blank";

            //タイトル
            bot.displayText(news.title,titleDiv,bot,function(){
                //公開日
                newsField.appendChild(releaceDiv);
                bot.displayText(formattedDate,releaceDiv,bot,function(){
                    //画像
                    newsField.appendChild(newsImg);
                    newsImg.src = news.image;
                    newsField.appendChild(contentDiv);
                    //本文
                    bot.displayText(modifytext,contentDiv,bot,function(){
                        newsField.appendChild(underAllContent);
                        //全文案内
                        bot.displayText(underURL,underAllContent,bot,function(){
                            //全文URL
                            newsField.appendChild(contentURL);
                            bot.robotOutput();
                        }) 
                    })    
                })
            })

            li.appendChild(newsField);
        }

    }

    textSpecial(){
     
        this.chatList[3].text = `こんにちは！${userData[0]}先生`;
        this.chatList[5].text = `${userData[1]}についてですね！`;
     }
 }

 // loadjson.jsファイルの読み込み
 const newsbot = new Newsbot();
 var script = document.createElement('script');
 script.type = 'text/javascript';
 script.src = '../../resource/data/newsData.js';
 script.onload = function(){
    newsbot.loadjsonReady(newsbot);
    soundMng.PlaySound('newsBot','true','true');
 }
 document.body.appendChild(script);

 
 