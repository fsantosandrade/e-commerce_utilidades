import prompt from "prompt"
import qrPrompt from "../../prompts-schema/prompt-schema-qrcode.js"
import handle from "./handle.js"

async function createQrCode() {
    prompt.get(qrPrompt, handle)
    
    prompt.start()
}

export default createQrCode