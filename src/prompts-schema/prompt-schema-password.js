import chalk from "chalk"

const passwordPrompt = [
    {
        name: "upper_case",
        description: chalk.yellowBright("Deseja caracteres maiúsculos na senha? (S/N)"),
        pattern: /^(S|s|N|n)$/,
        message: chalk.bgRed("Digite S para sim ou N para não!"),
        required: true
    },
    {
        name: "lower_case",
        description: chalk.yellowBright("Deseja caracteres minúsculos na senha? (S/N)"),
        pattern: /^(S|s|N|n)$/,
        message: chalk.bgRed("Digite S para sim ou N para não!"),
        required: true
    },
    {
        name: "numbers",
        description: chalk.yellowBright("Deseja caracteres números na senha? (S/N)"),
        pattern: /^(S|s|N|n)$/,
        message: chalk.bgRed("Digite S para sim ou N para não!"),
        required: true
    },
    {
        name: "special_case",
        description: chalk.yellowBright("Deseja caracteres especiais na senha? (S/N)"),
        pattern: /^(S|s|N|n)$/,
        message: chalk.bgRed("Digite S para sim ou N para não!"),
        required: true
    },
    {
        name: "password_length",
        description: chalk.yellowBright("Quantos caracteres deseja na senha? (Min 5 e Max 15)"),
        pattern: /^(5|6|7|8|9|10|11|12|13|14|15)$/,
        message: chalk.bgRed("Digite um número entre 5 e 15!"),
        required: true
    }
]

export default passwordPrompt