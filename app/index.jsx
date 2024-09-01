import React, { useState } from "react";
import ListingsScreen from "./screens/ListingsScreen";
import Screen from "./components/Screen";
import { Text, TextInput } from "react-native";
import AppTextInput from "./components/AppTextInput";

export default function App() {
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
  );
}
