import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure
} from "~/server/api/trpc";
import { baseGPTThemeSchema } from "~/lib/schema/gpt.schema";
import axios, { AxiosResponse } from "axios";

interface ChatCompletionResponse {
  choices: Completion[];
}
interface Completion {
  message: {
    content: string;
  };
}
async function sendChatMessage(message: string): Promise<string | undefined> {

  const apiKey = process.env.OPENAI_API_KEY || "";


  try {
    const response: AxiosResponse<ChatCompletionResponse> = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: message }
      ]
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });

    const completions = response.data.choices;
    if (completions && completions.length > 0) {
      const returnMessage = completions[0]?.message.content || ""
      console.log(returnMessage)
      return returnMessage
    }
  } catch (error) {

  }

  return undefined;
}

export const gptRouter = createTRPCRouter({
    getColours: publicProcedure.input(baseGPTThemeSchema).mutation(async ({input}) => {
      const message = await sendChatMessage(input.theme)
      return {
        greeting: message,
      };
    })
  }
);
