import { useDeviceOrientation } from "@react-native-community/hooks";
import React from "react";
import { View } from "react-native";

// flexBasis equivalent to setting height and width property
// flex: 1 amd flexGrow: 1 have the same result to fill the available space
// flex: -1 and flexShrink are the same. if you have overflowing get shrink and other item fit on the screen

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        // flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 400,
          flex: -1,
          height: 100,
        }}
      />
      <View style={{ backgroundColor: "gold", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
    </View>
  );
}
