import { Response, Request } from "express";
import {
  getAllBoats,
  getBoatById,
  updateBoatRecordById,
  createBoatRecord,
  deleteBoatRecord,
} from "../services/boatService";

export const createBoat = async (req: Request, res: Response) => {
  console.log("im here");
  const { Name, Type, Manufacturer, Length, Year, Price } = req.body;

  const sanitizedName = Name.replace(/'/g, "''");
  const sanitizedType = Type.replace(/'/g, "''");
  const sanitizedManufacturer = Manufacturer.replace(/'/g, "''");
  try {
    const records = await createBoatRecord(
      sanitizedName,
      sanitizedType,
      sanitizedManufacturer,
      Length,
      Year,
      Price
    );
    res.status(200).json(records);
  } catch (e) {
    console.log("error in the showAllBoats function", e);
    res.status(500).json({ error: `${e}` });
  }
};

export const showAllBoats = async (req: Request, res: Response) => {
  try {
    const records = await getAllBoats();
    if (!records || records.length === 0) {
      res.status(500).json({ error: "no records of baots in the database" });
    }
    res.status(200).json(records);
  } catch (e) {
    console.log("error in the showAllBoats function", e);
    res.status(500).json({ error: `${e}` });
  }
};

export const showBoatById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const records = await getBoatById(id);
    res.status(200).json(records);
  } catch (e) {
    console.log("error in the showAllBoats function", e);
    res.status(500).json({ error: `${e}` });
  }
};

export const updateBoatById = async (req: Request, res: Response) => {
  const { id } = req.params; // Extract the Boat_id from the URL
  const { Name, Type, Manufacturer, Length, Year, Price } = req.body; // Extract updated fields from the request body

  // Sanitize inputs (escape single quotes in all string fields)
  const sanitizedName = Name.replace(/'/g, "''");
  const sanitizedType = Type.replace(/'/g, "''");
  const sanitizedManufacturer = Manufacturer.replace(/'/g, "''");

  try {
    const records = await updateBoatRecordById(
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
    console.log("error in the showAllBoats function", e);
    res.status(500).json({ error: `${e}` });
  }
};

export const deleteBoat = async (req: Request, res: Response) => {
  const { id } = req.params; // Extract the Boat_id from the URL

  try {
    const records = await deleteBoatRecord(id);
    res.status(200).json(records);
  } catch (e) {
    console.log("error in the showAllBoats function", e);
    res.status(500).json({ error: `${e}` });
  }
};
