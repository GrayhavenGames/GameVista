import express from "express";
import dotenv from "dotenv";
import { router as orgRoutes } from "@/routes/organizations";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/orgs", orgRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
