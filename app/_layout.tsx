import { useFonts } from "expo-font";
import { Stack } from "expo-router";

import { FONTS } from "@/constants/styles";

export default function RootLayout() {
  useFonts(FONTS);

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
