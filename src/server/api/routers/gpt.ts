import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";
import { baseGPTThemeSchema } from "~/lib/schema/gpt.schema";
import axios, { type AxiosResponse } from "axios";

interface ChatCompletionResponse {
  choices: Completion[];
}
interface Completion {
  message: {
    content: string;
  };
}
async function sendChatMessage(message: string): Promise<string[] | undefined> {

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
      // turn into list
      const lines = returnMessage.split("\n")
      const words = []
      for (const line of lines) {
        words.push(...line.split(" "))
      }
      const colours = []
      for (const word of words) {
        if (word.startsWith("#")) {
          colours.push(word)
        }
      }
      return colours
    }
  } catch (error) {
    console.log(error)
  }

  return undefined;
}

export const gptRouter = createTRPCRouter({
    getColours: publicProcedure.input(baseGPTThemeSchema).mutation(async ({input}) => {
      const theme = input.theme
      const prompt = `generate a set of complementary ${theme} colours: 1 
      primary, 1 secondary, and 3 accent colours in hex for my website as 
      a colour palate, The accent colour shouldn't be too different 
      from the primary or secondary colour, and should be a gradient of either or. 
      The Primary and secondary colour should be contrasting enough to be distinguishable. 
      skip the context and explanation`
      let colours = await sendChatMessage(prompt)
      if (colours === undefined) {
        colours = ["#FFFFFF", "#000000", "#000000", "#000000", "#000000"]
      }
      return {
        primaryColour: colours[0],
        secondaryColour: colours[1],
        accentColour1: colours[2],
        accentColour2: colours[3],
        accentColour3: colours[4],
      };
    })
  }
);
