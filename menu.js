import { kalkulator } from "./rumus.js";
import readline from "readline";

const inputUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askForNumber(prompt, callback) {
    inputUser.question(prompt, (input) => {
        const number = Number(input);
        if (isNaN(number)) {
            console.log("Input harus berupa angka. Silakan coba lagi.");
            askForNumber(prompt, callback);
        } else {
            callback(number);
        }
    });
}

askForNumber("Masukkan angka pertama: ", (angka1) => {
    askForNumber("Masukkan angka kedua: ", (angka2) => {
        inputUser.question("Masukkan operator (+, -, *, /): ", (operator) => {
            console.log(`Hasil: ${kalkulator(angka1, angka2, operator)}`);
            inputUser.close();
        });
    });
});







//COOOOOOOOOOOOOOOOOBAAAAA
//TEST COMMIT
