import express from "express";
import { randomUUID } from "crypto";
import { db } from "@/db";

export const router = express.Router();

router.post("/", async (req, res) => {
  const { name } = req.body;
  const id = randomUUID();
  await db("organizations").insert({ id, name });
  res.status(201).json({ id });
});
