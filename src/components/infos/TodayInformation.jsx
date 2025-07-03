function TodayInformation({ dadosClima, dadosHorario }) {
  const data = new Date(dadosHorario.formatted);
  const nomeDia = data.toLocaleDateString(undefined, { weekday: "long" });
  const numeroDia = data.getDate();
  const nomeMes = data.toLocaleDateString(undefined, { month: "long" });
  const hora = data.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
  const dataFormatada = `${nomeDia}, ${numeroDia} de ${nomeMes} ${hora}`;
  const imagem = `src/assets/${dadosClima.weather[0].icon}.png`;
  


  return (
    <div className="text-center pt-5">
      <div className="text-center ">
        <p className="text-3xl text-white text-center w-full px-4 break-words">{dadosHorario.cityName}</p>
        <p className="" >{dadosHorario.countryName.split(" ").slice(0, 3).join(" ")}</p>
      </div>

      <div className="text-[13px] pt-5 ">
        <p>{dataFormatada}</p>
      </div>
      <div className="">
        <p className="text-9xl font-bold">
          {dadosClima.main.temp.toFixed(0)}°
        </p>
        <p className="mr-20 text-2xl">{dadosClima.weather[0].main}</p>
      </div>
      <div className="relative w-full">
        <img
          className="w-[150px] absolute top-[-110px] left-39 drop-shadow-[0_40px_20px_rgba(0,0,0,0.3)]"
          src={imagem}
          alt={dadosClima.weather[0].description}
        />
      </div>
    </div>
  );
}

export default TodayInformation;
