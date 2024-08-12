import { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useNavigation, useRouter } from "expo-router";

import { ButtonBack, ButtonSecondary, SafeAreaView, Title } from "@/components";
import { colors, space } from "@/constants/styles";
import { SignInForm } from "../components";

const SignInScreen = () => {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ButtonBack />
        <View style={styles.containerTitles}>
          <Title name="Let's Sign You In" />
          <Title name="Welcome Back" isBold={false} />
          <Title name="You've been missed" isBold={false} />
        </View>

        <SignInForm style={styles.signInForm} />

        <ButtonSecondary
          name="Create Account"
          onPress={() => router.replace("/auth/sign-up")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: space.xl,
    backgroundColor: colors.white,
  },
  containerTitles: {
    gap: space.xl,
    marginBottom: space.xl,
    marginTop: space.md,
  },
  signInForm: {
    marginBottom: space.lg,
  },
});
