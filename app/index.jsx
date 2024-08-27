import {
  Button,
  Platform,
  StatusBar as RNStatusBar,
  SafeAreaView,
  StyleSheet,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Text clicked");
  return (
    <SafeAreaView style={styles.container}>
      <Button color="orange" title="Click Me" onPress={() => console.log("Button tapped")} />
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
