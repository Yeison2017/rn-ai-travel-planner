import { StyleSheet, View, Image } from "react-native";
import { useRouter } from "expo-router";

import { IMAGES } from "@/constants/images";
import { borderRadius, colors, space } from "@/constants/styles";
import { ButtonPrimary, Paragraph, Title } from "@/components";

const Login = () => {
  const router = useRouter();

  return (
    <View>
      <Image source={IMAGES.login} style={styles.image} resizeMode="cover" />
      <View style={styles.container}>
        <Title name="AI Travel Planner" style={styles.title} />
        <Paragraph
          text="Discover your next adventure effortlessly. Personalized itineraries at
          your fingertips. Travel smarter with AI-driver insights"
          style={styles.paragraph}
        />
        <ButtonPrimary
          onPress={() => router.push("/auth/sign-in")}
          name="Get Started"
          style={styles.buttonPrimary}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 450,
  },
  container: {
    backgroundColor: colors.white,
    marginTop: -20,
    borderTopLeftRadius: borderRadius.xl,
    borderTopRightRadius: borderRadius.xl,
    height: "100%",
    padding: space.lg,
  },
  title: {
    marginVertical: space.lg,
    textAlign: "center",
  },
  paragraph: {
    textAlign: "center",
  },
  buttonPrimary: {
    marginTop: "25%",
  },
});
