import { StyleSheet, View, Image } from "react-native";
import { useRouter } from "expo-router";
import { CohereClient } from "cohere-ai";

import { IMAGES } from "@/constants/images";
import { borderRadius, colors, space } from "@/constants/styles";
import { ButtonPrimary, Paragraph, Title } from "@/components";
import { useEffect } from "react";

const cohere = new CohereClient({
  token: "HNfP0TndCE2v0fvx2P8ZxxLFTEgPLc9gAxvkNP2M",
});

const Login = () => {
  const router = useRouter();

  const generateChat = async () => {
    const chat = await cohere.chat({
      model: "command",
      message:
        "Genera una conversación corta en ingles de dos personas. La conversación debe ser facil para aprender y entender. Debe ser corta, no más de 100 palabras. Para estudiantes de nivel A1",
    });

    console.log(chat);
  };

  // useEffect(() => {
  //   (async () => {
  //     const chat = await cohere.chat({
  //       model: "command",
  //       // message: "Tell me a story in 5 parts!",
  //       message:
  //         "Genera una conversación corta en ingles de dos personas. Facil para aprender y entender.",
  //     });

  //     console.log(chat);
  //   })();
  // }, []);

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
          // onPress={() => generateChat()}
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
