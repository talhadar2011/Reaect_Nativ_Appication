import { TextInput } from "react-native";

export function SearchBar({ placeholder }: { placeholder: string }) {
  return (
    <TextInput
      className="text-md font-bold text-white  border border-white rounded-full  px-4 m-4"

      placeholder={placeholder}
      placeholderTextColor="#9ca3af"
    />
  );
}
