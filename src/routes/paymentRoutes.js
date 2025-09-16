import express from "express";

const router = express.Router();

// Example payment routes
router.post("/create", (req, res) => {
  res.json({ message: "Payment created" });
});

router.get("/status/:id", (req, res) => {
  res.json({ message: `Status for payment ${req.params.id}` });
});

export default router; // ✅
