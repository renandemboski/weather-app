import { useEffect, useState } from "react";
import { getNextDays } from "../../services/ApiRequest";

export function NextDaysInformation({ clima }) {
  const [nextDays, setNextDays] = useState([]);
    const imagem = `src/assets/${clima.weather[0].icon}.png`;
  useEffect(() => {
    async function fetchForecast() {
      if (!clima?.coord?.lat || !clima?.coord?.lon) return;

      const dados = await getNextDays(clima.coord.lat, clima.coord.lon);
      setNextDays(dados);
    }

    fetchForecast();
  }, [clima]);

  return (
    <div className="flex justify-center">
      <div className="">
        <div className="flex space-x-2 mt-30 ">
          {nextDays.map((dia, index) => {
            const soODia = dia.data.split(" ")[0].split("-")[2];
            return (
              <div key={index} className="bg-white/10 p-4 rounded-2xl h-28 w-14 flex flex-col justify-between items-center text-white shadow-[0_8px_10px_rgba(0,0,0,0.2)] border border-white/10">
                <p>{soODia}</p>
                <img src={`https://openweathermap.org/img/wn/${dia.icon}@2x.png`} alt="" />
                <p>{dia.temp}°</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}