import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { fetchForecast } from "../utils/fetchWeatherForecasts";
import {
  DEFAULT_PLACE,
  PlaceT,
  CurrentWeather,
  DailyWeather,
  MEASUREMENT_SYSTEMS,
  UNITS,
  Unit,
  UnitSystem,
  HourlyWeather,
} from "../types/weather";

type ForecastContextType = {
  currentForecast: CurrentWeather | null;
  hourlyForecast: HourlyWeather[];
  dailyForecast: DailyWeather[];
  loading: boolean;
  error: string | null;
  place: PlaceT;
  setPlace: (newPlace: PlaceT) => void;
  measurementSystem: string;
  setMeasurementSystem: (system: string) => void;
  units: Unit;
};

const WeatherContext = createContext<ForecastContextType | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
}

const WeatherProvider = ({ children }: Props) => {
  const [currentForecast, setCurrentForecast] = useState<CurrentWeather | null>(
    null
  );
  const [hourlyForecast, setHourlyForecast] = useState<HourlyWeather[]>([]);
  const [dailyForecast, setDailyForecast] = useState<DailyWeather[]>([]);

  const [measurementSystem, setMeasurementSystem] = useState<string>(
    MEASUREMENT_SYSTEMS.AUTO
  );
  const [place, setPlace] = useState<PlaceT>(DEFAULT_PLACE);
  const [units, setUnits] = useState<Unit>(UNITS.uk);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!place || !place.place_id) return;
    const fetchForecastsPage = async () => {
      setError(null);
      setLoading(true);

      try {
        console.log("nana");
        const cw = await fetchForecast(
          "current",
          place.place_id,
          measurementSystem
        );
        setCurrentForecast(cw.current);
        setUnits(UNITS[cw.units as UnitSystem]);
        const hw = await fetchForecast(
          "hourly",
          place.place_id,
          measurementSystem
        );
        setHourlyForecast(hw.hourly.data);
        console.log(hw);
        const dw = await fetchForecast(
          "daily",
          place.place_id,
          measurementSystem
        );
        setDailyForecast(dw.daily.data);
      } catch (err) {
        err instanceof Error
          ? setError(err.message)
          : setError("Unkonown error occured");
      } finally {
        setLoading(false);
      }
    };

    fetchForecastsPage();
  }, [place, measurementSystem]);

  return (
    <WeatherContext.Provider
      value={{
        currentForecast,
        hourlyForecast,
        dailyForecast,
        loading,
        error,
        place,
        setPlace,
        measurementSystem,
        setMeasurementSystem,
        units,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
};

export { WeatherProvider, useWeather };
export default WeatherContext;
