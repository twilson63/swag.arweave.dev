import { z } from "zod";

const StampSchema = z.object({
  asset: z.string().min(43).max(43),
  address: z.string().min(43).max(43),
  timestamp: z.number()
});

const PlayerSchema = z.object({
  id: z.string().min(43).max(43).optional(),
  handle: z.string().max(20),
  address: z.string().min(43).max(43),
  avatar: z.string().min(43).max(43),
  bio: z.string().max(250),
  collected: z.array(StampSchema).optional(),
  given: z.array(StampSchema).optional()
});

export function validate(data) {
  const result = PlayerSchema.safeParse(data);
  return result.success ? Promise.resolve(result.data) : Promise.reject(result.error);
}
