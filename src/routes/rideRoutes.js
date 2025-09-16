import express from "express";

const router = express.Router();

// Example ride routes
router.post("/book", (req, res) => {
  res.json({ message: "Ride booked" });
});

router.get("/:id", (req, res) => {
  res.json({ message: `Ride details for ${req.params.id}` });
});

export default router; // ✅
