import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const LOG_API = process.env.LOG_API;

export const Log = async (stack, level, pkg, message) => {
  try {
    const payload = { stack, level, package: pkg, message };
    const res = await axios.post(LOG_API, payload);
    console.log("Log sent:", res.data);
  } catch (error) {
    console.error("Log failed:", error.message);
  }
}


