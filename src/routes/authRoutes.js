import express from "express";

const router = express.Router();

// Example auth routes
router.post("/register", (req, res) => {
  res.json({ message: "User registered" });
});

router.post("/login", (req, res) => {
  res.json({ message: "User logged in" });
});

export default router; // ✅
