import { container } from "tsyringe";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { useRouter } from "expo-router";
import { Formik } from "formik";

import { colors, space } from "@/constants/styles";
import { ButtonPrimary, Input } from "@/components";
import { SignUpFormController } from "../controllers/signUpFormController";

interface Props {
  style?: StyleProp<ViewStyle>;
}

const SignUpForm = ({ style }: Props) => {
  const router = useRouter();
  const signUpController = container.resolve(SignUpFormController);

  return (
    <View style={style}>
      <Formik
        initialValues={signUpController.initialValues}
        validationSchema={signUpController.validationSchema}
        onSubmit={async (values, { setFieldError, resetForm }) => {
          const response = await signUpController.onCreateAccount(values);
          if (response) {
            alert(response);
            setFieldError("email", response);
          } else {
            router.replace("/mytrip");
            resetForm();
          }
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <View>
            <View style={styles.containerInput}>
              {signUpController.fieldConfigs.map((field) => (
                <Input
                  key={field.name}
                  field={field.label}
                  value={values[field.name]}
                  onChangeText={handleChange(field.name)}
                  textError={touched[field.name] ? errors[field.name] : null}
                  secureTextEntry={field.secureTextEntry}
                />
              ))}
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
