import { styled } from "@theme/themes";
import { SafeAreaView } from "react-native-safe-area-context";

export const Text = styled.Text`
  margin-top: 4px;
  color: ${(props) => props.theme.colors.text};
`;

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
