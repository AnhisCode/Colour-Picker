import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import clientPromise from "~/lib/MongoDB";

export const exampleRouter = createTRPCRouter({
  add: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(async ({ input }) => {
      try {
        const client = await clientPromise;
        const db = client.db('development');
        const colours = db.collection('colours');
        await colours.insertOne({ colour: input.text });
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

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
