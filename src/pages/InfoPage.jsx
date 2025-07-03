import { useLocation } from "react-router-dom";
import TodayInformation from "../components/infos/TodayInformation";
import { NextDaysInformation } from "../components/infos/NextDaysInformation";

function InforPage() {
  const { state } = useLocation();
  const { clima, horario } = state || {};

  if (!clima || !horario) {
    return <p>Dados não encontrados.</p>;
  }

  return (
    <div className="select-none flex justify-center items-center h-screen w-screen bg-gradient-to-br from-violet-900 to-purple-400 text-white shadow-[0_0_25px_10px_rgba(255,255,255,0.3)]">
      <div className="border border-white/20 shadow-[0_0_30px_8px_rgba(0,0,0,0.3)] h-[600px] w-[350px] bg-gradient-to-b from-[#2c3156] to-[#4a3c72] rounded-4xl">
        <TodayInformation dadosClima={clima} dadosHorario={horario} />
        <NextDaysInformation clima={clima} />
      </div>
    </div>
  );
}

export default InforPage;
