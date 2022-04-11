import { styled } from "@theme/themes";
import Icon from "react-native-dynamic-vector-icons";

export const Wrapper = styled.View`
  height: 80px;
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 0 24px;
  background: rgba(161, 161, 161, 0.06);
  border-radius: 999px;
  position: relative;
`;

export const Input = styled.TextInput.attrs({
  autoCapitalize: "none",
  autoCorrect: false,
})`
  flex: 1;
  max-width: 80%;
  background: transparent;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
`;

export const SearchIcon = styled(Icon).attrs({
  name: "search",
  size: 24,
  type: "Ionicons",
})`
  align-self: center;
  margin-right: 12px;
  color: ${(props) => props.theme.colors.text};
`;

export const ClearButton = styled.TouchableWithoutFeedback``;
export const ClearButtonIcon = styled(Icon).attrs({
  name: "close",
  size: 20,
  type: "Ionicons",
})`
  position: absolute;
  right: 24px;
  align-self: center;
  color: ${({ theme }) => theme.colors.text};
`;
