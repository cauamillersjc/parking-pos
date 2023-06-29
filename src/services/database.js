import * as SQLite from 'expo-sqlite';

const openDatabase = () => {
    return SQLite.openDatabase('parking_pos.db');
};

const executeQuery = (db, query, params = []) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                query,
                params,
                (_, result) => {
                    resolve(result);
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });
};

const createTable = async (tableName, columns) => {
    const db = openDatabase();

    const query = `CREATE TABLE IF NOT EXISTS ${tableName} (${columns})`;

    try {
        await executeQuery(db, query);
        console.log(`Tabela ${tableName} criada com sucesso.`);
    } catch (error) {
        console.error(`Erro ao criar tabela ${tableName}:`, error);
    }
};

const insertRecord = async (tableName, values) => {
    const db = openDatabase();

    const query = `INSERT INTO ${tableName} VALUES (${values.map(() => '?').join(',')})`;

    try {
        const result = await executeQuery(db, query, values);
        console.log(`Registro inserido com sucesso. ID: ${result.insertId}`);
    } catch (error) {
        console.error('Erro ao inserir registro:', error);
    }
};

const selectRecords = async (tableName) => {
    const db = openDatabase();

    const query = `SELECT * FROM ${tableName}`;

    try {
        const result = await executeQuery(db, query);
        const records = result.rows.raw();
        console.log(`Registros encontrados em ${tableName}:`, records);
    } catch (error) {
        console.error(`Erro ao selecionar registros de ${tableName}:`, error);
    }
};

const createDatabase = async () => {
    const db = openDatabase();

    let query = `
        CREATE TABLE IF NOT EXISTS [tickets] (
            [id] int PRIMARY KEY,
            [entrance] datetime,
            [exit] datetime,
            [permanence] int,
            [plate] nvarchar(255),
            [status] int
        );
    `;

    try {
        await executeQuery(db, query);
        console.log('Tabela "tickets" criada com sucesso ou já existente.');
    } catch (error) {
        console.error('Erro ao criar a tabela "tickets":', error);
    }

    query = `
        CREATE TABLE IF NOT EXISTS [users] (
            [id] int PRIMARY KEY,
            [email] nvarchar(255),
            [password] nvarchar(255),
            [name] nvarchar(255)
        );
    `;

    try {
        await executeQuery(db, query);
        console.log('Tabela "users" criada com sucesso ou já existente.');
    } catch (error) {
        console.error('Erro ao criar a tabela "users":', error);
    }

    query = `
        INSERT INTO users (email, password, name)
        SELECT 'admin@email.com', 'q1w2e3r4', 'Administrador'
        WHERE NOT EXISTS (
            SELECT 1 FROM users WHERE email LIKE 'admin@email.com'
        );
    `;

    try {
        await executeQuery(db, query);
        console.log('Usuario padrão criado com sucesso ou já existente.');
    } catch (error) {
        console.error('Erro ao criar usuario padrão: ', error);
    }
};

const selectUser = async (email, password) => {
    const db = openDatabase();

    const query = `SELECT id, email, name FROM users WHERE email = ? AND password = ?`;

    const params = [email, password]

    try {
        const result = await executeQuery(db, query, params);
        if(result.rows.length > 0)
            return result.rows._array[0]
    } catch (error) {
        console.error(`Erro ao selecionar registros de ${email}:`, error);
    }
}

export default {
    createTable,
    insertRecord,
    selectRecords,
    createDatabase,
    selectUser,
};