import axios from "axios";
import { BASE_URL, OW_API_KEY, G_API_KEY } from "./api.constant";
import {
  TForecastResponse,
  TNearbyCities,
  TWeatherResponse,
} from "@services/models";

export const getTemperature = (
  latitude: string,
  longitude: string,
): Promise<TWeatherResponse> =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: {
          lat: latitude,
          lon: longitude,
          appid: OW_API_KEY,
          units: "metric",
        },
      });
      resolve(response.data);
    } catch (e) {
      reject(e);
    }
  });

export const getForecast = (
  latitude: string,
  longitude: string,
): Promise<TForecastResponse> =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`${BASE_URL}/forecast`, {
        params: {
          lat: latitude,
          lon: longitude,
          appid: OW_API_KEY,
          units: "metric",
          cnt: 3,
        },
      });
      resolve(response.data);
    } catch (e) {
      reject(e);
    }
  });

export const getLocationDetails = (
  latitude: string,
  longitude: string,
): Promise<{ state: string; city: string }> =>
  new Promise(async (resolve, reject) => {
    try {
      // TODO: Implement location details typos
      // ? Used any to improve time
      const response = await axios.get<any>(
        "https://maps.googleapis.com/maps/api/geocode/json",
        {
          params: {
            latlng: latitude + "," + longitude,
            key: G_API_KEY,
          },
        },
      );
      const state = response.data.results[0].address_components.find(
        (addr: any) => addr.types[0] === "administrative_area_level_1",
      );
      const city = response.data.results[0].address_components.find(
        (addr: any) => addr.types[0] === "administrative_area_level_2",
      );

      resolve({ state: state.long_name, city: city.long_name });
    } catch (e) {
      reject(e);
    }
  });

export const getNearbyCities = (
  latitude: string,
  longitude: string,
): Promise<Array<TWeatherResponse>> =>
  new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get<TNearbyCities>(
        "https://6250423ef8ea461322ffb769--gorgeous-eclair-296f03.netlify.app/.netlify/functions/search",
        {
          params: {
            latitude,
            longitude,
          },
        },
      );

      const nearby1 = await getTemperature(
        data[1].lat.toString(),
        data[1].lon.toString(),
      );

      const nearby2 = await getTemperature(
        data[2].lat.toString(),
        data[2].lon.toString(),
      );
      resolve([nearby1, nearby2]);
    } catch (e) {
      reject(e);
    }
  });
