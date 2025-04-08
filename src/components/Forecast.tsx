import { DailyWeather, HourlyWeather } from "../types/weather";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import { StyledWrapper } from "./style/layout/StyledWrapper";
import { ForecastContainer } from "./style/Forecast.style";



interface Props {
  type: "H" | "D";
  title: string;
  data: HourlyWeather[] | DailyWeather[];
}

const Forecast = ({ type, data, title }: Props) => {



  return (
    <StyledWrapper>
      <h1>{title}</h1>
      <ForecastContainer>
        {type === "H"
          ? (data as HourlyWeather[]).map((singleData) => (
              <HourlyForecast data={singleData} key={singleData.date} />
            ))
          : (data as DailyWeather[]).map((singleData) => (
              <DailyForecast data={singleData} key={singleData.day} />
            ))}
      </ForecastContainer>
    </StyledWrapper>
  );
};

export default Forecast;
