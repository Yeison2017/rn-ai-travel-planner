import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation, useRouter } from "expo-router";

import {
  ButtonBack,
  ButtonPrimary,
  ButtonSecondary,
  Input,
  SafeAreaView,
  Title,
} from "@/components";
import { colors, space } from "@/constants/styles";

const SignUp = () => {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ButtonBack />
      <Title name="Create New Account" style={styles.title} />

      <View style={styles.containerInput}>
        <Input field="Full Name" />
        <Input field="Email" />
        <Input field="Password" secureTextEntry={true} />
      </View>

      <View style={styles.containerButtons}>
        <ButtonPrimary name="Create Account" />
        <ButtonSecondary
          name="Sign In"
          onPress={() => router.replace("auth/sign-in")}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

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
  containerButtons: {
    gap: space.lg,
    marginBottom: space.xxl,
  },
});
