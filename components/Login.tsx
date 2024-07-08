import { StyleSheet, Text, View, Image } from "react-native";

import { IMAGES } from "@/constants/images";
import { colors, fontFamily } from "@/constants/styles";

const Login = () => {
  return (
    <View>
      <Image source={IMAGES.login} style={styles.image} resizeMode="cover" />
      <View style={styles.container}>
        <Text style={styles.text}>AI Travel Planner</Text>
        <Text style={styles.paragraph}>AI Travel Planner...</Text>

        <View style={styles.button}>
          <Text style={styles.textButton}>Sign In With Google</Text>
        </View>
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "100%",
    padding: 15,
  },
  text: {
    fontSize: 40,
    fontFamily: fontFamily.primaryBold,
    textAlign: "center",
  },
  paragraph: {
    fontSize: 14,
    textAlign: "center",
    color: colors.gray,
  },
  button: {
    padding: 15,
    backgroundColor: colors.primary,
    borderRadius: 99,
    marginTop: "25%",
  },
  textButton: {
    color: colors.white,
    textAlign: "center",
    fontSize: 18,
  },
});
