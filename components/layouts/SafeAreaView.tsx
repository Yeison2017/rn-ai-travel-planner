import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const SafeAreaView = ({ children, style }: Props) => {
  const insets = useSafeAreaInsets();

  return <View style={[{ marginTop: insets.top }, style]}>{children}</View>;
};

export default SafeAreaView;

const styles = StyleSheet.create({});
