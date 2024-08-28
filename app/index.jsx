import { useDeviceOrientation } from "@react-native-community/hooks";
import React from "react";
import { View } from "react-native";

// justifyContent: "center", justifyContent: "flex-end", justifyContent: "flex-start", justifyContent: "space-around", justifyContent: "space-evenly", justifyContent: "space-between",

// alignItems: "center", alignItems: "baseline", alignItems: "baseline", alignItems: "flex-end", alignItems: "flex-start", alignItems: "stretch", alignSelf: "flex-start"

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{ backgroundColor: "dodgerblue", width: 100, height: 100, alignSelf: "flex-start" }}
      />
      <View style={{ backgroundColor: "gold", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
    </View>
  );
}
