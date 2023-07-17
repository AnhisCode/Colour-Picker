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
  getColourPalette: protectedProcedure
    .query(async ({ ctx }) => {
      try {
        const client = await clientPromise;
        const db = client.db('development');
        const colours = db.collection('palette');

        const palettes = await colours.find({ userEmail: ctx.session.user.email })
          .sort({ uploadDate: -1 }).toArray();

        const res = palettes.map((palette) => {
          const { _id, userEmail, ...rest } = palette;
          return rest
        })

        return {
          palettes: res,
        }
      } catch (error) {
        console.log(error);
        return {
          status: `error`,
        }
      }
    }),
});
