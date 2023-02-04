//** Model Rak buku atau list buku milih user */

import { Sequelize } from "sequelize";
import db from "../config/Database";
import Users from "./UserModel";

const DataTypes = Sequelize;

const Bookshelfs = db.define(
  "bookshelf",
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
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { freezeTableName: true }
);

//** Relasi bookshelf dengan user => one to many */
Users.hasMany(Bookshelfs);
Bookshelfs.belongsTo(Users, { foreignKey: "userId" });

export default Bookshelfs;
