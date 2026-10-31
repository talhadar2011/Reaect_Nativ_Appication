import {
    GoogleSignin,
    isErrorWithCode,
    isSuccessResponse,
    statusCodes,
    type User,
} from "@react-native-google-signin/google-signin";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Configure once and restore a previous session on app start
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
    });

    (async () => {
      try {
        const response = await GoogleSignin.signInSilently();
        if (isSuccessResponse(response)) setUser(response.data);
      } catch {
        // no saved session, user will see the login screen
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) setUser(response.data);
    } catch (error) {
      if (
        isErrorWithCode(error) &&
        error.code === statusCodes.SIGN_IN_CANCELLED
      ) {
        return;
      }
      throw error;
    }
  };

  const signOut = async () => {
    await GoogleSignin.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
