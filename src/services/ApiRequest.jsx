import axios from "axios";

const keyWeather = import.meta.env.VITE_API_WEATHER;
const keyTime = import.meta.env.VITE_API_TIME;

export async function getWeather(cidade) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${keyWeather}&units=metric`;
    const resposta = await axios.get(url);
    return resposta.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getTime(lat, lon) {
  try {
    const url = `http://api.timezonedb.com/v2.1/get-time-zone?key=${keyTime}&format=json&by=position&lat=${lat}&lng=${lon}`;
    const resposta = await axios.get(url);
    return resposta.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getNextDays(lat, lon) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${keyWeather}&units=metric`;
    const resposta = await axios.get(url);

    const dados = resposta.data.list;

    const dias = [];

    const datasAdicionadas = new Set();

    for (let i = 0; i < dados.length; i++) {
      const item = dados[i];
      const data = item.dt_txt.split(" ")[0];

      if (!datasAdicionadas.has(data) && dias.length < 5) {
        dias.push({
          data,
          temp: Math.round(item.main.temp),
          icon: item.weather[0].icon,
        });
        datasAdicionadas.add(data);
      }
    }

    return dias;
  } catch (error) {
    console.log(error);
    return [];
  }
}
