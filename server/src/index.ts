import express from "express";
import cors from "cors";
import syncRoutes from "./routes/sync";
import stateRoutes from "./routes/state";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    message: "Alcovia server running"
  });
});

app.use("/sync", syncRoutes);

app.use("/state", stateRoutes);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});