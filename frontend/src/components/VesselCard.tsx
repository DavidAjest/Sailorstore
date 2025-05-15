import "../styles/VesselCard.css";
import type { Vessel } from "../types/Vessel";

export default function VesselCard(vessel: Vessel) {
  return (
    <div className="card">
      <img src="img_avatar.png" alt={vessel.Name} style={{ width: "100%" }} />
      <div className="container">
        <h4>
          <b>{vessel.Name}</b>
        </h4>
        {/* <p>{vessel.description}</p> */}
      </div>
    </div>
  );
}
