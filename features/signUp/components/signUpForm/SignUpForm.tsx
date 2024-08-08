import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Formik } from "formik";

import { colors, space } from "@/constants/styles";
import { ButtonPrimary, Input } from "@/components";
import { initialValues, validationSchema } from "./form";
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
        validationSchema={validationSchema}
        onSubmit={async (values, { setFieldError }) => {
          const response = await onCreateAccount(values);
          if (response) {
            alert(response);
            setFieldError("email", response);
          }
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <View>
            <View style={styles.containerInput}>
              <Input
                field="Full Name"
                value={values.fullName}
                onChangeText={handleChange("fullName")}
                textError={touched.fullName ? errors.fullName : null}
              />
              <Input
                field="Email"
                value={values.email}
                onChangeText={handleChange("email")}
                textError={touched.email ? errors.email : null}
              />
              <Input
                field="Password"
                value={values.password}
                onChangeText={handleChange("password")}
                secureTextEntry={true}
                textError={touched.password ? errors.password : null}
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
