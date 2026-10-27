import { StyleSheet, View } from "react-native";
import { Heading, Subheading } from "./components/Textcomponent";

export default function Index() {
  return (
    <View className="h-screen bg-primary">
      <Heading>Welcome to Easy Agent Native!</Heading>

      <Subheading>Welcome to Nativewind!</Subheading>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
