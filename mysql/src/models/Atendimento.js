import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql.js';

export const Atendimento = sequelize.define('Atendimento', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hora_emissao: {
        type: DataTypes.TIME,
        allowNull: false
    },
    hora_atendimento: {
        type: DataTypes.TIME,
        allowNull: true
    },
    guiche: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    data: {
        type: DataTypes.DATEONLY,
        defaultValue: Sequelize.NOW
    }
}, {
    tableName: 'atendimentos',
    timestamps: false
});