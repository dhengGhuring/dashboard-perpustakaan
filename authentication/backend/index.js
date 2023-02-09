// import express from "express";
// import cors from "cors";
// import session from "express-session";
// import dotenv from "dotenv";
// const BookRoute = require("./routes/BookRoute");
// import BookRoute from "./routes/BookRoute";
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const dotenv = require("dotenv");
const UserRoute = require("./routes/UserRoute");
const BookRoute = require("./routes/BookRoute");
const db = require("./config/Database");
dotenv.config();

const app = express();
// //** Mengkoneksikan ke database */
// (async () => {
//   await db.sync();
// })();

//** Membuat middleware */
// app.use(
//   session({
//     secret: process.env.SESS_SECREAT,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       // secure cookienya dibuat 'auto' supaya secara otomatis terset ketika alamatnya menggunakan http atau https
//       secure: "auto",
//     },
//   })
// );

app.use(
  cors({
    // cors credential berniali ture berfungsi agar frontend bisa mengirim request dan juga cookie beserta credentialnya
    credentials: false,
    // origin wadah untuk mengizinkan domain apa saja yang bisa mengakses api yang sudah dibuat bisa berupa array jika ada banyak domain
    origin: "http://localhost:" + process.env.APP_PORT,
  })
);
// middleware yang berfungsi agar backend bisa menerima data beruapa json dari fe
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(UserRoute);
app.use(BookRoute);
//** Menghubungkan Port yang sudah di set di .env */
app.listen(process.env.APP_PORT, () => {
  console.log("Server berjalan... di PORT " + process.env.APP_PORT);
});
