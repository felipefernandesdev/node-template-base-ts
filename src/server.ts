import "dotenv/config"; // Configuration DOTENV
import logger from "morgan";
import express, { Request, Response } from "express";
const app = express();

app.use(express.json());
app.use(logger("combined"));

app.get("/", (req: Request, res: Response) => {
  res.json({
    msg: "Bem vindo!",
  });
});

app.listen(3000, () => console.log(`API is running at port 3000`));
