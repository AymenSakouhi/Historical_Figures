"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchEvent = exports.searchName = void 0;
const axios_1 = __importDefault(require("axios"));
require("dotenv/config");
const URLHistoricalFigure = "https://api.api-ninjas.com/v1/historicalfigures?name=";
const URLHistoricalEvents = "https://api.api-ninjas.com/v1/historicalevents?text=";
const searchName = (req, res, next) => {
    const { name } = req.params;
    axios_1.default
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
exports.searchName = searchName;
const searchEvent = (req, res, next) => {
    const { event } = req.params;
    axios_1.default
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
exports.searchEvent = searchEvent;
