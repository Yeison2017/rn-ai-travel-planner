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

const ButtonSecondary = ({ name, onPress, style }: Props) => {
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

export default ButtonSecondary;

const styles = StyleSheet.create({
  button: {
    padding: space.md,
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    borderColor: colors.gray400,
    borderWidth: 1,
  },
  textButton: {
    textAlign: "center",
    fontSize: fontSize.md,
  },
});
