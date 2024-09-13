import chalk from "chalk"

const mainPrompt = [
    {
        name: "select",
        description: chalk.yellowBright("Escolha a ferramenta (1 - QrCode ou 2 - Password)"),
        pattern: /^[1-2]+$/,
        message: chalk.bgRed("Escolha apenas entre 1 e 2!"),
        required: true
    }
]

export default mainPrompt