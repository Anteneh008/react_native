import React, { useState } from "react";
import { Switch } from "react-native";
import Screen from "./components/Screen";
import AppPicker from "./components/AppPicker";
import AppTextInput from "./components/AppTextInput";

export default function App() {
  const [isNew, setIsNew] = useState(false)
  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Category"/>
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
