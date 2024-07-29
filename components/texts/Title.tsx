import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

import { fontFamily, fontSize } from "@/constants/styles";

interface Props {
  name: string;
  isBold?: boolean;
  style?: StyleProp<TextStyle>;
}

const Title = ({ name, isBold = true, style }: Props) => {
  return (
    <Text
      style={[
        styles(isBold).text,
        style,
        // {
        //   fontFamily: isBold
        //     ? fontFamily.primaryBold
        //     : fontFamily.primaryRegular,
        // },
      ]}
    >
      {name}
    </Text>
  );
};

export default Title;

const styles = (isBold: boolean = true) =>
  StyleSheet.create({
    text: {
      fontSize: fontSize.xxl,
      fontFamily: isBold ? fontFamily.primaryBold : fontFamily.primaryRegular,
    },
  });
