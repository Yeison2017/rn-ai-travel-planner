import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

import { colors, fontSize, padding } from "@/constants/styles";

interface Props {
  name: string;
  style?: StyleProp<ViewStyle>;
}

const ButtonPrimary = ({ name, style }: Props) => {
  return (
    <View style={[styles.button, style]}>
      <Text style={styles.textButton}>{name}</Text>
    </View>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  button: {
    padding: padding.md,
    backgroundColor: colors.primary,
    borderRadius: 99,
  },
  textButton: {
    color: colors.white,
    textAlign: "center",
    fontSize: fontSize.md,
  },
});
