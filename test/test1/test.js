// ChangeScene();

function ChangeScene(){
    document.body.innerHTML = '<div id="chatbot"><div id="chatbot-header"><div id="chatbot-logo">QuizBot</div><i id= "chatbot-zoom-icon" class="material-icons waves-effect waves-light" >fullscreen</i></div><div id="chatbot-main" style="top: 0px"><div id="chatbot-body"><ul id="chatbot-ul"></ul></div><div id="chatbot-footer"><input type="text" id="chatbot-text" placeholder="入力してください"><img src="../resource/img/stamp.png" id="stamp-submit"><i id= "chatbot-submit" class="material-icons waves-effect waves-light" >send</i></div><div id="chatbot-stampField"><ul id="stampField-ul"></ul></div></div></div>';
    const script = document.createElement('script');
    script.src = './quizBot.js';
    document.head.appendChild(script);

}