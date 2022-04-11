import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@shared-components/header";
import MainContent from "@screens/home/components/main-content";

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <Header />
      <MainContent />
    </SafeAreaView>
  );
};

export default HomeScreen;
