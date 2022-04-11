import React from "react";
import { Route, useColorScheme } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-dynamic-vector-icons";
import { ThemeProvider } from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { LightTheme, DarkTheme, palette } from "@theme/themes";
import { AppProvider } from "@services/context";
import { SCREENS } from "@shared-constants";
import HomeScreen from "@screens/home";
import SearchScreen from "@screens/search";
import SettingsScreen from "@screens/settings";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  const renderTabIcon = (
    route: Route,
    focused: boolean,
    color: string,
    size: number,
  ) => {
    let iconName;
    switch (route.name) {
      case SCREENS.HOME:
        iconName = focused ? "home" : "home-outline";
        break;
      case SCREENS.SEARCH:
        iconName = focused ? "search" : "search-outline";
        break;
      case SCREENS.SETTINGS:
        iconName = focused ? "settings" : "settings-outline";
        break;
      default:
        iconName = focused ? "home" : "home-outline";
        break;
    }
    return <Icon name={iconName} type="Ionicons" size={size} color={color} />;
  };

  const RenderTabNavigation = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) =>
            renderTabIcon(route, focused, color, size),
          tabBarActiveTintColor: isDarkMode ? palette.white : palette.black,
          tabBarInactiveTintColor: palette.placeholder,
          tabBarStyle: {
            position: "absolute",
            margin: 16,
            backgroundColor: isDarkMode ? palette.dynamicBlack : palette.white,
            elevation: 0,
            borderTopWidth: 0,
            borderRadius: 15,
            bottom: 10,
            paddingBottom: 0,
            maxHeight: 60,
          },
        })}
      >
        <Tab.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Tab.Screen name={SCREENS.SEARCH} component={SearchScreen} />
        <Tab.Screen name={SCREENS.SETTINGS} component={SettingsScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <AppProvider>
      <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
        <NavigationContainer theme={isDarkMode ? DarkTheme : LightTheme}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MAIN" component={RenderTabNavigation} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </AppProvider>
  );
};

export default Navigation;
