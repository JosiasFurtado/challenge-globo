import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawNavi from "./navigation/DrawerNavi";

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <DrawNavi />
    </NavigationContainer>
  );
};

export default Routes;
