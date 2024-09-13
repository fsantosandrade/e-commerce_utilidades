import chalk from "chalk"

const qrPrompt = [
    {
        name: "link",
        description: chalk.yellowBright("Digite o link para gerar o Qr Code")
    },
    {
        name: "type",
        description: chalk.yellowBright("Escolha o tipo de Qr Code (1 - normal ou 2 - terminal)"),
        pattern: /^[1-2]+$/,
        message: chalk.bgRed("Escolha apenas 1 ou 2!"),
        required: true
    }
]

export default qrPrompt