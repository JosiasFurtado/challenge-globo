import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import Routes from "./src/routes";
import store from "./src/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0, 0, 0, 0.1)"
        hidden={false}
      />
      <Routes />
    </Provider>
  );
};

export default App;
