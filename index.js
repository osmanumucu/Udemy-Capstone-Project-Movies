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

db.connect()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let movieList = [];
  
app.get("/", async (req, res) => {
    const result = await db.query("SELECT * FROM movies");
    movieList = result.rows;
    res.render("index.ejs", {
        movieList: movieList
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});