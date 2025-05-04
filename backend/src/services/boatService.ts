import { sql } from "../db/mssqlConfig";

export const createBoatRecord = async (
  Name: string,
  Type: string,
  Manufacturer: string,
  Length: number,
  Year: number,
  Price: number
) => {
  const q = `
    INSERT INTO dbo.Boats (Name, Type, Manufacturer, Length, Year, Price)
    VALUES (@Name, @Type, @Manufacturer, @Length, @Year, @Price)
  `;
  try {
    const request = new sql.Request();

    // Bind parameters
    request.input("Name", sql.VarChar, Name);
    request.input("Type", sql.VarChar, Type);
    request.input("Manufacturer", sql.VarChar, Manufacturer);
    request.input("Length", sql.Float, Length);
    request.input("Year", sql.Int, Year);
    request.input("Price", sql.Float, Price);

    // Execute the query
    const result = await request.query(q);

    return result.recordset;
  } catch (e) {
    console.error("Error in createBoatRecord:", e);
    throw new Error(`Failed to create boat in the database, ${e}`);
  }
};

export const getAllBoats = async () => {
  const q = "SELECT * FROM dbo.Boats";

  try {
    const request = new sql.Request();

    // Execute the query
    const result = await request.query(q);

    return result.recordset;
  } catch (e) {
    console.error("Error in getAllBoats:", e);
    throw new Error(`Failed to fetch boats from the database, ${e}`);
  }
};

export const getBoatById = async (id: string) => {
  const q = `
    SELECT * FROM dbo.Boats WHERE Boat_id = @id
  `;
  try {
    const request = new sql.Request();

    // Bind the parameter
    request.input("id", sql.VarChar, id);

    // Execute the query
    const result = await request.query(q);

    return result.recordset;
  } catch (e) {
    console.error("Error in getBoatById:", e);
    throw new Error(`Failed to fetch boat from the database, ${e}`);
  }
};

export const updateBoatRecordById = async (
  id: string,
  Name: string,
  Type: string,
  Manufacturer: string,
  Length: Float32Array,
  Year: number,
  Price: number
) => {
  const q = `
    UPDATE dbo.Boats
    SET 
      Name = '${Name}',
      Type = '${Type}',
      Manufacturer = '${Manufacturer}',
      Length = ${Length},
      Year = ${Year},
      Price = ${Price}
    WHERE Boat_id = ${id}
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
      throw new Error("No boat was updated. ");
    }

    return result;
  } catch (e) {
    console.error("Error in deleteBoatRecord:", e);
    throw new Error(`Failed to delete boat from the database, ${e}`);
  }
};

export const deleteBoatRecord = async (id: string) => {
  const q = `
    DELETE FROM dbo.Boats WHERE Boat_id = @id
  `;
  try {
    // Create a new request object
    const request = new sql.Request();

    // Add the parameter to the request
    request.input("id", sql.VarChar, id); // Bind the @id parameter to the value of id

    // Execute the query
    const result = await request.query(q);

    if (result.rowsAffected[0] === 0) {
      throw new Error("No boat was deleted. Boat_id may not exist.");
    }

    return result;
  } catch (e) {
    console.error("Error in deleteBoatRecord:", e);
    throw new Error(`Failed to delete boat from the database, ${e}`);
  }
};
