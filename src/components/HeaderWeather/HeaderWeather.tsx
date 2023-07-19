/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { TimeBox, WeatherBox, WeatherCont, WeatherIcon, WeatherIconCont, WeatherP } from './headerWeather.styles';

export const HeaderWeather = () => {
  type WeatherObject = {
    current?: {
      temp_c: string | number;
      condition: {
        icon: string;
      }
    }
  }
  const [weather, setWeather] = useState({} as WeatherObject);
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { "timeZone": "America/Vancouver"}));
    }, 1000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    void (async () => {
        await axios.post(`https://localnewstv-todo.onrender.com/api/weather`, { location: "Esquimalt" })
          .then(({ data }) => setWeather(data))
          .catch((ex)=> console.log(ex));
    })();
  }, []);

  return (
    <WeatherCont>
      {weather && <>
        <TimeBox>
          {time}
        </TimeBox>
        <WeatherBox>
          <WeatherIcon
            alt="Weather Icon"
            src={`https:${weather.current?.condition.icon}`}
            height={40}
            width={40}
          />
        </WeatherBox>
        <WeatherBox>
          <WeatherP>{weather.current?.temp_c || '0.0'}°C</WeatherP>
        </WeatherBox>
      </>}
    </WeatherCont>
  )



}
