import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Formik } from "formik";

import { colors, space } from "@/constants/styles";
import { ButtonPrimary, Input } from "@/components";
import { initialValues } from "./form";
import { CreateAccount } from "../../controllers";

interface Props {
  style?: StyleProp<ViewStyle>;
}

const SignUpForm = ({ style }: Props) => {
  const { onCreateAccount } = new CreateAccount();

  return (
    <View style={style}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => onCreateAccount(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <View style={styles.containerInput}>
              <Input
                field="Full Name"
                value={values.fullName}
                onChangeText={handleChange("fullName")}
              />
              <Input
                field="Email"
                value={values.email}
                onChangeText={handleChange("email")}
              />
              <Input
                field="Password"
                value={values.password}
                onChangeText={handleChange("password")}
                secureTextEntry={true}
              />
            </View>
            <ButtonPrimary name="Create Account" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: space.xl,
  },
  title: {
    marginBottom: space.xxl,
    marginTop: space.lg,
  },
  containerInput: {
    gap: space.md,
    marginBottom: space.xxl * 1.8,
  },
});
