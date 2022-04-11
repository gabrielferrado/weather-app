<img alt="weather-app" src="../src/assets/logo.png" width="512" height="512" title="logo"/>

# 🍾 Components

Predefined styled components with props **`styled`** imported from base theme

## Styles

- Header
- Fonts
- Theme
- Font Size

## Imports

Predefined **`h`** tags are usable with TextWrapper

```jsx
import Text from "@shared-components/header";

<Header />;
```

```jsx
import fonts from "@fonts";

export const Text = styled.Text`
  margin-left: 2px;
  font-size: 12px;
  color: ${(props) => props.theme.colors.title};
  font-family: ${fonts.montserrat.regular};
`;
```

```jsx
import theme from "@theme";
// ? For usage on styled components
import { styled } from "@theme/themes";
```
