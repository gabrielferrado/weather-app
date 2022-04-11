import { styled } from "@theme/themes";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

export const SmallWrapper = styled.View`
  border-radius: 15px;
  width: 25%;
  height: 80%;
  position: relative;
`;

export const BlurredBackground = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.placeholder};
  border-radius: 15px;
  opacity: 0.06;
  z-index: -1;
`;

export const SmallContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;

export const Text = styled.Text<{
  strong?: boolean;
  large?: boolean;
  opacity?: number;
}>`
  margin-top: 4px;
  color: ${(props) => props.theme.colors.text};
  font-weight: ${({ strong }) => (strong ? 600 : 400)};
  font-size: ${({ large }) => (large ? "20px" : "14px")};
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
`;

export const MediumWrapper = styled.View`
  border-radius: 15px;
  width: 40%;
  position: relative;
`;

export const MediumContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

export const Row = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const LargeWrapper = styled.View`
  border-radius: 15px;
  max-height: ${windowHeight / 3.5}px;
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 6%;
`;

export const LargeContainer = styled.View`
  flex-direction: row;
  flex: 1;
  position: relative;
`;

export const Column = styled.View`
  flex: 1;
  width: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 8px 0;
`;

export const DetailsContainer = styled.View`
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
`;

export const IconContainer = styled.View`
  position: absolute;
  width: 80px;
  height: 80px;
  background: transparent;
  top: -15%;
  right: 36%;
`;
