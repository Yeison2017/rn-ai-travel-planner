import { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
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

const SignIn = () => {
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

        <View style={styles.containerInput}>
          <Input field="Email" />
          <Input field="Password" secureTextEntry={true} />
        </View>

        <View style={styles.containerButtons}>
          <ButtonPrimary name="Sign In" />
          <ButtonSecondary
            name="Create Account"
            onPress={() => router.replace("/auth/sign-up")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

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
  containerInput: {
    gap: space.md,
    marginBottom: space.xxl,
  },
  containerButtons: {
    gap: space.lg,
    marginBottom: space.xxl,
  },
});
