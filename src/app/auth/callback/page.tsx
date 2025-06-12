"use client";

import { useAuth } from '@/hooks/useAuth';
export default function AuthCallback() {
const auth = useAuth();
if (!auth.user) return <p>Loading or not authenticated...</p>;
 
return (
    <div>
      <h2>Welcome, {auth.user.displayName}!</h2>
      {auth.user.photos && <img src={auth.user.photos[0]?.value} alt="avatar" />}
    </div>
  );
}
