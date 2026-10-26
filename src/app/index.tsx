import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Easy Agent Native!
        Mobile testing?
      </Text>
       <Link href={"/about"} style={{ marginTop: 20 }}>
        Go to About
      </Link> 
      <Text className="text-lg font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
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
