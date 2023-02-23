// Svelte Stores
import { writable } from "svelte/store";

interface User {
  profile?: {
    id?: string;
    address: string;
    handle: string;
    avatar: string;
    bio: string;
  };
}
export const user = writable({} as User);
