import { Alert, View } from "react-native";
import { useAuth } from "../app/context/AuthContext";
import GoogleSignInButton from "./components/SigninButton";
import { Heading, Subheading } from "./components/Textcomponent";

export default function Login() {
  const { signIn } = useAuth();

  const handleSignIn = async () => {
    try {
      await signIn();
    } catch (e: any) {
      Alert.alert("Sign-in failed", e?.message ?? "Unknown error");
    }
  };

  return (
    <View className="h-screen flex bg-primary justify-center items-center">
      <Heading>Welcome to Easy_Agent</Heading>
      <Subheading>Sign in with Google</Subheading>
      <GoogleSignInButton onPress={handleSignIn} />
    </View>
  );
}
