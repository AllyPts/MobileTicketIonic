import dotenv from 'dotenv';
import { sequelize } from './instances/mysql.js'; 
import { Atendimento } from './models/Atendimento.js';

dotenv.config();

async function main(){
    try {
        await sequelize.authenticate();
        console.log('Conexão estabelecida com sucesso.');

        // Sincronização do model com o banco de dados
        await Atendimento.sync();
        console.log('Tabela de atendimentos sincronizada.');

    } catch(err) {
        console.error('Erro de conexão ou sincronização:', err);
    }
}

main();