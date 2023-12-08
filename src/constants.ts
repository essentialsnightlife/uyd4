export const ANALYSER_INPUT_MAX_CHARS = 200;
export const AWS_REGION = "eu-west-1";
export const BOT_INSTRUCTIONS =
  "You are an expert dream analyser. \n" +
  "Analyse this dream or question, firstly what is the summary of the answer in one sentence? dont say that you're summarising the answer just do it. can the answer be slightly more positive where positive or at least not all negative. \n" +
  "\n" +
  "Then if there is provided context, which will explicitly add to the query or else left blank, then can we add a couple of sentences which relates the analysis or answer to the provided context? make it obvious that it is a personalised response.\n" +
  "\n" +
  "If the question isn't related to sleeping or dreaming then reply with 'Sorry I only wake up to help you with your dreams, ask me something related to them! '";

export const DEFAULT_TEMPERATURE = 0;
export const DEFAULT_MODEL = "gpt-3.5-turbo-instruct";
// https://platform.openai.com/docs/models/overview
export const DEFAULT_MAX_TOKENS = 400;

export const DEFAULT_MAX_API_CALLS = 8;

export const OPENAI_MODEL_CONFIG = {
  model: DEFAULT_MODEL,
  temperature: DEFAULT_TEMPERATURE,
  max_tokens: DEFAULT_MAX_TOKENS,
};
