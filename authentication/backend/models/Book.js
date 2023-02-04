//** Model database buku */

import { Sequelize } from "sequelize";
import db from "../config/Database";

const { DataTypes } = Sequelize;

const Books = db.define(
  "book",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    kategori: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        length: [3, 100],
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        length: [3, 100],
      },
    },
    penulis: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        length: [3, 100],
      },
    },
    penerbit: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        length: [3, 100],
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default Books;
