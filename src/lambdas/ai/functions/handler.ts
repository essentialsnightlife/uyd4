import { OPENAI_MODEL_CONFIG } from "../../../constants";
import { sendAIQuestion } from "./index";
import { promptGenerator } from "./index";

interface Event {
  body: string;
}

export async function analyser(event: Event) {
  const prompt = promptGenerator(event.body);

  if (!event.body) {
    return {
      message: { result: "No question provided" },
      input: event,
    };
  }

  try {
    const completionText = await sendAIQuestion({
      model: OPENAI_MODEL_CONFIG.model,
      prompt: prompt,
      temperature: OPENAI_MODEL_CONFIG.temperature,
      max_tokens: OPENAI_MODEL_CONFIG.max_tokens,
    });

    return {
      body: { result: completionText },
      input: event,
    };
  } catch (err: any) {
    console.log("Error: ", err);

    return {
      body: { error: err.message },
      input: event,
    };
  }
}
