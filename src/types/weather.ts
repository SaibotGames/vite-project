export type PlaceT={
    name: string;
    place_id: string;
    adm_area1: string;
    adm_area2: string;
    country: string;
    lat: string;
    lon: string;
    timezone: string;
    type: string;
};

// types/weather.ts

export type Precipitation = {
    total: number;
    type: string;
  };
  
  export type Wind = {
    speed: number;
    gusts?: number;
    dir?: string;
    angle?: number;
  };
  
  export type Probability = {
    precipitation: number;
    storm: number;
    freeze: number;
  };
  
  export type WeatherBase = {
    summary: string;
    icon: number;
    temperature: number;
    feels_like: number;
    wind_chill: number;
    dew_point: number;
    wind: Wind;
    cloud_cover: number;
    pressure: number;
    precipitation: Precipitation;
    humidity: number;
    visibility: number;
  };
  
  export type CurrentWeather = WeatherBase & {
    uv_index: number;
    icon_num: number;
  };
  
  export type DailyWeather = WeatherBase & {
    day: string;
    predictability: number;
    temperature_min: number;
    temperature_max: number;
    feels_like_min: number;
    feels_like_max: number;
    wind_chill_min: number;
    wind_chill_max: number;
    dew_point_min: number;
    dew_point_max: number;
    ozone: number;
    probability: Probability;
  };
  
  export type HourlyWeather = WeatherBase & {
    date: string;
    uv_index: number;
    ozone: number;
    probability: Probability;
  };
  
  export const DEFAULT_PLACE = {
    name:"London",
    place_id:"london",
    adm_area1:"England",
    adm_area2:"Greater London",
    country:"United Kingdom",
    lat:"51.50853N",
    lon:"0.12574W",
    timezone:"Europe/London",
    type:"settlement"
};

export const MEASUREMENT_SYSTEMS ={
  AUTO: 'auto',
  METRIC: 'metric',
  UK: 'uk',
  US: 'us',
  CA: 'ca'
};
export type UnitSystem = keyof typeof UNITS;
export type Unit = typeof UNITS[UnitSystem];

export const UNITS ={
  metric:{
      temperatureU: "°C",
      precipitationU: "mm/h",
      wind_speed: "m/s",
      visibilityU: 'km',
      humidityP: '%',
      uv_indexU: '',
      cloud_coverP: '%',
  },
  us:{
    temperatureU: "°F",
    precipitationU: "in/h",
      wind_speed: "mph",
      visibilityU: 'mi',
      humidityP: '%',
      uv_indexU: '',
      cloud_coverP: '%',
  },
  uk:{
    temperatureU: "°C",
    precipitationU: "mm/h",
      wind_speed: "mph",
      visibilityU: 'mi',
      humidityP: '%',
      uv_indexU: '',
      cloud_coverP: '%',
  },
  ca:{
    temperatureU: "°C",
    precipitationU: "mm/h",
      wind_speed: "km/h",
      visibilityU: 'km',
      humidityP: '%',
      uv_indexU: '',
      cloud_coverP: '%',
  }
};