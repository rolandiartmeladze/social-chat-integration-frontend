"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';

interface GoogleProfile {
  id: string;
  displayName: string;
  emails?: { value: string }[];
  photos?: { value: string }[];
  provider: string;
}

export default function AuthCallback() {
  const [user, setUser] = useState<GoogleProfile | null>(null);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/protected`, {
        withCredentials: true,
      })
      .then(response => {
        setUser(response.data.user);
      })
      .catch(err => {
        console.error('Not authenticated', err);
      });
  }, []);

  if (!user) return <p>Loading or not authenticated...</p>;

  return (
    <div>
      <h2>Welcome, {user.displayName}!</h2>
      {user.photos && <img src={user.photos[0]?.value} alt="avatar" />}
    </div>
  );
}
