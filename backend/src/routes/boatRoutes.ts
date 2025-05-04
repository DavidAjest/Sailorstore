import express from "express";
import {
  createBoat,
  showAllBoats,
  showBoatById,
  updateBoatById,
  deleteBoat,
} from "../controllers/boatController";

const router = express.Router();

router.post("/", createBoat);
router.get("/", showAllBoats);
router.get("/:id", showBoatById);
router.put("/:id", updateBoatById);
router.delete("/:id", deleteBoat);

export default router;
