import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "movie",
    password: "uummcc4040!",
    port: 5432,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let movies = [];
  
app.get("/", async (req, res) => {
    res.render("index.ejs")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});