import SearchCity from "../components/search/SearchCity";

function SearchPage() {
  return (
    <div className="select-none flex justify-center items-center h-screen w-screen bg-gradient-to-br from-violet-900 to-purple-400 text-white shadow-[0_0_25px_10px_rgba(255,255,255,0.3)]">
      <div className="border border-white/20 shadow-[0_0_30px_8px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center gap-10 p-20 h-[600px] w-[350px] bg-gradient-to-b from-[#2c3156] to-[#4a3c72] rounded-4xl">
        <img className="w-180 h-200 drop-shadow-[0_30px_15px_rgba(0,0,0,0.2)]" src="src\assets\02d.png" draggable="false"/>
        <div className="flex flex-col items-center text-5xl">
          <p className="font-bold">Weather</p>
          <p>Forecasts</p>
        </div>
        <SearchCity />
      </div>
    </div>
  );
}
export default SearchPage;
