"use client";

import { useAuth } from '@/hooks/useAuth';

export default function AuthCallback() {
    const user = useAuth();
    if (!user) return <p>Loading or not authenticated...</p>;

  return (
    <div>
      <h2>Welcome, {user.displayName}!</h2>
      {user.photos && <img src={user.photos[0]?.value} alt="avatar" />}
    </div>
  );
}
