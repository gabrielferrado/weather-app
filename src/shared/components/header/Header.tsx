import React, { useContext, useEffect, useState } from "react";
import {
  Wrapper,
  Container,
  Text,
  LocationTitle,
  Row,
  PinIcon,
  RefreshButton,
  RefreshIcon,
} from "./Header.style";
import { MONTH } from "@shared-constants";
import { AppContext } from "@services/context";

const Header: React.FC = () => {
  const [date, setDate] = useState<{
    day: number;
    month: string;
    year: number;
  }>();
  const { state, city, updateTemperature, location } = useContext(AppContext);

  useEffect(() => getCurrentDate(), []);

  const getCurrentDate = () => {
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    return setDate({ day, month: MONTH[month], year });
  };

  return (
    <Wrapper>
      <Container>
        <Text>
          {date?.day}, {date?.month} {date?.year}
        </Text>
        <Row>
          <PinIcon />
          <LocationTitle>{city},</LocationTitle>
          <Text>{state}</Text>
        </Row>
      </Container>
      <RefreshButton
        onPress={() => updateTemperature(location.latitude, location.longitude)}
      >
        <RefreshIcon />
      </RefreshButton>
    </Wrapper>
  );
};

export default Header;
