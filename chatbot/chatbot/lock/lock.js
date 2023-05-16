const lockscreenTime = document.getElementById('lockscreen-time');

const updateTime = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 月は0~11で返されるので+1する
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let eraName, eraYear;
    if (year >= 2019) {
      eraName = "令和";
      eraYear = year - 2018;
    lockscreenTime.innerHTML = `${eraName}${eraYear}年<br>${month}月${day}日<br>${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds<10 ? '0'+seconds:seconds}`;
    setTimeout(updateTime, 1000);
    }
  }

// OpenWeatherMap APIキー
const apiKey = 'c03a053bcc34558debab47d693698641';

// 天気情報を取得する関数
async function getWeather() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&units=metric&appid=${apiKey}`);
    const data = await response.json();

    const city = data.name;
    const weather = data.weather[0].main;
    const temperature = data.main.temp;

    // 天気情報を表示
    const weatherElement = document.getElementById('weather');
    weatherElement.innerHTML = `現在の${city}の天気は${weather}で、気温は${temperature}℃です。`;
  } catch (error) {
    console.error(error);
  }
}

// ページ読み込み時に天気情報を取得する
window.onload = getWeather;
  updateTime();