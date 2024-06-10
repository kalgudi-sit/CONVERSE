const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { chats } = require("./data/data");
const connectDB = require("./config/db");

const app = express();

// Middlewares
dotenv.config();
// app.use(express.json());
app.use(cors({origin: ["http://localhost:5173"], credentials: true }));

app.get("/", (req, res) => {
    res.send("Hello from server chat room");
});

app.get("/api/chats", (req, res) => {
    res.send(chats);
});

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server listening on port ${process.env.PORT}`);
})

