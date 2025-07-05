import express from "express";
import cors from "cors";
import shortenerRoutes from "./routes/shortnerRoutes.js";
import { loggerMiddleware } from "./middelwares/logger.js";
const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);
app.use("/", shortenerRoutes);





app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})
