import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getWeather, getTime } from "../../services/ApiRequest";

function BuscarCidade() {
  const [cidade, setCidade] = useState("");
  const navegar = useNavigate();

  async function buscarCidade() {
    if (!cidade) return;

    const clima = await getWeather(cidade);
    if (!clima) return;

    const horario = await getTime(clima.coord.lat, clima.coord.lon);

    navegar("/info", {
      state: {
        clima,
        horario,
      },
    });
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center gap-4">
        <input
          className="text-center w-[200px] p-3 text-white bg-white/10 border border-white/20 
             rounded-3xl backdrop-blur-md placeholder-white/60 
             focus:outline-none focus:border-purple-400 shadow-[0_10px_8px_rgba(0,0,0,0.2)]"
          type="text"
          placeholder="Enter the city"
          value={cidade}
          onChange={(event) => setCidade(event.target.value)}
        />
        <button
          className="rounded-3xl w-[200px] p-2 text-2xl text-white shadow-[0_10px_8px_rgba(0,0,0,0.2)] backdrop-blur-md 
                    bg-gradient-to-br from-purple-900 to-purple-400 border border-white/20 
                    hover:from-purple-400 hover:to-purple-800 transition duration-200"
          onClick={buscarCidade}
        >
          Get Start
        </button>
      </div>
    </div>
  );
}
export default BuscarCidade;
