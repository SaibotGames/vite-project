import { CurrentWeather, Unit } from "../types/weather";
import { StyledExtraWidgets } from "./style/CurrentWeather.style";

interface Props {
  data: CurrentWeather;
  units: Unit;
}

const CurrentWeatherDetails = ({ data, units }: Props) => {
  const { cloud_cover, humidity, precipitation, uv_index, visibility, wind } =
    data;
  const {
    precipitationU,
    wind_speed,
    humidityP,
    uv_indexU,
    cloud_coverP,
    visibilityU,
  } = units;

  const widgets = [
    {
      id: 0,
      icon: "droplet",
      name: "Precipitation",
      value: Math.round(precipitation.total),
      unit: precipitationU,
    },
    {
      id: 1,
      icon: "wind",
      name: "Wind",
      value: Math.round(wind.speed),
      unit: wind_speed,
    },
    {
      id: 2,
      icon: "moisture",
      name: "Humidity",
      value: Math.round(humidity),
      unit: humidityP,
    },
    {
      id: 3,
      icon: "sunglasses",
      name: "UV index",
      value: Math.round(uv_index),
      unit: uv_indexU,
    },
    {
      id: 4,
      icon: "clouds-fill",
      name: "Clouds cover",
      value: Math.round(cloud_cover),
      unit: cloud_coverP,
    },
    {
      id: 5,
      icon: "eye",
      name: "Visibility",
      value: Math.round(visibility),
      unit: visibilityU,
    },
  ];
  return (
    <StyledExtraWidgets className="list-group">
      {widgets.map(({ id, icon, name, value, unit }) => (
        <li className="list-group-item" key={id}>
          {name} <i className={`bi bi-${icon}`}></i>: {value} {unit}
        </li>
      ))}
    </StyledExtraWidgets>
  );
};

export default CurrentWeatherDetails;
