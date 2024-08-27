import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar as RNStatusBar,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Text clicked");
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress} style={styles.text}>
        Hello React Native - A really really long text. Now I wanna make this
        even longer and see what happens!
      </Text>
      <TouchableNativeFeedback onPress={() => console.log("Image tapped")}>
        <View style={{width:200, height: 70, backgroundColor: "dodgerblue"}}></View>
      </TouchableNativeFeedback>
      <Image
        source={require("../assets/icon.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <StatusBar style="auto" />
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
  text: {
    marginBottom: 20, // Adds space between the text and image
  },
  image: {
    width: 100, // Set width according to your needs
    height: 100, // Set height according to your needs
  },
});
