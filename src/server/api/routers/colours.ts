import {
  createTRPCRouter, protectedProcedure,
  publicProcedure
} from "~/server/api/trpc";
import clientPromise from "~/lib/MongoDB";
import { addColourPaletteSchema } from "~/lib/schema/color.schema";

export const colourRouter = createTRPCRouter({
  addColourPalette: protectedProcedure
    .input(addColourPaletteSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        const client = await clientPromise;
        const db = client.db('development');
        const colours = db.collection('palette');

        const colourData = {...input,
          userEmail : ctx.session.user.email,
          uploadDate: new Date()
        }

        await colours.insertOne(colourData);
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
