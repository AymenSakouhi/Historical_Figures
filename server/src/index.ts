import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import "dotenv/config";
import router from "./routes/routes";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/api", router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
