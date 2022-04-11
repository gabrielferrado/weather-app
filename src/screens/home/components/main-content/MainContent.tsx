import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, ScrollView } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import WebView from "react-native-webview";

import Card from "@shared-components/card/Card";
import { AppContext } from "@services/context";
import { WEATHER_TYPES } from "@shared-constants";
import {
  Container,
  FractalsWrapper,
  Wrapper,
  TemperatureText,
  TemperatureMeasure,
  TemperatureWrapper,
  WeatherText,
  SvgWrapper,
} from "./MainContent.style";

const MainContent = () => {
  const [icon, setIcon] = useState("");
  const { temperature, forecast, loading } = useContext(AppContext);
  const bottomTabBarHeight = useBottomTabBarHeight();
  const windowHeight = Dimensions.get("window").height;

  useEffect(() => {
    if (temperature) {
      const weather = temperature.weather[0].main;
      const weatherDescription = temperature.weather[0].description;
      setIcon(WEATHER_TYPES[weather][weatherDescription]);
    }
  }, [temperature]);

  const getForecastIcon = (pos: number) => {
    if (forecast) {
      const weather = forecast.list[pos].weather[0].main;
      const weatherDescription = forecast.list[pos].weather[0].description;
      return WEATHER_TYPES[weather][weatherDescription];
    }

    return "";
  };

  const renderMainContainer = () => {
    if (!loading && temperature) {
      return (
        <>
          <SvgWrapper>
            <WebView
              scrollEnabled={false}
              scalesPageToFit={false}
              originWhitelist={["*"]}
              domStorageEnabled={true}
              source={{
                uri: icon,
              }}
              style={{
                width: 500,
                height: 500,
                backgroundColor: "transparent",
              }}
            />
          </SvgWrapper>
          <WeatherText>{temperature.weather[0].main}</WeatherText>
          <TemperatureWrapper>
            <TemperatureText>
              {temperature.main.temp.toFixed(0)}
            </TemperatureText>
            <TemperatureMeasure>°</TemperatureMeasure>
          </TemperatureWrapper>
        </>
      );
    }

    return <ActivityIndicator />;
  };

  const renderForecastContainer = () => {
    if (!loading && forecast) {
      return (
        <>
          <Card
            type="small"
            temperature={forecast.list[0].main.temp.toFixed(0)}
            time={forecast.list[0].dt_txt}
            icon={getForecastIcon(0)}
          />
          <Card
            type="small"
            temperature={forecast.list[1].main.temp.toFixed(0)}
            time={forecast.list[1].dt_txt}
            icon={getForecastIcon(1)}
          />
          <Card
            type="small"
            temperature={forecast.list[2].main.temp.toFixed(0)}
            time={forecast.list[2].dt_txt}
            icon={getForecastIcon(2)}
          />
        </>
      );
    }

    return <ActivityIndicator />;
  };

  return (
    <ScrollView>
      <Wrapper {...{ bottomTabBarHeight, windowHeight }}>
        <>
          <Container>{renderMainContainer()}</Container>
          <FractalsWrapper>{renderForecastContainer()}</FractalsWrapper>
        </>
      </Wrapper>
    </ScrollView>
  );
};

export default MainContent;
