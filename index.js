import express from "express";
import cors from "cors";
import shortenerRoutes from "./routes/shortenerRoutes.js"
import { loggerMiddleware } from "./middlewares/logger.js";
const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);
app.use("/url", shortenerRoutes);

app.get("/", (req, res) => {
  res.send("API is working!");
});





app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})
