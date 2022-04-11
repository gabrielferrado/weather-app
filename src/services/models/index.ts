export type TNearbyCities = Array<{
  name: string;
  country: string;
  featureCode: string;
  adminCode: string;
  population: number;
  lat: number;
  lon: number;
}>;

export interface TMainWeather {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface TWeatherDetails {
  description: string;
  main: string;
}

export interface TWeatherResponse {
  base: string;
  main: TMainWeather;
  weather: Array<TWeatherDetails>;
  wind: {
    deg: number;
    speed: number;
  };
  rain?: {
    [key: string]: number;
  };
  dt_txt: string;
  name: string;
}

export interface TForecastResponse {
  list: Array<TWeatherResponse>;
}

export interface TLocation {
  latitude: string;
  longitude: string;
}

export interface TAppProviderState {
  loading: boolean;
  // search: string;
  location: TLocation;
  temperature: TWeatherResponse | undefined;
  forecast: TForecastResponse | undefined;
  state: string;
  city: string;
  updateTemperature: (lat: string, lon: string) => Promise<void>;
}
