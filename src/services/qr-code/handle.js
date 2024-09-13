import chalk from "chalk";
import qr from 'qrcode-terminal'

async function handle(err, choose) {
    if(err) {
        console.log(chalk.bgRed("error on application"));
        return
    }    

    const isSamll = choose.type == 2
    
    qr.generate(choose.link, {small: isSamll}, (qrcode) => {
        console.log(chalk.greenBright("Qr Code gerado com sucesso!\n"));
        console.log(qrcode);
    })
}

export default handle