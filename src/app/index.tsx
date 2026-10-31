import { Button, Image, Text, View } from "react-native";
import { useAuth } from "../app/context/AuthContext";

export default function Home() {
  const { user, signOut } = useAuth();

  return (
    <View className="flex-1 justify-center items-center">
      <Image
        source={{ uri: user?.user.photo ?? undefined }}
        alt="User profile"
        className="w-24 h-24 rounded-full mb-4"
      />
      <Text>Hello {user?.user.name}</Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
}
