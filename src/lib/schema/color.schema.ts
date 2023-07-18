import z from 'zod';

export const addColourPaletteSchema = z.object({
  themeName: z.string().optional(),
  primaryColour: z.string(),
  secondaryColour: z.string(),
  accentColour1: z.string(),
  accentColour2: z.string(),
  accentColour3: z.string(),
  override: z.boolean().optional(),
});