import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import { container } from "tsyringe";

import { ButtonPrimary, Input } from "@/components";
import { space } from "@/constants/styles";
import { SignInController } from "../controllers";

interface Props {
  style?: StyleProp<ViewStyle>;
}

const SignInForm = ({ style }: Props) => {
  const router = useRouter();

  const signInController = container.resolve(SignInController);

  return (
    <View style={style}>
      <Formik
        initialValues={signInController.initialValues}
        validationSchema={signInController.validationSchema}
        onSubmit={async (values, { resetForm }) => {
          const response = await signInController.onSignIn(values);
          if (response) {
            alert(response);
          } else {
            router.replace("/mytrip");
            resetForm();
          }
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <View>
            <View style={styles.containerInput}>
              {signInController.fieldConfigs.map((field) => (
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
            <ButtonPrimary name="Sign In" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignInForm;

const styles = StyleSheet.create({
  containerInput: {
    gap: space.md,
    marginBottom: space.xxl,
  },
});
