import { useState } from "react";
import { useWeather } from "../context/WeatherContext";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import NavBar from "./NavBar";
import { StyledWrapper } from "./style/layout/StyledWrapper";
import { MainContent } from "./style/MainLayout";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/theme";
import Loader from "./Loader";
import { Flex } from "./style/layout/Flex.style";
import ErrorPage from "./ErrorPage";

function WeatherApp() {
  const [darkMode, setDarkMode] = useState(true);
  const { hourlyForecast, dailyForecast, error, loading } = useWeather();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <StyledWrapper>
        <NavBar
          darkMode={darkMode}
          toggleTheme={(bool:boolean) => setDarkMode(bool)}
        />
        {loading ? (
          
            <Loader />
        ) : error ? (
          <ErrorPage error={error} />
        ) : (
          <MainContent>
            <CurrentWeather />
            <Forecast data={hourlyForecast} type="H" title="Hourly Forecast" />
            <Forecast data={dailyForecast} type="D" title="21 Day Forecast" />
          </MainContent>
        )}
      </StyledWrapper>
    </ThemeProvider>
  );
}

export default WeatherApp;
