import { useWeather } from "../context/WeatherContext";
import { DailyWeather } from "../types/weather";
import { StyledBasicWidget } from "./style/CurrentWeather.style";
import { Flex } from "./style/layout/Flex.style";
import WeatherIcon from "./WeatherIcon";

interface Props {
  data: DailyWeather;
}

const DailyForecast = ({ data }: Props) => {
  const { units } = useWeather();
  const {
    day,
    icon,
    summary,
    temperature_max,
    temperature_min,
    precipitation,
  } = data;

  const local = navigator.language;

  const now_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date()),
  };
  const weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date(day)),
  };

  weather_date.day =
    weather_date.day === now_date.day ? "Today" : weather_date.day;
  return (
    <StyledBasicWidget $fontScale={0.5}>
      <Flex $dir="column" $align="center">
        <h3>{weather_date.day}</h3>
        <WeatherIcon iconNumber={icon} summary={summary} />
        <h3>
        <i className="bi bi-thermometer"/>Max: {temperature_max !== undefined ? Math.round(temperature_max) : "--"}{" "}
          {units.temperatureU}
        </h3>
        <h3>
        <i className="bi bi-thermometer"/>Min: {temperature_min !== undefined ? Math.round(temperature_min) : "--"}{" "}
          {units.temperatureU}
        </h3>
      </Flex>
      <Flex $dir="column" $align="center">
        <h3>
        <i className="bi bi-droplet"/> {precipitation?.total !== undefined
            ? Math.round(precipitation.total)
            : "--"}{" "}
          {units.precipitationU}
        </h3>
      </Flex>
    </StyledBasicWidget>
  );
};

export default DailyForecast;
