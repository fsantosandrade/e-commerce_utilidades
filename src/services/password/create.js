import chalk from "chalk";
import handle from "./handle.js";
import passwordPrompt from "../../prompts-schema/prompt-schema-password.js";
import prompt from "prompt";

async function createPassword() {
    prompt.get(passwordPrompt, handle)
    
    prompt.start()
}

export default createPassword