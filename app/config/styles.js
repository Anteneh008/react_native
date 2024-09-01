import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.darkGrey,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Robot" : "Avenir",
  },
};
