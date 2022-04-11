import React, { ReactNode, useEffect, useState } from "react";
import { PermissionsAndroid } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import { isAndroid } from "@freakycoder/react-native-helpers";

import { getForecast, getLocationDetails, getTemperature } from "@api";
import {
  TAppProviderState,
  TForecastResponse,
  TLocation,
  TWeatherResponse,
} from "@services/models";

const initialState: TAppProviderState = {
  loading: true,
  // search: "",
  location: {
    latitude: "0",
    longitude: "0",
  },
  state: "",
  city: "",
  temperature: undefined,
  forecast: undefined,
  updateTemperature: () => Promise.resolve(),
};

export const AppContext = React.createContext<TAppProviderState>(initialState);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<TLocation>({
    latitude: "",
    longitude: "",
  });
  const [temperature, setTemperature] = useState<TWeatherResponse>();
  const [forecast, setForecast] = useState<TForecastResponse>();
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  // const [search, setSearch] = useState("");

  useEffect(() => {
    if (!isAndroid) {
      getLocation();
    } else {
      const requestLocationPermission = async () => {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Permissão de Acesso à Localização",
            message: "Este aplicativo precisa acessar sua localização.",
            buttonNeutral: "Pergunte-me depois",
            buttonNegative: "Cancelar",
            buttonPositive: "OK",
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getLocation();
        } else {
          console.log("Permissão de Localização negada");
        }
      };
      requestLocationPermission();
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      getTemperature(location.latitude, location.longitude)
        .then((r) => setTemperature(r))
        .catch((e) =>
          console.warn({ message: e.message, data: e.response?.data }),
        );

      getForecast(location.latitude, location.longitude)
        .then((r) => setForecast(r))
        .catch((e) => console.warn(e));

      getLocationDetails(location.latitude, location.longitude)
        .then((r) => {
          setCity(r.city);
          setState(r.state);
        })
        .catch((e) => console.warn(e));
    }
  }, [loading, location]);

  // TODO: IMPLEMENT SEARCH BY LOCATION WITH GOOGLE API
  // const callback = useCallback(
  //   (text: string) => {
  //     setLoading(true);
  //     setSearch(text);
  //   },
  //   [search],
  // );

  // useEffect(() => {
  //   callback().then((r) => setNearby(r));
  // }, [callback]);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const currentLatitude = JSON.stringify(position.coords.latitude);
        const currentLongitude = JSON.stringify(position.coords.longitude);
        return { currentLatitude, currentLongitude };
      },
      (error) => console.warn(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    return Geolocation.watchPosition((position) => {
      const latitude = JSON.stringify(position.coords.latitude);
      const longitude = JSON.stringify(position.coords.longitude);
      setLocation({ latitude, longitude });
      setLoading(false);
    });
  };

  const updateTemperature = async (lat: string, lon: string) => {
    try {
      setLoading(true);
      const temp = await getTemperature(lat, lon);
      const fcast = await getForecast(lat, lon);

      setTemperature(temp);
      setForecast(fcast);

      return setLoading(false);
    } catch (e) {
      return console.warn(e);
    }
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        location,
        temperature,
        forecast,
        state,
        city,
        // search,
        updateTemperature,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
