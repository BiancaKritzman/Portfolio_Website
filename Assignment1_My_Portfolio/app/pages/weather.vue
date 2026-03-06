<script setup>
import { ref } from 'vue'

const city = ref("")
const weather = ref(null)

async function fetchWeather() {

  // Get coordinates from city
  const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${city.value}`)

  const geoData = await geoRes.json()

  if (!geoData.length) {
    alert("City not found")
    return
  }

  const lat = geoData[0].lat
  const lon = geoData[0].lon

  // Fetch weather from Open-Meteo
  const weatherRes = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
  )

  weather.value = await weatherRes.json()
}
</script>

<template>
  <div class="body">
    <h1 class="title">Weather Forecast</h1>
    
    <ul v-if="weather" class="weather">
        <h2 class="title1">Weather for {{ city }}</h2>
        <div class="weatherGrid">
          <div class="weatherItems">
            Temperature:
            <span>{{ weather.current_weather.temperature}}°C</span>
          </div>
          <div class="weatherItems">
            Wind Speed:
            <span>{{ weather.current_weather.windspeed }}km/h</span>
          </div>
        </div>
    </ul>
    <form @submit.prevent="fetchWeather">
      <div class="search"></div>
      <input v-model="city" placeholder="Enter city">
      <button class="btn" type="submit" @click="fetchWeather">Get Weather</button>
    </form>
    </div>
</template>

<style scope>

.title {
  color: rgb(6, 99, 95);
  text-align: center;
  padding-top: 130px;
}

.title1 {
  color: rgb(6, 99, 95);
  text-align: center;

}

.body {
    overflow-x: hidden;
    border: 10px solid rgb(6, 99, 95);
    border-radius: 10px;
    font-family: "Almendra";
    background-image: url('/Images/background.png');
    background-size: cover;
    display: flex;
    flex-direction: column;
    padding-top:80px;
}

input{
  border-radius: 10px;
  padding: 10px;
}

.weather {
  margin-top:40px;
  background:rgba(255,255,255,0.2);
  backdrop-filter:blur(10px);
  padding:30px;
  border-radius:15px;
  color:white;
  width:350px;
  text-align: center;
  box-shadow:0 10px 30px rgba(0,0,0,0.2);
  margin-left: 33%;
}

.btn {
  border-radius: 10px;
  color: white;
  background-color: rgb(6, 99, 95);
  padding: 10px;
  right: 50%;
}

.weatherItems{
  color: rgb(6, 99, 95);
  background:rgba(255,255,255,0.15);
  padding:15px;
  border-radius:10px;
  display:flex;
  flex-direction:column;
  font-size:20px;
}

.weather-item span{
  font-size:20px;
  font-weight:bold;
  margin-top:5px;
}

</style>