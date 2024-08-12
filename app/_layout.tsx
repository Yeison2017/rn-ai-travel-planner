import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

import { FONTS } from "@/constants/styles";
import { configureDependencies } from "@/configs/dependencyInjection";

configureDependencies();

export default function RootLayout() {
  useFonts(FONTS);
  const [fontsLoaded] = useFonts(FONTS);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
