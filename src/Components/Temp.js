const cityName = document.querySelector("#city");
const weather = document.querySelector("#degree");
const icons = {
  clear: "☀",
  rain: "️🌧",
  storm: "⛈",
  snow: "🌨",
  mist: "🌫",
  clouds: "☁"
};


const weatherKey = "b4313084a7c6d98e1a835c23bb48b635";
const cityUrl = "Riyadh";

axios({
  method: "GET",
  url: `http://api.openweathermap.org/data/2.5/weather?q=${cityUrl}&APPID=${weatherKey}`
})
  .then(response => {
    const temp = response.data.main.temp - 273.15;
    const city = response.data.name;
    const weatherKey = "" + response.data.weather[0].main.toLowerCase();
    cityName.innerText = city;
    weather.innerHTML = `${icons[weatherKey]}  ${temp}&deg; C`;
  })
  .catch(error => {
    console.log(error);
  });

  export default Temp;