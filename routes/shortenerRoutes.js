import express from "express";
//const { createShortUrl } = require("../controllers/shortenerController");
import { createShortUrl } from "../controllers/shortenerController.js";

const router = express.Router();

router.post("/shorturls", createShortUrl);

router.get("/hello", (req, res) => {
    return res.status(200).json({ message: "Hello Dhaya" });
})

export default router;
