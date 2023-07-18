import {
  createTRPCRouter, protectedProcedure,
  publicProcedure
} from "~/server/api/trpc";
import clientPromise from "~/lib/MongoDB";
import { addColourPaletteSchema } from "~/lib/schema/color.schema";
import { z } from "zod";

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

        if (!input.override) {
          const palettes = await colours.find({
            userEmail: ctx.session.user.email,
            themeName: input.themeName
          }).toArray();
          if (palettes.length > 0) {
            return {
              status: "Theme already exists"
            }
          }
        } else if (input.override) {
          await colours.deleteMany({
            userEmail: ctx.session.user.email,
            themeName: input.themeName
          });
          await colours.insertOne(colourData);
          return {
            status: `success`,
          }
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
  doesThemeExist: protectedProcedure.input(z.object({
    themeName: z.string()
  })).mutation(async ({ input, ctx }) => {
    try {
      const client = await clientPromise;
      const db = client.db('development');
      const colours = db.collection('palette');

      const theme = await colours.findOne({ userEmail: ctx.session.user.email, themeName: input.themeName });

      return {
        themeExists: theme ? true : false,
      }
    } catch (error) {
      console.log(error);
      return {
        status: `error`,
      }
    }
  }),
});
