import * as SQLite from 'expo-sqlite';
import dateFormat from '../utils/dateFormat';

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

const createDatabase = async () => {
    const db = openDatabase();

    const tableQueries = [
        `CREATE TABLE IF NOT EXISTS [tickets] (
            [id] INTEGER PRIMARY KEY AUTOINCREMENT,
            [code] nvarchar(255),
            [entrance] datetime,
            [exit] datetime,
            [permanence] int,
            [plate] nvarchar(255),
            [status] int
        );`,
          `CREATE TABLE IF NOT EXISTS [users] (
            [id] INTEGER PRIMARY KEY AUTOINCREMENT,
            [email] nvarchar(255),
            [password] nvarchar(255),
            [name] nvarchar(255)
        );`
    ];

    const userQuery = `
      INSERT INTO users (id, email, password, name)
      SELECT 1, ?, ?, ?
      WHERE NOT EXISTS (
          SELECT 1 FROM users WHERE email = ? AND id = 1
      );
    `;
    const userQueryParams = ['admin@email.com', 'q1w2e3r4', 'Administrador', 'admin@email.com'];

    try {
        // Criar tabelas
        for (const query of tableQueries) {
            await executeQuery(db, query);
        }
        console.log('Tabelas "tickets" e "users" criadas com sucesso ou já existentes.');

        // Inserir usuário padrão caso não exista
        await executeQuery(db, userQuery, userQueryParams);
        console.log('Usuário padrão criado com sucesso ou já existente.');
    } catch (error) {
        console.error('Erro ao criar tabelas ou inserir usuário padrão:', error);
    }
};


const selectUser = async (email, password) => {
    const db = openDatabase();

    const query = `SELECT id, email, name FROM users WHERE email = ? AND password = ? LIMIT 1`;

    const params = [email, password]

    try {
        const result = await executeQuery(db, query, params);
        if (result.rows.length > 0)
            return result.rows.item(0)
    } catch (error) {
        console.error(`Erro ao selecionar registros de ${email}:`, error);
    }
}

const insertTicket = async (code, entrance, plate, isFirst) => {
    const db = openDatabase();
    let query = '';

    if (isFirst) {
        query = `
            INSERT INTO tickets (id, code, entrance, plate, status)
            VALUES (1, ?, ?, ?, 0);
        `;
    }
    else {
        query = `
            INSERT INTO tickets (code, entrance, plate, status)
            VALUES (?, ?, ?, 0);
        `;
    }

    const params = [code, dateFormat.dateToSQL(entrance), plate]

    try {
        await executeQuery(db, query, params);

        // Consultar o registro recém-inserido
        const selectQuery = 'SELECT * FROM tickets WHERE code = ? ORDER BY id DESC LIMIT 1';
        const selectParams = [code];
        const result = await executeQuery(db, selectQuery, selectParams);
        return result.rows.item(0);
    } catch (error) {
        console.error(`Erro ao inserir ticket:`, error);
        return null;
    }
}

const lastTicketId = async () => {
    const db = openDatabase();

    const query = `SELECT id FROM tickets ORDER BY id DESC LIMIT 1`;

    try {
        const result = await executeQuery(db, query);
        if (result.rows.length > 0) {
            if (result.rows.item(0)) {
                return result.rows.item(0)?.id;
            }
        }
        else {
            return 0;
        }
    } catch (error) {
        console.error('Erro ao selecionar o último ID do ticket:', error);
    }
}

const getTicketByCode = async (code) => {
    const db = openDatabase();

    const query = `SELECT * FROM tickets WHERE code = ? LIMIT 1`;

    const params = [code]

    try {
        const result = await executeQuery(db, query, params);
        if (result.rows.length > 0)
            return result.rows.item(0)
    } catch (error) {
        console.error(`Erro ao selecionar ticket com o código: ${code}:`, error);
    }
}

export default {
    createTable,
    createDatabase,
    selectUser,
    insertTicket,
    lastTicketId,
    getTicketByCode,
};