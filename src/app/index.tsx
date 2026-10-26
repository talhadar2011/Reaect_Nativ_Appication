import { useAuth } from "@clerk/expo";
import { useHostedAuth } from "@clerk/expo/hosted-auth";
import { Button, Text, View } from "react-native";

export default function GoogleSignInButton() {
  const { isLoaded, isSignedIn } = useAuth();
  const { startHostedAuth } = useHostedAuth();

  const handleSignIn = async () => {
    try {
      await startHostedAuth({ mode: "sign-in" });
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  };

  if (!isLoaded) return null;

  if (isSignedIn) {
    return <Text>You are signed in!</Text>;
  }
  return (
    <View className="p-8 bg-black flex-y-1 justify-center items-center h-screen">
      <Text className="text-black text-xl mb-4">Sign in with Google</Text>
      <Button title="Continue with Google" onPress={handleSignIn} />
    </View>
  );
}
