import React from "react";
import { View } from "react-native";
import Card from "./components/Card";

// https://icons.expo.fyi/Index

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card title="Redjacket for sale!" price="$100" image={require("./assets/jacket.jpg")}/>
    </View>
  );
}
