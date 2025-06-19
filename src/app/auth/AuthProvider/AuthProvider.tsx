"use client";
import { createContext, useEffect, useState } from "react";
import { GoogleProfile } from "@/types/googleAuthUser";
import { axiosInstance } from "@/hooks/axiosInstance";
interface AuthContextType {
  user: GoogleProfile | null;
  loading: boolean;
  isAuthenticated: boolean;
  refreshUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<GoogleProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get(`/auth/protected`);
      if (res) {
        const data = await res.data;
        setUser(data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("auth error:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        refreshUser: fetchUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
