import axios from "axios";
import { RequestHandler } from "express";
import "dotenv/config";

const URLHistoricalFigure =
  "https://api.api-ninjas.com/v1/historicalfigures?name=";
const URLHistoricalEvents =
  "https://api.api-ninjas.com/v1/historicalevents?text=";

const searchName: RequestHandler = (req, res, next) => {
  const { name } = req.params;
  axios
    .get(`${URLHistoricalFigure}${name}`, {
      headers: {
        "X-Api-Key": process.env.API_KEY,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      res.status(200).json({
        success: true,
        data: response.data,
      });
    })
    .catch((error) => {
      res.status(500).json({
        MessageChannel: "Server error",
        error,
      });
    });
};

const searchEvent: RequestHandler = (req, res, next) => {
  const { event } = req.params;
  axios
    .get(`${URLHistoricalEvents}${event}`, {
      headers: {
        "X-Api-Key": process.env.API_KEY,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      res.status(200).json({
        success: true,
        data: response.data,
      });
    })
    .catch((error) => {
      res.status(500).json({
        MessageChannel: "Server error",
        error,
      });
    });
};

export { searchName, searchEvent };
