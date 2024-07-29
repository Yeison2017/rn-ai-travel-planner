import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

import { borderRadius, colors, fontSize, space } from "@/constants/styles";

interface Props {
  name: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const ButtonPrimary = ({ name, onPress, style }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      activeOpacity={0.8}
    >
      <Text style={styles.textButton}>{name}</Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  button: {
    padding: space.md,
    backgroundColor: colors.primary,
    borderRadius: borderRadius.md,
  },
  textButton: {
    color: colors.white,
    textAlign: "center",
    fontSize: fontSize.md,
  },
});
