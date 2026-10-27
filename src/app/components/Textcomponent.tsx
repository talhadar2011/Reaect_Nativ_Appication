import type { ReactNode } from "react";
import { Text } from "react-native";

export function Heading({ children }: { children: ReactNode }) {
  return <Text className="text-2xl font-bold text-white">{children}</Text>;
}

export function Subheading({ children }: { children: ReactNode }) {
  return <Text className="mt-1 text-md text-white">{children}</Text>;
}
