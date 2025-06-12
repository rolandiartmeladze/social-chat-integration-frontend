import { useEffect, useState } from "react";
import axios from "axios";

import { GoogleProfile } from "@/types/googleAuthUser";

export function useAuth() {
  const [user, setUser] = useState<GoogleProfile | null>(null);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/protected`, {
        withCredentials: true,
      })
      .then((res) => setUser(res.data.user))
      .catch(() => setUser(null));
  }, []);

  return { user, isAuthenticated: !!user };
}
