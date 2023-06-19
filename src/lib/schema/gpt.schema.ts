import z from 'zod';

export const baseGPTThemeSchema = z.object({
  theme: z.string(),
});