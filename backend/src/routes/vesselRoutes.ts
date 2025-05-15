import express from "express";
import {
  createVessel,
  showAllVessels,
  showVesselById,
  updateVesselById,
  deleteVessel,
} from "../controllers/vesselController";

const router = express.Router();

router.post("/", createVessel);
router.get("/", showAllVessels);
router.get("/:id", showVesselById);
router.put("/:id", updateVesselById);
router.delete("/:id", deleteVessel);

export default router;
