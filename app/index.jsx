import { useDeviceOrientation } from "@react-native-community/hooks";
import React from "react";
import { View } from "react-native";


// column, column-reverse, row, row-reverse 

export default function App() {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1, flexDirection: "row" }}> 
      <View
        style={{ backgroundColor: "dodgerblue", width: 100, height: 100 }}
      />
      <View style={{ backgroundColor: "gold", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
    </View>
  );
}
