import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";

type IconsName = "location-sharp" | "globe-sharp" | "people-circle";

interface Props extends IconProps<IconsName> {
  name: IconsName;
  size?: number;
  color: string;
}

const Icons = ({ name, size = 24, color, ...props }: Props) => {
  switch (name) {
    case "location-sharp":
      return <Ionicons name={name} size={size} color={color} {...props} />;
    case "globe-sharp":
      return <Ionicons name={name} size={size} color={color} {...props} />;
    case "people-circle":
      return <Ionicons name={name} size={size} color={color} {...props} />;
    default:
      return undefined;
  }
};

export default Icons;

const styles = StyleSheet.create({});
