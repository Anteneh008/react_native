import React from "react";
import { TouchableOpacity, View } from "react-native";
import AppButton from "./components/AppButton";

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
      <AppButton title="login" onPress={() => console.log("Tapped")}/>
    </View>
  );
}
