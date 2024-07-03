import { z } from 'zod'

export const verifySchema = z.object({
  identifier: z.string(),
  code: z.string(),
});
