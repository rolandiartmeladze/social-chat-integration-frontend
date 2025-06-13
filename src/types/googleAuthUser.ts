export type GoogleProfile = {
  id: string;
  displayName?: string; // ← optional
  name?: {
    givenName?: string;
    familyName?: string;
  };
  _json?: {
    name?: string;
    picture?: string;
    email?: string;
  };
  photos?: { value: string }[];
  emails?: { value: string }[];
  provider: string;
};
