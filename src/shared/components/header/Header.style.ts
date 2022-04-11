import { styled } from "@theme/themes";
import Icon from "react-native-dynamic-vector-icons";

export const Wrapper = styled.View`
  padding: 8px 16px 0 16px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;

export const Container = styled.View`
  display: flex;
`;

export const Text = styled.Text`
  margin-left: 2px;
  font-size: 12px;
  color: ${(props) => props.theme.colors.title};
`;

export const LocationTitle = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  text-transform: uppercase;
`;

export const Row = styled.View`
  margin-top: 2px;
  display: flex;
  flex-direction: row;
`;

export const PinIcon = styled(Icon).attrs({
  name: "location",
  size: 14,
  type: "Ionicons",
})`
  align-self: center;
  margin-right: 2px;
  color: ${(props) => props.theme.colors.text};
`;

export const RefreshIcon = styled(Icon).attrs({
  name: "refresh",
  size: 24,
  type: "Ionicons",
})`
  color: ${(props) => props.theme.colors.text};
`;

export const RefreshButton = styled.TouchableOpacity`
  z-index: 2;
  padding: 4px;
  align-self: center;
`;
