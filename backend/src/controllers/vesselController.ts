import { Response, Request } from "express";
import {
  getAllVessels,
  getVesselById,
  updateVesselRecordById,
  createVesselRecord,
  deleteVesselRecord,
} from "../services/vesselService";

export const createVessel = async (req: Request, res: Response) => {
  console.log("im here");
  const { Name, Type, Manufacturer, Length, Year, Price } = req.body;

  const sanitizedName = Name.replace(/'/g, "''");
  const sanitizedType = Type.replace(/'/g, "''");
  const sanitizedManufacturer = Manufacturer.replace(/'/g, "''");
  try {
    const records = await createVesselRecord(
      sanitizedName,
      sanitizedType,
      sanitizedManufacturer,
      Length,
      Year,
      Price
    );
    res.status(200).json(records);
  } catch (e) {
    console.log("error in the showAllVessels function", e);
    res.status(500).json({ error: `${e}` });
  }
};

export const showAllVessels = async (req: Request, res: Response) => {
  try {
    const records = await getAllVessels();
    if (!records || records.length === 0) {
      res.status(500).json({ error: "no records of baots in the database" });
    }
    res.status(200).json(records);
  } catch (e) {
    console.log("error in the showAllVessels function", e);
    res.status(500).json({ error: `${e}` });
  }
};

export const showVesselById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const records = await getVesselById(id);
    res.status(200).json(records);
  } catch (e) {
    console.log("error in the showAllVessels function", e);
    res.status(500).json({ error: `${e}` });
  }
};

export const updateVesselById = async (req: Request, res: Response) => {
  const { id } = req.params; // Extract the Vessel_id from the URL
  const { Name, Type, Manufacturer, Length, Year, Price } = req.body; // Extract updated fields from the request body

  // Sanitize inputs (escape single quotes in all string fields)
  const sanitizedName = Name.replace(/'/g, "''");
  const sanitizedType = Type.replace(/'/g, "''");
  const sanitizedManufacturer = Manufacturer.replace(/'/g, "''");

  try {
    const records = await updateVesselRecordById(
      id,
      sanitizedName,
      sanitizedType,
      sanitizedManufacturer,
      Length,
      Year,
      Price
    );
    res.status(200).json(records);
  } catch (e) {
    console.log("error in the showAllVessels function", e);
    res.status(500).json({ error: `${e}` });
  }
};

export const deleteVessel = async (req: Request, res: Response) => {
  const { id } = req.params; // Extract the Vessel_id from the URL

  try {
    const records = await deleteVesselRecord(id);
    res.status(200).json(records);
  } catch (e) {
    console.log("error in the showAllVessels function", e);
    res.status(500).json({ error: `${e}` });
  }
};
