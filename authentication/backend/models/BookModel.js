//** Model database buku */

const { Sequelize } = require("sequelize");
const db = require("../config/Database");
const Users = require("./UserModel");

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
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

//** Relasi bookshelf dengan user => one to many */
Users.hasMany(Books);
Books.belongsTo(Users, { foreignKey: "userId" });

module.exports = Books;
