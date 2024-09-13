import chalk from 'chalk';
import permittedCharacteres from './utils/permittedCharacteres.js'

async function handle(err, result) {
    if(err) console.log(chalk.bgRed(err));
    
    if(result.upper_case === "S" | result.upper_case === "s") process.env.UPPERCASE_LETTERS = "true"
    if(result.lower_case === "S" | result.lower_case === "s") process.env.LOWERCASE_LETTERS = "true"
    if(result.numbers === "S" | result.numbers === "s") process.env.NUMBERS = "true"
    if(result.special_case === "S" | result.special_case === "s") process.env.SPECIAL_CHARACTERS = "true"
    
    process.env.PASSWORD_LENGTH = result.password_length

    let characteres = []
    let password = ""

    const passwordLength = process.env.PASSWORD_LENGTH
    characteres = await permittedCharacteres()

    for(let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characteres.length)
        password += characteres[index]
    }

    console.log(password);
}

export default handle