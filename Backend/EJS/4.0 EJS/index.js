import express from "express";

const app = express();
const port = 3000;

const d = new Date();
let day = d.getDay();

app.get("/", (req, res) => {
    if (day === 0 || day === 6) {
        res.send("<h1>Hey! It's the weekend, time to have fun and relax!</h1>"); 
    } else {
        res.send("<h1>Hey! It's a weekday, time to work hard, babe!</h1>");
    }
})

app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
})