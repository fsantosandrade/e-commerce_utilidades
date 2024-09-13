import prompt from "prompt"
import mainPrompt from "./prompts-schema/prompt-schema-main.js"
import createQrCode from "./services/qr-code/create.js"
import createPassword from "./services/password/create.js"
import chalk from "chalk"

(function main() {
    prompt.get(mainPrompt, async (err, choose) => {
        if(err) console.log(chalk.bgRedBright(err));

        if(choose.select == 1) await createQrCode()
        else if(choose.select == 2) await createPassword();
    })

    prompt.start()
})()