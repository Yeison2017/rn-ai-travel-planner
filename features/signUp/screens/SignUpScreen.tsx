import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { useNavigation, useRouter } from "expo-router";

import { ButtonBack, ButtonSecondary, SafeAreaView, Title } from "@/components";
import { colors, space } from "@/constants/styles";
import { SignUpForm } from "../components";

const SignUpScreen = () => {
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

      <SignUpForm style={styles.containerInput} />

      <ButtonSecondary
        name="Sign In"
        onPress={() => router.replace("/auth/sign-in")}
      />
    </SafeAreaView>
  );
};

export default SignUpScreen;

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
    marginBottom: space.xl,
  },
});
