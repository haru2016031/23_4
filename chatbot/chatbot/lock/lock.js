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
    lockscreenTime.innerHTML = `${eraName}${eraYear}年${month}月${day}日<br>${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds<10 ? '0'+seconds:seconds}`;
    setTimeout(updateTime, 1000);
    }
  }

// OpenWeatherMap APIキー
const apiKey = 'c03a053bcc34558debab47d693698641';

//都市コード
const cityList={
  'Tokyo':'東京',
  'Fukuoka':'福岡'
}

// 天気情報を取得する関数
async function getWeather() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Fukuoka,jp&units=metric&appid=${apiKey}`);
    const data = await response.json();

    let city = data.name;
    const weather = data.weather[0].main;
    const temperature = data.main.temp;

    // 天気情報を表示
    const weatherElement = document.getElementById('lockscreen-weather');
    
    CreateCity(weatherElement,city);
    
    const weatherInfoElement = document.createElement('div');
    weatherInfoElement.id = 'weather-info';
    weatherElement.appendChild(weatherInfoElement);
    CreateWeather(weatherInfoElement,weather);
    CreateTemperature(weatherInfoElement,temperature);

    // weatherElement.innerHTML = `現在の${city}の天気は${weather}で、気温は${temperature}℃です。`;
  } catch (error) {
    console.error(error);
  }
}

//都市の名前を表示
function CreateCity(el,city){
  const cityDiv = document.createElement('div');
  cityDiv.id = 'weather-city';
  if (city in cityList) {
    city = cityList[city];
  }
  cityDiv.textContent = `${city}の天気`;
  el.appendChild(cityDiv);
}

//天気の表示
function CreateWeather(el,weather){
  const weatherDiv = document.createElement('div');
  weatherDiv.id = 'weather-weather';
  //天気の画像の表示
  const weatherImg = document.createElement('img');
  weatherImg.id = 'weather-icon';
  weatherImg.setAttribute('src', `./resource/img/weather/${weather}.png`);
  weatherDiv.appendChild(weatherImg);
  el.appendChild(weatherDiv);
}

//気温の表示
function CreateTemperature(el,temperature){
  const temperatureDiv = document.createElement('div');
  temperatureDiv.id = 'weather-temperature';
  const roundedNumber = temperature.toFixed(1);
  temperatureDiv.textContent = `${roundedNumber}℃`;
  el.appendChild(temperatureDiv);
}


// ページ読み込み時に天気情報を取得する
window.onload = getWeather;
  updateTime();