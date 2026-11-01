import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "../../app/components/SearchBar";
import { useAuth } from "../../app/context/AuthContext";

export default function Home() {
  const { user, signOut } = useAuth();

  return (
    <SafeAreaView className="flex-1 bg-primary">
      {/* Header: search bar */}
      <View className="px-4 pt-2 pb-3">
        <SearchBar placeholder="Search" />
      </View>

      {/* Body: profile card */}
      <View className="flex-1 ">
        <View className="flex-row items-center bg-white rounded-2xl p-4 shadow-sm">
          <Image
            source={{ uri: user?.user.photo ?? undefined }}
            alt="User profile"
            className="w-16 h-16 rounded-full mr-4"
          />

          <View className="flex-1">
            <Text className="text-xs text-gray-500">Welcome back</Text>
            <Text className="text-lg font-semibold" numberOfLines={1}>
              {user?.user.name}
            </Text>
          </View>
        </View>
      </View>
      {/* Footer: sign out */}
      <View className="px-4 pb-4">
        <Pressable
          onPress={signOut}
          className="bg-red-500 rounded-xl py-3 items-center"
        >
          <Text className="text-white font-semibold">Sign out</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
