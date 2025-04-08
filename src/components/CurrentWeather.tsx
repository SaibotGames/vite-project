import { useWeather } from "../context/WeatherContext";
import CurrentWeatherDetails from "./CurrentWeatherDetails";
import Loader from "./Loader";
import {
  StyledBasicWidget,
  StyledCurrentWeather,
} from "./style/CurrentWeather.style";
import WeatherIcon from "./WeatherIcon";

const CurrentWeather = () => {
  const { loading, currentForecast, units } = useWeather();

  if (loading || !currentForecast) {
    return (
      <StyledCurrentWeather>
        <Loader />
      </StyledCurrentWeather>
    );
  }
  const { feels_like, icon_num, summary, temperature } = currentForecast;

  return (
    <StyledCurrentWeather>
      <StyledBasicWidget>
        <WeatherIcon iconNumber={icon_num} summary={summary} />
        <h1>
          {temperature} {units.temperatureU}
        </h1>
        <h4>
          Feels like {feels_like} {units.temperatureU}
        </h4>
        <h3>{summary}</h3>
      </StyledBasicWidget>
      <CurrentWeatherDetails data={currentForecast} units={units} />
    </StyledCurrentWeather>
  );
};

export default CurrentWeather;
