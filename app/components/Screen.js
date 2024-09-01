import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Screen = ({ children, style }) => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={[styles.screen, style]}>
        <View>{children}</View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});

export default Screen;
