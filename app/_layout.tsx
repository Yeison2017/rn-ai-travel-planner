import { ActivityIndicator, Text } from "react-native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

import { FONTS } from "@/constants/styles";

export default function RootLayout() {
  useFonts(FONTS);
  const [fontsLoaded] = useFonts(FONTS);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
