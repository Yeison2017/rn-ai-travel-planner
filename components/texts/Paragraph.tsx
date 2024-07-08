import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

import { colors, fontSize } from "@/constants/styles";

interface Props {
  text: string;
  style?: StyleProp<TextStyle>;
}

const Paragraph = ({ text, style }: Props) => {
  return <Text style={[styles.text, style]}>{text}</Text>;
};

export default Paragraph;

const styles = StyleSheet.create({
  text: {
    fontSize: fontSize.md,
    color: colors.gray,
  },
});
