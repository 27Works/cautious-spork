import React, { ReactNode, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../../untils/auth";
import AuthContext from "../../contexts/authContext";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    return auth.onIdTokenChanged(async (user) => {
      console.log("user changed", user);
      if (!user) {
        setUser(null);
      } else {
        setUser(user);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
