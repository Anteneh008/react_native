import React, { useState } from "react";
import ListingsScreen from "./screens/ListingsScreen";
import Screen from "./components/Screen";
import { Text, TextInput } from "react-native";

export default function App() {
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <Text></Text>
      <TextInput
        secureTextEntry={true}
        maxLength={10}
        keyboardType="numeric"
        clearButtonMode="always" // only work on IOS
        onChangeText={(text) => setFirstName(text)}
        placeholder="First Name"
        style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
      />
    </Screen>
  );
}
