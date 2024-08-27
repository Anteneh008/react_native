import {
  Button,
  Platform,
  StatusBar as RNStatusBar,
  SafeAreaView,
  StyleSheet,
  Alert
} from "react-native";

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Button color="orange" title="Click Me" onPress={() => alert("Button tapped")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0,
    padding: 10,
  },
});
