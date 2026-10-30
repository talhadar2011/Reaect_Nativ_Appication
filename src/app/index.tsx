import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { Alert, StyleSheet, View } from "react-native";
import GoogleSignInButton from "./components/SigninButton";
import { Heading, Subheading } from "./components/Textcomponent";

export default function Index() {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();

      if (isSuccessResponse(response)) {
        // Successfully logged in! Access token/user info is in response.data
        // console.log("Google User Info:", response.data);
        Alert.alert(
          "Success",
          `Sign in successful! Welcome ${response.data.user.name || "User"}`,
        );
      } else {
        // Sign-in was cancelled or returned an unexpected non-success response
        Alert.alert("Cancelled", "Sign in was cancelled by user.");
      }
    } catch (error: any) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            Alert.alert("Notice", "Sign in operation already in progress.");
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            Alert.alert(
              "Error",
              "Google Play Services not available or outdated.",
            );
            break;
          case statusCodes.SIGN_IN_CANCELLED:
            Alert.alert("Cancelled", "Sign in was cancelled.");
            break;
          default:
            Alert.alert(
              "Google Sign-In Error",
              error.message || "An unknown error occurred.",
            );
        }
      } else {
        // Non-Google related error
        Alert.alert(
          "Error",
          error?.message || "Something went wrong during sign-in.",
        );
      }
    }
  };

  return (
    <View className="h-screen flex bg-primary justify-center items-center">
      <Heading>Welcome to Easy_Agent</Heading>
      <Subheading>Sign in with Google</Subheading>
      <GoogleSignInButton onPress={signIn} />
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
