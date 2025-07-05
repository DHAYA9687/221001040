import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const LOG_API = process.env.LOG_API;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const AUTH_TOKEN = process.env.AUTH_TOKEN;

export const Log = async (stack, level, pkg, message) => {
  try {
    const payload = { stack, level, package: pkg, message };
    const res = await axios.post(LOG_API, payload, {
      headers: {
        "client-id": CLIENT_ID,
        "client-secret": CLIENT_SECRET,
        Authorization: `Bearer ${AUTH_TOKEN}`, // 👈 This fixes 401
      }
    });
    console.log("Log sent:", res.data);
  } catch (error) {
    console.error("Log failed:", error.message);
  }
}


