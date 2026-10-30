import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Stack } from "expo-router";
import { useEffect } from "react";
import "../../global.css";

export default function RootLayout() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID, // Required for backend verification
      // iosClientId: 'YOUR_IOS_CLIENT_ID.apps.googleusercontent.com', // Optional if using GoogleService-Info.plist on iOS
    });
  }, []);
  return <Stack screenOptions={{ headerShown: false }} />;
}
