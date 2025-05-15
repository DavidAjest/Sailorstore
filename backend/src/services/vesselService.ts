import { sql } from "../db/mssqlConfig";

export const createVesselRecord = async (
  Name: string,
  Type: string,
  Manufacturer: string,
  Length: number,
  Year: number,
  Price: number
) => {
  const q = `
    INSERT INTO dbo.Vessels (Name, Type, Manufacturer, Length, Year, Price)
    VALUES (@Name, @Type, @Manufacturer, @Length, @Year, @Price)
  `;
  try {
    const request = new sql.Request();

    //  Synthesize value to prevent sql injections
    request.input("Name", sql.VarChar, Name);
    request.input("Type", sql.VarChar, Type);
    request.input("Manufacturer", sql.VarChar, Manufacturer);
    request.input("Length", sql.Float, Length);
    request.input("Year", sql.Int, Year);
    request.input("Price", sql.Float, Price);

    const result = await request.query(q);

    return result.recordset;
  } catch (e) {
    console.error("Error in createVesselRecord:", e);
    throw new Error(`Failed to create Vessel in the database, ${e}`);
  }
};

export const getAllVessels = async () => {
  const q = "SELECT * FROM dbo.Vessels";
  try {
    const request = new sql.Request();
    const result = await request.query(q);
    return result.recordset;
  } catch (e) {
    console.error("Error in getAllVessels:", e);
    throw new Error(`Failed to fetch Vessels from the database, ${e}`);
  }
};
export const getVesselById = async (id: string) => {
  const q = `
    SELECT * FROM dbo.Vessels WHERE Vessel_id = @id
  `;
  try {
    const request = new sql.Request();

    request.input("id", sql.VarChar, id);

    const result = await request.query(q);

    return result.recordset;
  } catch (e) {
    console.error("Error in getVesselById:", e);
    throw new Error(`Failed to fetch Vessel from the database, ${e}`);
  }
};

export const updateVesselRecordById = async (
  id: string,
  Name: string,
  Type: string,
  Manufacturer: string,
  Length: Float32Array,
  Year: number,
  Price: number
) => {
  const q = `
    UPDATE dbo.Vessels
    SET 
      Name = '${Name}',
      Type = '${Type}',
      Manufacturer = '${Manufacturer}',
      Length = ${Length},
      Year = ${Year},
      Price = ${Price}
    WHERE Vessel_id = ${id}
  `;
  try {
    const request = new sql.Request();

    request.input("Name", sql.VarChar, Name);
    request.input("Type", sql.VarChar, Type);
    request.input("Manufacturer", sql.VarChar, Manufacturer);
    request.input("Length", sql.Float, Length);
    request.input("Year", sql.Int, Year);
    request.input("Price", sql.Float, Price);
    request.input("id", sql.VarChar, id);

    const result = await request.query(q);

    if (result.rowsAffected[0] === 0) {
      throw new Error("No Vessel was updated. ");
    }

    return result;
  } catch (e) {
    console.error("Error in deleteVesselRecord:", e);
    throw new Error(`Failed to delete Vessel from the database, ${e}`);
  }
};

export const deleteVesselRecord = async (id: string) => {
  const q = `
    DELETE FROM dbo.Vessels WHERE Vessel_id = @id
  `;
  try {
    const request = new sql.Request();

    request.input("id", sql.VarChar, id);

    const result = await request.query(q);

    if (result.rowsAffected[0] === 0) {
      throw new Error("No Vessel was deleted. Vessel_id may not exist.");
    }

    return result;
  } catch (e) {
    console.error("Error in deleteVesselRecord:", e);
    throw new Error(`Failed to delete Vessel from the database, ${e}`);
  }
};
