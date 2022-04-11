import { styled } from "@theme/themes";
import IMAGES from "@assets/images";

interface ImageBackgroundInterface {
  bottomTabBarHeight: number;
  windowHeight: number;
}

export const Wrapper = styled.ImageBackground.attrs(
  (props: ImageBackgroundInterface) => {
    return {
      source: IMAGES.BACKGROUND_GLOBE,
      resizeMode: "contain",
      imageStyle: { opacity: 0.2, top: -(props.windowHeight / 3) },
    };
  },
)<ImageBackgroundInterface>`
  display: flex;
  height: ${(props) => props.windowHeight - props.bottomTabBarHeight * 3.1}px;
  justify-content: space-between;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const WeatherText = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  font-size: 18px;
`;

export const TemperatureWrapper = styled.View`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const TemperatureText = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  font-size: 100px;
`;

export const TemperatureMeasure = styled.Text`
  position: absolute;
  right: -34px;
  font-size: 90px;
  font-weight: 300;
  color: #eeb72d;
`;

export const SvgWrapper = styled.View`
  display: flex;
  flex: 1;
  max-height: 40%;
`;

export const FractalsWrapper = styled.View`
  width: 100%;
  max-height: 25%;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
