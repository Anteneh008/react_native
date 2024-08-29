import React from "react";
import { View } from "react-native";
import AppText from "./components/AppText";

// https://icons.expo.fyi/Index

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText>I love React Native!</AppText>
    </View>
  );
}
