import express from "express";
import bodyParser from "body-parser";
import router from "./route/router.js";
import cors from "cors";
const app= express();
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(router)

export  default app;














