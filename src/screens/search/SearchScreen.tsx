import React, { useCallback, useContext, useEffect, useState } from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SearchInput from "@screens/search/components/search-input";
import { Container, Wrapper, Row } from "./SearchScreen.style";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import Card from "@shared-components/card/Card";
import { AppContext } from "@services/context";
import { TWeatherResponse } from "@services/models";
import { getNearbyCities } from "@api";
import { WEATHER_TYPES } from "@shared-constants";

const SearchScreen: React.FC = () => {
  const [nearby, setNearby] = useState<Array<TWeatherResponse> | undefined>();
  const bottomTabBarHeight = useBottomTabBarHeight() + 30;
  const { location, temperature, loading } = useContext(AppContext);

  const callback = useCallback(
    () => getNearbyCities(location.latitude, location.longitude),
    [location],
  );

  useEffect(() => {
    callback().then((r) => setNearby(r));
  }, [callback]);

  const renderCards = (city: TWeatherResponse) => {
    const weather = city.weather[0].main;
    const weatherDescription = city.weather[0].description;

    return (
      <Card
        type="medium"
        temperature={city.main.temp.toFixed(0)}
        icon={WEATHER_TYPES[weather][weatherDescription]}
        city={city.name}
        weather={city.weather[0].main}
      />
    );
  };

  const renderNearbyCities = () => {
    if (!nearby) {
      return <ActivityIndicator />;
    }

    return (
      <>
        {renderCards(nearby[0])}
        {renderCards(nearby[1])}
      </>
    );
  };

  const renderDetailsCard = () => {
    if (!temperature || loading) {
      return <ActivityIndicator />;
    }

    const weather = temperature.weather[0].main;
    const weatherDescription = temperature.weather[0].description;

    if (temperature && temperature.rain) {
      const keys = Object.keys(temperature.rain || {});
      const precipitation = keys.length ? temperature.rain[keys[0]] : 0;
      return (
        <Card
          type="large"
          precipitation={precipitation}
          icon=""
          city="busta"
          weather="Clear"
        />
      );
    }

    return (
      <Card
        type="large"
        precipitation={0}
        icon={WEATHER_TYPES[weather][weatherDescription]}
        humidity={temperature.main.humidity}
        wind={temperature.wind.speed}
        pressure={temperature.main.pressure}
      />
    );
  };

  return (
    <SafeAreaView>
      <Container>
        <SearchInput />
      </Container>

      <ScrollView>
        <Wrapper {...{ bottomTabBarHeight }}>
          <Row>{renderNearbyCities()}</Row>
          {renderDetailsCard()}
        </Wrapper>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
