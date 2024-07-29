import { StyleProp, StyleSheet, TextStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";

type IconNames = "arrow-back" | "arrow-forward";

interface Props extends IconProps<IconNames> {
  name: IconNames;
  color?: string;
  style?: StyleProp<TextStyle>;
}

const Icon = ({ name, style, ...props }: Props) => {
  switch (name) {
    case "arrow-back":
      return <Ionicons name="arrow-back" {...props} />;
    default:
      break;
  }
};

export default Icon;

const styles = StyleSheet.create({});
