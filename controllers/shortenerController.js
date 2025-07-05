// const Log = require("../utils/sendLog");
import express from "express";
import { Log } from "../utils/sendLog.js";

export const createShortUrl = async (req, res) => {
    try {
        const { url, validity = 30, shortcode } = req.body;

        if (!url || typeof url !== "string") {
            await Log("backend", "error", "handler", "Invalid or missing 'url' field");
            return res.status(400).json({ error: "Invalid or missing 'url'" });
        }

        const generatedCode = Math.random().toString(36).substring(2, 7) || shortcode;
        const expiryDate = new Date(Date.now() + validity * 60 * 1000).toISOString();

        const response = {
            shortLink: `https://localhost:3000/${generatedCode}`,
            expiry: expiryDate,
        };

        await Log("backend", "info", "handler", `Short URL created: ${response.shortLink}`);
        res.status(201).json(response);
    } catch (err) {
        await Log("backend", "fatal", "handler", `Internal Server Error: ${err.message}`);
        res.status(500).json({ error: "Server error" });
    }
};
