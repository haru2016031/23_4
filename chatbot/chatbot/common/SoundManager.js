class SoundManager{
constructor() {
    if (SoundManager.instance) {
      return SoundManager.instance;
    }
    //サウンドの管理配列
    this.soundList = {'se':{},'bgm':{}};
    this.defaultVolume = 0.1;
    this.soundVolume = this.defaultVolume;
    this.maxVolume = 0.3
    SoundManager.instance = this;
  }

  // パブリックなメソッドやプロパティ
  //サウンドのロード
  LoadSound(name,path,type) {
    let soundTypeList = this.soundList[type];

    if (!soundTypeList.hasOwnProperty(name)) {
        const fPath = `../../resource/sound/${type}/${path}.mp3`
        soundTypeList[name] = new Audio(fPath);
        soundTypeList[name].volume = this.soundVolume;
        if(type === 'bgm'){
            soundTypeList[name].addEventListener('ended', () => {
              const keys = Object.keys(soundTypeList);
              const randomKey = keys[Math.floor(Math.random() * keys.length)]
              const randomSound = soundTypeList[randomKey];
              randomSound.volume = this.soundVolume;
              // randomSound.loop = true;
              randomSound.play();
            });
        }
      }
    
    return this.soundList[name];
  }

  AddSound(type,name,audio){
    const typeList = this.soundList[type];
    if (!typeList.hasOwnProperty(name)) {
      typeList[name] = audio;
      if(type === 'bgm'){
        typeList[name].addEventListener('ended', () => {
          const keys = Object.keys(typeList);
          const randomKey = keys[Math.floor(Math.random() * keys.length)]
          const randomSound = typeList[randomKey];
          randomSound.volume = this.soundVolume;
          // randomSound.loop = true;
          randomSound.play();
        });
      }  
    }
    
    typeList[name].volume = this.soundVolume;
    // this.soundList[name].loop = true;
    typeList[name].play();

  }

  PlaySound(name,loop=false,fade=false){
    for(const type in this.soundList){
      const typeList = this.soundList[type];
        if(typeList.hasOwnProperty(name)){
          typeList[name].pause();
          typeList[name].currentTime = 0;
          typeList[name].play();
          // if(loop){
          //     this.soundList[name].loop = true;
          // }
          if(fade){
            this.FadeIn(typeList[name]);
          }
          return;
      }
    }

    console.log('音声がロードされてない')
  }

  StopSound(name=null){
    if(name == null){
      for(const type in this.soundList){
        const typeList = this.soundList[type];
        for(const name in typeList){
          typeList[name].pause();
        }
      }
    }else{
      for(const type in this.soundList){
        const typeList = this.soundList[type];
        if(typeList.hasOwnProperty(name)){
          typeList[name].pause();
          }
        }
      }
    }
  

  FadeIn(audio){
    audio.volume = 0;
    const fadeDuration = 3000;  // フェードインの時間（ミリ秒）
    const fadeStep = 0.01;  // 1ステップごとの音量の変化量

    let currentVolume = 0;
    const fadeInterval = setInterval(() => {
      if (currentVolume >= this.maxVolume) {
        clearInterval(fadeInterval);
      } else {
        currentVolume = Math.min(currentVolume + fadeStep, this.soundVolume);
        audio.volume = currentVolume;
      }
    }, fadeDuration * fadeStep);
      }

  FadeOut(audio){
    const fadeDuration = 800;  // フェードアウトの時間（ミリ秒）
    const fadeStep = 0.05;  // 1ステップごとの音量の変化量

    let currentVolume = this.maxVolume;
    const fadeInterval = setInterval(() => {
      if (currentVolume <= 0) {
        clearInterval(fadeInterval);
        audio.pause();
      } else {
        currentVolume = Math.max(currentVolume - fadeStep, 0);
        audio.volume = currentVolume;
      }
    }, fadeDuration * fadeStep);

    // フェードアウト処理が完了したことを示すPromiseを返す
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();  // フェードアウトが完了したことを通知する
      }, fadeDuration);
    });  
  }

  AllSoundFadeOut() {
    const fadePromises = [];
  
    for(const type in this.soundList){
      const typeList = this.soundList[type];
      for(const name in typeList){
        const audio = typeList[name];
  
        // フェードアウト処理を実行し、Promiseを取得
        const fadePromise = this.FadeOut(audio);
        fadePromises.push(fadePromise);
      }
    }
  
    // すべての音声のフェードアウトが完了するまで待機し、その後にPromiseを解決する
    return Promise.all(fadePromises);  }

    GetVolume(){
      return this.soundVolume;
    }

    SetVolume(vol){      
      for(const type in this.soundList){
      const typeList = this.soundList[type];
      for(const name in typeList){
        this.soundVolume = vol*this.maxVolume;
        typeList[name].volume = this.soundVolume;
        }
      }
    } 
}