import { Alert, Platform, StyleSheet, ToastAndroid, View } from "react-native";
import GoogleSignInButton from "./components/SigninButton";
import { Heading, Subheading } from "./components/Textcomponent";

export default function Index() {
  const handleGoogleSignIn = () => {
    if (Platform.OS === "android") {
      ToastAndroid.show("Sign in button pressed", ToastAndroid.SHORT);
    } else if (Platform.OS === "web") {
      alert("Start web Google sign-in here");
    } else {
      Alert.alert("Google sign-in", "Button pressed");
    }
  };
  return (
    <View className="h-screen flex bg-primary justify-center items-center">
      <Heading>Welcome to Easy_Agent </Heading>
      <Subheading>Sign in with Google</Subheading>
      <GoogleSignInButton onPress={handleGoogleSignIn} />
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
