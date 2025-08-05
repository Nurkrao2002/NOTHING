"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { MockUser } from "@/lib/mock-users";

type AuthContextType = {
  user: MockUser | null;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<MockUser | null>(() => {
    console.log("AuthProvider: Initializing user state from sessionStorage.");
    if (typeof window !== 'undefined') {
        const userFromSession = sessionStorage.getItem("user");
        if (userFromSession) {
            console.log("AuthProvider: Found user in sessionStorage.", JSON.parse(userFromSession));
            return JSON.parse(userFromSession);
        }
    }
    console.log("AuthProvider: No user found in sessionStorage.");
    return null;
  });

  return (
    <AuthContext.Provider value={{ user }}>
      {console.log("AuthProvider: Rendering with user:", user)}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
