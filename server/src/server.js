import express from "express";
const app = express();

// Обработка запросов 
app.get("/", (res, req) => {
    res.send("Привет, мир!");
})
// Обработка запорсов.

app.listen(3000, () => {
    console.log("Сервер запущен на порту");
})