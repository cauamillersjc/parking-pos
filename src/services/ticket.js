

export const newTicket = (plate) => {
    let entrance = new Date();
    // ToDo Add Method to Create Data in SQLite 
    console.log(`
        Entrada: ${entrance.toLocaleString('pt-BR')}\n
        Placa: ${plate}
    `);
}