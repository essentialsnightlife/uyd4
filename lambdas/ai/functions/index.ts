import { OpenAI } from "openai";

import { BOT_INSTRUCTIONS } from "../../../src/constants";

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
  const openai = new OpenAI();
  const completion = await openai.completions.create({
    prompt: prompt,
    max_tokens: max_tokens,
    temperature: temperature,
    model: model,
  });

  return completion.choices[0];
};
