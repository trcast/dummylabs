import React from "react";
import StudioClientsCard from "./StudioClientsCard";
import Architects from "../assets/studio-clients/architects.svg";
import Bohemia from "../assets/studio-clients/bohemia.svg";
import ChaChaVans from "../assets/studio-clients/chacha-vans.svg";
import Dragons from "../assets/studio-clients/dragons.svg";
import Forgebots from "../assets/studio-clients/forgebots.svg";
import Funguyz from "../assets/studio-clients/funguyz.svg";
import Jellybeasts from "../assets/studio-clients/jellybeasts.png";
import Madlads from "../assets/studio-clients/madlads.svg";
import Poppalz from "../assets/studio-clients/poppalz.png";
import Ukiyo from "../assets/studio-clients/ukiyo.svg";

const StudioClientsGroup = React.forwardRef((props, ref) => {
  return (
    <div className="studio-cards-group" ref={ref}>
      <div className="studio-client-card-container">
        <StudioClientsCard logo={ChaChaVans} />
        <StudioClientsCard logo={Dragons} />
        <StudioClientsCard logo={Architects} />
        <StudioClientsCard logo={Madlads} />
        <StudioClientsCard logo={Forgebots} />
        <StudioClientsCard logo={Ukiyo} />
        <StudioClientsCard logo={Funguyz} />
        <StudioClientsCard logo={Poppalz} />
        <StudioClientsCard logo={Jellybeasts} />
        <StudioClientsCard logo={Bohemia} />
      </div>
    </div>
  );
});

export default StudioClientsGroup;
