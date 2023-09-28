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
        <StudioClientsCard
          logo={ChaChaVans}
          name="Cha Cha Vans"
          link="https://twitter.com/ChaChaVansNFT"
        />
        <StudioClientsCard
          logo={Dragons}
          name="BORYOKU DRAGONZ"
          link="https://twitter.com/BoryokuDragonz"
        />
        <StudioClientsCard
          logo={Architects}
          name="THE ARCHITECTS"
          link="https://twitter.com/_thearchitects_"
        />
        <StudioClientsCard
          logo={Madlads}
          name="Mad Lads"
          link="https://twitter.com/MadLadsNFT"
        />
        <StudioClientsCard
          logo={Forgebots}
          name="Forgebots"
          link="https://twitter.com/forgebots"
        />
        <StudioClientsCard
          logo={Ukiyo}
          name="Ukiyo Studio"
          link="https://twitter.com/UkiyoNFT_"
        />
        <StudioClientsCard
          logo={Funguyz}
          name="fun guyz"
          link="https://twitter.com/FunGuyzNFT"
        />
        <StudioClientsCard
          logo={Poppalz}
          name="pop pals"
          link="https://twitter.com/poppinpals"
        />
        <StudioClientsCard
          logo={Jellybeasts}
          name="jelly beasts"
          link="https://twitter.com/JellyBeasts_Sol"
        />
        <StudioClientsCard
          logo={Bohemia}
          name="bohemia art fair"
          link="https://twitter.com/BohemiaArtFair"
        />
      </div>
    </div>
  );
});

export default StudioClientsGroup;
