import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
