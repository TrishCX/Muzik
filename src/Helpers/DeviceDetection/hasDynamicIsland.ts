import { useSafeAreaInsets } from "react-native-safe-area-context";

export function hasDynamicIsland() {
  const insets = useSafeAreaInsets();
  return insets.top == 59 ? true : false;
}
