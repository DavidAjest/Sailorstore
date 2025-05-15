import axios from "axios";

export const fetchBoats = async () => {
  try {
    const fechedVessels = await axios("http://localhost:3333/api/boats");
    console.log(fechedVessels);
    return fechedVessels.data; // Return the data
  } catch (e) {
    console.error(e); // Log the error
    throw new Error("boats not found");
  }
};
