import React from "react";
import { View } from "react-native";

// for IOS device
// shadowColor: "grey",
// shadowOffset: { width: 10, height: 10 },
// shadowOpacity: 1,
// shadowRadius: 10,

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          // iOS shadow properties
          shadowColor: "grey",
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 10,
          // Android elevation property
          elevation: 20,    
        }}
      ></View>
    </View>
  );
}
