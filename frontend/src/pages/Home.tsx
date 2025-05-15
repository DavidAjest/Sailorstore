import { useEffect, useState } from "react";
import { fetchBoats } from "../services/vesselService";
import VesselCard from "../components/VesselCard";
import "../styles/Home.css";
import type { Vessel } from "../types/Vessel";
export default function Home() {
  const [vessels, setVessels] = useState<Vessel[]>([]);

  useEffect(() => {
    const getAllBoats = async () => {
      const fecthedBoats = await fetchBoats();
      console.log("this is fecthedBoats", fecthedBoats);
      setVessels(fecthedBoats);
    };
    getAllBoats();
  }, []);

  return (
    <div>
      {vessels && (
        <div className="boat-grid">
          {vessels.map((vessel: Vessel) => (
            <VesselCard key={vessel.Id} {...vessel} />
          ))}
        </div>
      )}
    </div>
  );
}
