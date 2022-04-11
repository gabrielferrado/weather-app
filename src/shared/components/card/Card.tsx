import React from "react";
import {
  SmallWrapper,
  SmallContainer,
  Text,
  BlurredBackground,
  MediumWrapper,
  Row,
  MediumContainer,
  LargeWrapper,
  LargeContainer,
  Column,
  DetailsContainer,
  IconContainer,
} from "@shared-components/card/Card.style";
import WebView from "react-native-webview";
import moment from "moment";

interface TCard {
  type: "small" | "medium" | "large";
  city?: string;
  weather?: string;
  icon?: string;
  temperature?: string;
  time?: string;
  precipitation?: number;
  pressure?: number;
  humidity?: number;
  wind?: number;
}

interface TCardComponent extends Omit<TCard, "type"> {}

const defaultIcon =
  "https://bmcdn.nl/assets/weather-icons/v2.1/fill/compass.svg";

const SmallCard: React.FC<TCardComponent> = ({ time, temperature, icon }) => {
  return (
    <SmallWrapper>
      <SmallContainer>
        <WebView
          scrollEnabled={false}
          scalesPageToFit={true}
          originWhitelist={["*"]}
          domStorageEnabled={true}
          source={{
            uri: icon || defaultIcon,
          }}
          style={{
            width: 300,
            height: 300,
            backgroundColor: "transparent",
          }}
        />
        <Text>{moment(time).format("HH:mm")}</Text>
        <Text strong>{temperature}°</Text>
      </SmallContainer>
      <BlurredBackground />
    </SmallWrapper>
  );
};

const MediumCard: React.FC<TCardComponent> = ({
  city,
  icon,
  temperature,
  weather,
}) => {
  return (
    <MediumWrapper>
      <MediumContainer>
        <Text strong large>
          {city}
        </Text>
        <WebView
          scrollEnabled={false}
          scalesPageToFit={true}
          originWhitelist={["*"]}
          domStorageEnabled={true}
          source={{
            uri: icon || defaultIcon,
          }}
          style={{
            width: 300,
            height: 300,
            backgroundColor: "transparent",
          }}
        />
        <Row>
          <Text strong large>
            {temperature}°
          </Text>
          <Text opacity={0.5}>{weather}</Text>
        </Row>
      </MediumContainer>
      <BlurredBackground />
    </MediumWrapper>
  );
};

const LargeCard: React.FC<TCardComponent> = ({
  precipitation,
  humidity,
  wind,
  pressure,
}) => {
  return (
    <LargeWrapper>
      <IconContainer>
        <WebView
          scrollEnabled={false}
          scalesPageToFit={true}
          originWhitelist={["*"]}
          domStorageEnabled={true}
          containerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
          source={{
            uri: defaultIcon,
          }}
          style={{
            width: 300,
            height: 300,
            backgroundColor: "transparent",
          }}
        />
      </IconContainer>
      <LargeContainer>
        <Column>
          <DetailsContainer>
            <Text large opacity={0.5}>
              Precipitation
            </Text>
            <Text strong large>
              {Number(precipitation)} mm
            </Text>
          </DetailsContainer>
          <DetailsContainer>
            <Text large opacity={0.5}>
              Humidity
            </Text>
            <Text strong large>
              {Number(humidity)}%
            </Text>
          </DetailsContainer>
        </Column>
        <Column>
          <DetailsContainer>
            <Text large opacity={0.5}>
              Wind
            </Text>
            <Text strong large>
              {Number(wind)} m/s
            </Text>
          </DetailsContainer>
          <DetailsContainer>
            <Text large opacity={0.5}>
              Pressure
            </Text>
            <Text strong large>
              {Number(pressure)} hPa
            </Text>
          </DetailsContainer>
        </Column>
      </LargeContainer>
      <BlurredBackground />
    </LargeWrapper>
  );
};

const Card: React.FC<TCard> = ({ type, ...rest }) => {
  switch (type) {
    case "small":
      return <SmallCard {...rest} />;
    case "medium":
      return <MediumCard {...rest} />;
    default:
      return <LargeCard {...rest} />;
  }
};

export default Card;
