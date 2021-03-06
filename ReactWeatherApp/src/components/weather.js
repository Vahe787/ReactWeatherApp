import weatherInfo from "../data/data";
import Cards from "./cards";
import "../App.css";

export default function Weather() {
  return (
    <div className="main-weather">
      {weatherInfo.map((el) => {
        return <Cards weekDey={el.weekDey} imgURL={el.imgURL} temp={el.temp} />;
      })}
    </div>
  );
}
