import { Platform } from "react-native";

const ios = Platform.OS === "ios";
const android = Platform.OS === "android";

export { ios, android };
