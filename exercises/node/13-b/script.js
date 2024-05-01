import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
    .command({
        command: "saludar",
        describe: "Ejemplo para saludar a una persona",
        builder: {
            nombre: {
                describe: "Parámetro para leer el nombre de la persona",
                type: "string",
                alias: "n"
            }
        },
        handler({ nombre }) {
            console.log("hola! " + nombre)
        }
    })
    .help()
    .parse()

// ejecutar: node script.js saludar --nombre="nombre de la persona"
// ejecutar: node script.js saludar -n="nombre de la persona"

const args = yargs(process.argv.slice(2)).argv;
console.log(args)