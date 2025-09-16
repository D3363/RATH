import express from "express";

const router = express.Router();

// Example driver routes
router.get("/", (req, res) => {
  res.json({ message: "List of drivers" });
});

router.post("/", (req, res) => {
  res.json({ message: "Driver created" });
});

export default router; // ✅
