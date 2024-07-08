import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

import { fontFamily, fontSize } from "@/constants/styles";

interface Props {
  name: string;
  style?: StyleProp<TextStyle>;
}

const Title = ({ name, style }: Props) => {
  return <Text style={[styles.text, style]}>{name}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  text: {
    fontSize: fontSize.xxl,
    fontFamily: fontFamily.primaryBold,
  },
});
