import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";
import clientPromise from "~/lib/MongoDB";
import { addColourPaletteSchema } from "~/lib/schema/color.schema";

export const colourRouter = createTRPCRouter({
  addColourPalette: publicProcedure
    .input(addColourPaletteSchema)
    .mutation(async ({ input }) => {
      try {
        const client = await clientPromise;
        const db = client.db('development');
        const colours = db.collection('palette');
        await colours.insertOne(input);
        return {
          status: `success`,
        }
      } catch (error) {
        console.log(error);
        return {
          status: `error`,
        }
      }
    }),
});
