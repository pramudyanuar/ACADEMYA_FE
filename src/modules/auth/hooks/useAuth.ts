import { useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState<{ username: string } | null>(null);

  const login = (username: string) => {
    // Implementasi login
    setUser({ username });
  };

  return { user, login };
};
