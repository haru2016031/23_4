const lockscreenTime = document.getElementById('lockscreen-time');

const updateTime = () => {
    const date = new Date();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let eraName, eraYear;
    if (year >= 2019) {
      eraName = "令和";
      eraYear = year - 2018;
    lockscreenTime.innerHTML = `${eraName}${eraYear}年${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds<10 ? '0'+seconds:seconds}`;
    setTimeout(updateTime, 1000);
    }
  }
  updateTime();