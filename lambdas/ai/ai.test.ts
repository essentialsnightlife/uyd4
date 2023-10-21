import { BOT_INSTRUCTIONS } from "../../src/constants";
import { promptGenerator } from "./functions";

const botInstructions: string = BOT_INSTRUCTIONS;

test("prompt generator adds question to bot instructions", () => {
  expect(promptGenerator("with test question")).toBe(botInstructions + "with test question");
});
