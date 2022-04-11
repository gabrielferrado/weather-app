import { styled } from "@theme/themes";
import IMAGES from "@assets/images";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

export const Wrapper = styled.ImageBackground.attrs({
  source: IMAGES.BACKGROUND_GLOBE,
  resizeMode: "contain",
  imageStyle: { opacity: 0.2 },
})<{ bottomTabBarHeight: number }>`
  flex: 1;
  display: flex;
  height: ${(props) => windowHeight - props.bottomTabBarHeight * 2.7}px;
  justify-content: space-between;
  position: relative;
`;

export const Container = styled.View`
  height: 60px;
  margin: 12px;
`;

export const Row = styled.View`
  width: 100%;
  max-height: 28%;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 30px 0;
`;
