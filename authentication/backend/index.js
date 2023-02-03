import express from "express";
import cors from "cors";
import session from "express-session";

const app = express();
//** Membuat middleware */
app.use(
  cors({
    // cors credential berniali ture berfungsi agar frontend bisa mengirim request dan juga cookie beserta credentialnya
    credentials: true,
    // origin wadah untuk mengizinkan domain apa saja yang bisa mengakses api yang sudah dibuat bisa berupa array jika ada banyak domain
    origin: "http://localhost:5173/",
  })
);

//** Menghubungkan Port yang sudah di set di .env */
app.listen(process.env.APP_PORT, () => {
  console.log("Server berjalan...");
});
