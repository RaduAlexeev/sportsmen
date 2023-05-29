import express from "express";
const app = express();
const port = 3002;

// Обработка запросов 
app.get("/", (req, res) => {
    res.send("Привет, мир!");
})
// Обработка запорсов.

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
})