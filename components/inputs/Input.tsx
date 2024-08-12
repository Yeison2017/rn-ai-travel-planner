import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  space,
} from "@/constants/styles";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface Props extends TextInputProps {
  field: string;
  textError?: string | null;
}

const Input = ({ field, textError, ...props }: Props) => {
  return (
    <View>
      <Text style={styles.field}>{field}</Text>
      <TextInput
        placeholder={`Enter ${field}`}
        style={styles.textInput}
        {...props}
      />
      {textError ? <Text style={styles.textError}>{textError}</Text> : null}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  field: {
    color: colors.gray500,
    fontFamily: fontFamily.primaryRegular,
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.gray300,
    padding: space.sm,
    paddingHorizontal: space.md,
    borderRadius: borderRadius.sm,
    fontFamily: fontFamily.primaryRegular,
    fontSize: fontSize.md,
  },
  textError: {
    color: colors.red700,
    fontFamily: fontFamily.primaryRegular,
    fontSize: fontSize.sm,
  },
});
