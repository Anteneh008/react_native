import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "./Screen";
import AppTextInput from "./AppTextInput";
import AppButton from "./AppButton";

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [Password, setPassword] = useState();
  return (
    <Screen style={styles.conatiner}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        textContentType="emailAddress" // only work on IOS platforms
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry={true}
        textContentType="emailAddress" // only work on IOS platforms
      />

      <AppButton title="Login" onPress={() => console.log(email, Password)} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
