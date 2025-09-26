import express from "express";
import bodyParser from "body-parser";
import router from "./route/router.js";

const app= express();
app.use(express.json());
app.use(bodyParser.json());
app.use(router)

export  default app;














