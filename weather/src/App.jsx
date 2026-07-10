import { useState } from 'react'
import axios from "axios";

function App() {
  const [city, setCity] = useState("")
  const [weather,setWeather] = useState(null)
  async function searchWeather() {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=28a5fe47cfe64b3fe33cd19d86993468&units=metric`
    );

    console.log(response.data);
    setWeather(response.data);

  }catch (error) {
  console.log(error.response.data);
}

}
  return (
    <>
    <div className="min-h-screen bg-blue-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          ✨ Weather App
        </h1>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter city..."
            className="flex-1 border rounded-lg px-4 py-2"
            value={city}
            onChange={(e)=>{setCity(e.target.value)}}
          />

          <button
            className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600"
            onClick={searchWeather}
          >
            Search
          </button>
        </div>
        {weather && (
          <div className='mt-6 border rounded-xl p-4 bg-blue-50'>
            <h2 className='text-2xl font-bold text-center mb-4'>📍 {weather.name}</h2>
            <p className='py-2'>🌡️ Temperature: {weather.main.temp} C</p>
            <p className='py-2'>🤗 Feels Like: {weather.main.feels_like} C</p>
            <p className='py-2'>💧 Humidity: {weather.main.humidity}%</p>
            <p className='py-2'>💨 Wind Speed: {weather.wind.speed}m/s</p>
            <p className='py-2'>☁ Description: {weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>

    </>
  )
}

export default App
