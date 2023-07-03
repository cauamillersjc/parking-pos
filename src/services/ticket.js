import database from "./database";
import dateFormat from "../utils/dateFormat";
import moment from "moment";
import Toast from 'react-native-toast-message';

export const newTicket = async (plate) => {
    const entrance = moment();
    const id = await database.lastTicketId();
    const code = generateTicketCode(entrance);
    let ticket;

    if (id == 0) {
        ticket = await database.insertTicket(code, entrance.format('YYYY-MM-DD HH:mm:ss'), plate, true);
    }
    else {
        ticket = await database.insertTicket(code, entrance.format('YYYY-MM-DD HH:mm:ss'), plate, false);
    }

    // ToDo: Implement method to thermal printer

    console.log(`
        Código: ${code}\n
        Entrada: ${entrance.format('DD/MM/YYYY HH:mm:ss')}\n
        Placa: ${plate}
    `);

    console.log(ticket);
}

export const scanTicket = async (code) => {
    const ticket = await database.getTicketByCode(code);

    if(ticket){
        const entrance = moment(ticket.entrance);
        const exit = moment();
        const permanence = dateFormat.dateDiffInSeconds(entrance, exit);

        ticket.exit = moment().format('YYYY-MM-DD HH:mm:ss');
        ticket.permanence = permanence;

        return ticket;
    }
    else{
        Toast.show({
            type: 'error',
            text1: 'Ticket não encontrado!',
        });
        return null;
    }
}

export const finalizeTicket = async (ticket) => {
    if (ticket) {
        const entrance = moment(ticket.entrance);
        const exit = moment(ticket.exit);
        const permanence = dateFormat.dateDiffInSeconds(entrance, exit);
        const updatedTicket = await database.finalizeTicket(ticket.code, ticket.exit.format('YYYY-MM-DD HH:mm:ss'), permanence);

        console.log(updatedTicket);

        // ToDo: Implement method to thermal printer

        console.log(`
            Código: ${ticket.code}\n
            Entrada: ${entrance.format("DD/MM/YYYY HH:mm:ss")}\n
            Saída: ${exit.format("DD/MM/YYYY HH:mm:ss")}\n
            Permanência: ${dateFormat.formatSecondsToHMS(permanence)}\n
            Placa: ${ticket.plate}
        `);
    }
}

const generateTicketCode = (date) => {
    // O Código do ticket é composto pela data + um número aleatorio de 6 digitos. Sendo assim: YYYYmmmDDHHMMSS + 000000.
    const randomNumber = Math.floor(Math.random() * 1000000);
    const formattedNumber = randomNumber.toString().padStart(6, '0');
    const formattedDate = date.format("YYYYMMDDHHmmss");

    return formattedDate + formattedNumber;
}