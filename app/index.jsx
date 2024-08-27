import {
  Button,
  Platform,
  StatusBar as RNStatusBar,
  SafeAreaView,
  StyleSheet,
  Alert,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button
        color="orange"
        title="Click Me"
        onPress={() =>
          Alert.prompt("My title", "My message", (text) => console.log(text))
        }
      />
    </SafeAreaView>
  );
}

const containerStyle = {backgroundColor: "orange"}

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
