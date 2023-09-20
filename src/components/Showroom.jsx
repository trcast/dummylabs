import React, { useEffect } from "react";
import Spline from "@splinetool/react-spline";
import arrowRight from "../assets/client/arrow-viewer-right.svg";
import arrowLeft from "../assets/client/arrow-viewer-left.svg";

const Showroom = React.forwardRef((props, ref) => {
  return (
    <div className="showroom-container" ref={ref}>
      <Spline scene="https://prod.spline.design/0wqbPE10DJAJlI87/scene.splinecode" />
    </div>
  );
});

export default Showroom;
