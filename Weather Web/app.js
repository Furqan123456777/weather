// const container = document.getElementById("container");
// const search = document.getElementById("search box button");
// const weatherbox = document.getElementById("weatherbox");
// const weatherdetails = document.getElementById("weatherdetails");

// search.addEventListener("click", () => {
//   const APIKey = "98740f4ebc0d63bc0f8ba70090e5a091";
//   const city = document.getElementById("input").value;

//   if (city == "") {
//     return;
//   }

//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
//     .then((response) => response.json())
//     .then((json) => {
//       const image = document.getElementById("img");
//       const tempertur = document.getElementById("tempertur");
//       const description = document.getElementById("description");
//       const humidityspan = document.getElementById("humidityspan");
//       const windspan = document.getElementById("windspan");

//     // const image =document.querySelector('.weather-box img');
//     // const tempertur =document.querySelector('.weather-box .tempertur');
//     // const description =document.querySelector('.weather-box . description');
//     // const humidity =document.querySelector('.weather-details .umidity span');
//     // const wind =document.querySelector('.weather-details . wind span');

//       switch (json.weather[0].main) {
//         case "Clear":
//           image.src =
//             "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Oxygen480-status-weather-clear.svg/1024px-Oxygen480-status-weather-clear.svg.png";
//           break;

//         case "Rain":
//           image.src =
//             "https://seeklogo.com/images/R/rainy-weather-symbol-logo-B77AF66DC1-seeklogo.com.png.";
//           break;

//         case "Snow":
//           image.src = "https://cdn-icons-png.flaticon.com/512/1247/1247131.png";
//           break;

//         case "Cloud":
//           image.src =
//             "https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-sunny-512.png";
//           break;

//         case "Mist":
//           image.src =
//             "https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-foggy-512.png";
//           break;

//         case "Haze":
//           image.src =
//             "https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-foggy-512.png";
//           break;

//         default:
//           image.src =
//             "https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-sunny-512.png";
      
//   }

//   tempertur.innerHTML=`${parseInt(json.main.temp)}<span>°C</span>`;
//   description.innerHTML=`${json.weather[0].description}`;
//   humidity.innerHTML = `${json.main.humidity}%`;
//   wind.innerHTML = `${parseInt(json.winds.speed)}km/h`;


//     });
// });
const container = document.getElementById("container");
const sear = document.getElementById("search box button");
const weatherbox = document.getElementById("weatherbox");
const weatherdetails = document.getElementById("weatherdetails");
const error404 = document.getElementById("not-found");


const search = document.getElementById("search box button");
const img = document.getElementById("img");
const tempertur = document.getElementById("tempertur");
const description = document.getElementById("description");
const humidityspan = document.getElementById("humidityspan");
const windspan = document.getElementById("windspan");

search.addEventListener("click", () => {
  const APIKey = "98740f4ebc0d63bc0f8ba70090e5a091";
  const city = document.getElementById("input").value;

  if (city == "") {
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then((response) => response.json())
    .then((json) => {

        // if(json.cod == '404'){
        //     container.style.height ='400px';
        //     weatherbox.classList.remove('active');
        // weatherdetails.classList.remove('active');
        //     error404.classList.add('active');
        //     return; 
        // }


        // container.style.height ='555px';
        // weatherbox.classList.add('active');
        //  weatherdetails.classList.add('active');
        // error404.classList.remove('active');

      switch (json.weather[0].main) {
        case "Clear":
          img.src =
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Oxygen480-status-weather-clear.svg/1024px-Oxygen480-status-weather-clear.svg.png";
          break;

        case "Rain":
          img.src =
            "https://seeklogo.com/images/R/rainy-weather-symbol-logo-B77AF66DC1-seeklogo.com.png.";
          break;

        case "Snow":
          img.src = "https://cdn-icons-png.flaticon.com/512/1247/1247131.png";
          break;

        case "Cloud":
          img.src =
            "https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-sunny-512.png";
          break;

        case "Mist":
          img.src =
            "https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-foggy-512.png";
          break;

        case "Haze":
          img.src =
            "https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-foggy-512.png";
          break;

        default:
          img.src =
            "https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-sunny-512.png";
      }

      tempertur.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidityspan.innerHTML = `${json.main.humidity}%`;
      windspan.innerHTML = `${parseInt(json.wind.speed)}km/h`;
    })
    .catch((error) => console.error("Error:", error));
});