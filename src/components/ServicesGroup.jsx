import React from "react";
import ServicesCard from "./ServicesCard";
import Modeling from "../assets/icons/modeling.svg";
import Materials from "../assets/icons/materials.svg";
import Rigging from "../assets/icons/rigging.svg";
import Animation from "../assets/icons/animation.svg";
import Filters from "../assets/icons/filters.svg";
import Generation from "../assets/icons/generation.svg";
import Hosting from "../assets/icons/hosting.svg";
import Metadata from "../assets/icons/metadata.svg";
import Rendering from "../assets/icons/rendering.svg";
import Skinning from "../assets/icons/skinning.svg";

const ServicesGroup = () => {
  return (
    <div className="service-cards-container">
      <ServicesCard
        icon={Modeling}
        header="3D Modeling"
        descript="Creating detailed avatars, vehicles, & virtual objects with precision."
      />
      <ServicesCard
        icon={Materials}
        header="Materials"
        descript="Adding depth, authenticity, & an immersive touch to your 3D creations."
      />
      <ServicesCard
        icon={Rigging}
        header="Rigging"
        descript="Defining underlying structures to enable fluid movement in virtual environments."
      />
      <ServicesCard
        icon={Skinning}
        header="Skinning"
        descript="Perfecting the movement & flexibility of 3D characters to enhance user experience."
      />
      <ServicesCard
        icon={Animation}
        header="Animation"
        descript="Infusing life into your 3D creations with captivating animations."
      />
      <ServicesCard
        icon={Rendering}
        header="Rendering"
        descript="Transforming 3D models into stunning visuals through advanced rendering techniques."
      />
      <ServicesCard
        icon={Filters}
        header="Ar Filters"
        descript="Crafting virtual layers that seamlessly merge with the real world."
      />
      <ServicesCard
        icon={Generation}
        header="Generation"
        descript="Assembling unique 3D traits with versatile logic for highly curated collections. "
      />
      <ServicesCard
        icon={Metadata}
        header="Metadata"
        descript="Producing blockchain metadata & performing on-chain updates (SOL & ETH)."
      />
      <ServicesCard
        icon={Hosting}
        header="Asset Hosting"
        descript="Implementing a secure environment to store, manage, & deliver your 3D assets."
      />
    </div>
  );
};

export default ServicesGroup;
