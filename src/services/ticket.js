import database from "./database";
import dateFormat from "../utils/dateFormat";

export const newTicket = async (plate) => {
    const entrance = new Date();
    const id = await database.lastTicketId();
    const code = generateTicketCode(entrance);
    let ticket;

    if(id == 0){
        ticket = await database.insertTicket(code, entrance, plate, true);
    }
    else{
        ticket = await database.insertTicket(code, entrance, plate, false);
    }

    // ToDo: Implement method to thermal printer

    console.log(`
        Código: ${code}\n
        Entrada: ${entrance.toLocaleString('pt-BR')}\n
        Placa: ${plate}
    `);

    console.log(ticket);
}

const generateTicketCode = (date) => {
    // O Código do ticket é composto pela data + um número aleatorio de 6 digitos. Sendo assim: YYYYmmmDDHHMMSS + 000000.
    const randomNumber = Math.floor(Math.random() * 1000000);
    const formattedNumber = randomNumber.toString().padStart(6, '0');
    const formattedDate = dateFormat.dateToYYYYmmDDHHMMSS(date);

    return formattedDate + formattedNumber;
}