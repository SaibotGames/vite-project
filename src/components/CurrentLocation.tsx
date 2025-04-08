import { useWeather } from "../context/WeatherContext";
import { PlaceT } from "../types/weather";


const CurrentLocation = () => {

  const { place} = useWeather();


  return (
    <div>
      <i className="bi bi-geo-alt-fill"></i> <b>{place.name}</b>, {place.country}
    </div>
  );
};

export default CurrentLocation;
