import React from "react";
import Screen from "./components/Screen";
import Icon from "./components/Icon";

export default function App() {
  return (
    <Screen>
      <Icon name="email" size={50} backgroundColor="red" iconColor="white" />
    </Screen>
  );
}
