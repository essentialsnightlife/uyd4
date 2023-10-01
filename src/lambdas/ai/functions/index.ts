import { OpenAIApi } from "openai";

import { BOT_INSTRUCTIONS } from "../../../constants";
import { config } from "../config";

type AIQuestion = {
  model: string;
  prompt: string;
  temperature: number;
  max_tokens: number;
};

const botInstructions: string = BOT_INSTRUCTIONS;

export const promptGenerator = (question: string) => {
  return botInstructions + question;
};

export const sendAIQuestion = async ({ model, prompt, temperature, max_tokens }: AIQuestion) => {
  const openai = new OpenAIApi(config);
  const completion = await openai.createCompletion({
    model: model,
    prompt: prompt,
    temperature: temperature,
    max_tokens: max_tokens,
  });

  return completion.data.choices[0].text;
};
