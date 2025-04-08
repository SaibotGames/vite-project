import { useWeather } from "../context/WeatherContext";
import { HourlyWeather } from "../types/weather";
import { StyledBasicWidget } from "./style/CurrentWeather.style";
import { Flex } from "./style/layout/Flex.style";
import WeatherIcon from "./WeatherIcon";

interface Props {
  data: HourlyWeather;
}

const HourlyForecast = ({ data }: Props) => {
  const { units } = useWeather();
  const { date, icon, summary, temperature, precipitation, wind } = data;

  const local = navigator.language;

  const now_date = {
    day: new Intl.DateTimeFormat(local, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date()),
    time: new Intl.DateTimeFormat(local, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date().setMinutes(0)),
  };

  const weather_date = {
    day: new Intl.DateTimeFormat(local, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date(date)),
    time: new Intl.DateTimeFormat(local, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date).setMinutes(0)),
  };

  const midnight = new Intl.DateTimeFormat(local, {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(new Date().setHours(0, 0, 0, 0)));

  weather_date.day =
    weather_date.day === now_date.day && weather_date.time === now_date.time
      ? "Now"
      : weather_date.time === midnight
      ? weather_date.day
      : "";
  return (
    <StyledBasicWidget $width="40%" $fontScale={0.6}>
        <h4>{weather_date.day}</h4>
      <Flex $dir="column" $align="center" >
        
        <h4>{weather_date.time}</h4>
        <WeatherIcon iconNumber={icon} summary={summary} />
        <h4>
        <i className="bi bi-thermometer"/>{temperature !== undefined ? Math.round(temperature) : "--"}{" "}
          {units.temperatureU}
        </h4>
      </Flex>
      <Flex $dir="column">
        <h4>
        <i className="bi bi-wind"/> {wind?.speed !== undefined ? Math.round(wind.speed) : "--"}{" "}
          {units.wind_speed}
        </h4>
        <h4>
        <i className="bi bi-droplet"/> {precipitation?.total !== undefined
            ? Math.round(precipitation.total)
            : "--"}{" "}
          {units.precipitationU}
        </h4>
      </Flex>
    </StyledBasicWidget>
  );
};

export default HourlyForecast;
