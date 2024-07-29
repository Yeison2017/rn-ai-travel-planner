import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import Icon from "../Icon";

const ButtonBack = () => {
  const router = useRouter();

  return (
    <Icon
      name="arrow-back"
      onPress={() => router.back()}
      size={24}
      color="black"
    />
  );
};

export default ButtonBack;

const styles = StyleSheet.create({});
