import React, { useState, useEffect } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";

export default function App() {
  const [dimensions, setDimensions] = useState(Dimensions.get("window"));

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions(window);
    });

    return () => {
      subscription?.remove();
    };
  }, []);

  const isPortrait = dimensions.height > dimensions.width;

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: isPortrait ? "30%" : "50%",
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
