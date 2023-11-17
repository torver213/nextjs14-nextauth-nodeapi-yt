import dotenv from 'dotenv'
 dotenv.config()
import express from "express";
import http from "http";
import cors from "cors";
import compression from "compression";
import connectDb from './db/index.mjs';
import { postRoutes } from './routes/index.mjs';

const app = express();

app.use(cors({origin: true}))
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use("/api/", postRoutes)

// connect db
connectDb()


app.use((req, res) => {
    res.send("Server is up & running")
})

const server = http.createServer(app);

server.listen(5001, () => {
    console.log(`Server running on port 5001 - http://localhost:5001`)
})