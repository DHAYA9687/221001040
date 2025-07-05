import {Log} from "../utils/sendLog.js";

export const loggerMiddleware = async (req, res, next) => {
  await Log("backend", "info", "middleware", `Incoming ${req.method} ${req.url}`);
  next();
};


