import express from "express";
//const { createShortUrl } = require("../controllers/shortenerController");
import { createShortUrl } from "../controllers/shortenerController.js";

const router = express.Router();

router.post("/shorturls", createShortUrl);

export default router;
