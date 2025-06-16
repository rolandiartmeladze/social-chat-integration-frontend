'use client';

import { useSocket } from '@/hooks/useSocket';

export default function SocketWrapper() {
  useSocket();

  return null;
}
