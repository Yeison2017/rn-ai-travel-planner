import { View } from "react-native";
import { Redirect } from "expo-router";

import { auth } from "@/configs/FirebaseConfig";
import { Login } from "@/features/login";

export default function Index() {
  const user = auth.currentUser;
  console.log("user:", JSON.stringify(user, null, 2));
  return <View>{user ? <Redirect href={"/mytrip"} /> : <Login />}</View>;
}
