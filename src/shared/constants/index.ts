const hours = new Date().getHours();
const isDayTime = hours > 6 && hours < 20;

interface TWeather {
  [description: string]: string;
}

interface TMainWeather {
  [condition: string]: TWeather;
}

export const SCREENS = {
  HOME: "Home",
  SEARCH: "Search",
  SETTINGS: "Settings",
};

export const MONTH = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const WEATHER: { [condition: string]: TWeather } = {
  fog: {
    uri: "https://bmcdn.nl/assets/weather-icons/v2.1/fill/fog-day.svg",
  },
  THUNDERSTORM: {
    ["thunderstorm with light rain"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/thunderstorms-rain.svg",
    ["thunderstorm with rain"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/thunderstorms-rain.svg",
    ["thunderstorm with heavy rain"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/thunderstorms-rain.svg",
    ["light thunderstorm"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/thunderstorms.svg",
    ["thunderstorm"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/thunderstorms.svg",
    ["heavy thunderstorm"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/thunderstorms.svg",
    ["ragged thunderstorm"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/thunderstorms.svg",
    ["thunderstorm with light drizzle"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/thunderstorms-rain.svg",
    ["thunderstorm with drizzle"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/thunderstorms-rain.svg",
    ["thunderstorm with heavy drizzle"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/thunderstorms-rain.svg",
  },
  RAIN: {
    ["light rain"]: "https://bmcdn.nl/assets/weather-icons/v2.1/fill/rain.svg",
    ["moderate rain"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/partly-cloudy-rain.svg",
    ["heavy intensity rain"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/partly-cloudy-rain.svg",
    ["very heavy rain"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/partly-cloudy-rain.svg",
    ["extreme rain"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/partly-cloudy-rain.svg",
    ["freezing rain"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/hail.svg",
    ["light intensity shower rain"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/sleet.svg",
    ["shower rain"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/sleet.svg",
    ["heavy intensity shower rain"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/sleet.svg",
    ["ragged shower rain"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/sleet.svg",
  },
  CLEAR: {
    ["clear sky"]: isDayTime
      ? "https://bmcdn.nl/assets/weather-icons/v2.1/fill/clear-day.svg"
      : "https://bmcdn.nl/assets/weather-icons/v2.1/fill/clear-night.svg",
  },
  CLOUDS: {
    ["few clouds"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/cloudy.svg",
    ["scattered clouds"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/cloudy.svg",
    ["broken clouds"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/cloudy.svg",
    ["overcast clouds"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/overcast.svg",
  },
  SNOW: {
    ["light snow"]: "https://bmcdn.nl/assets/weather-icons/v2.1/fill/snow.svg",
    ["Snow"]: "https://bmcdn.nl/assets/weather-icons/v2.1/fill/snow.svg",
    ["Heavy snow"]: "https://bmcdn.nl/assets/weather-icons/v2.1/fill/snow.svg",
    ["Sleet"]: "https://bmcdn.nl/assets/weather-icons/v2.1/fill/sleet.svg",
    ["Light shower sleet"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/sleet.svg",
    ["Shower sleet"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/sleet.svg",
    ["Light rain and snow"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/sleet.svg",
    ["Rain and snow"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/sleet.svg",
    ["Light shower snow"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/sleet.svg",
    ["Shower snow"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/sleet.svg",
    ["Heavy shower snow"]:
      "https://bmcdn.nl/assets/weather-icons/v2.1/fill/sleet.svg",
  },
};

export const WEATHER_TYPES: TMainWeather = {
  Thunderstorm: WEATHER.THUNDERSTORM,
  Rain: WEATHER.RAIN,
  Clear: WEATHER.CLEAR,
  Clouds: WEATHER.CLOUDS,
  Snow: WEATHER.SNOW,
};
