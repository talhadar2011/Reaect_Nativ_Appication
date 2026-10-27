import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { Platform, Pressable, Text, View } from "react-native";

type Props = {
  onPress: () => void;
};

export default function GoogleSignInButton({ onPress }: Props) {
  if (Platform.OS === "web") {
    return (
      <Pressable
        onPress={onPress}
        className="mt-4 w-full flex-row items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-3"
      >
        <Text className="font-semibold text-gray-800">
          Continue with Google
        </Text>
      </Pressable>
    );
  }

  return (
    <View className="mt-4 ">
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={onPress}
      />
    </View>
  );
}
