const lockscreenTime = document.getElementById('lockscreen-time');

const updateTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    lockscreenTime.innerHTML = `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds<10 ? '0'+seconds:seconds}`;
    setTimeout(updateTime, 1000);
  }
  updateTime();