import React, { useEffect } from "react";
import Spline from "@splinetool/react-spline";

const Showroom = React.forwardRef((props, ref) => {
  return (
    <div className="showroom-container" ref={ref}>
      <Spline scene="https://prod.spline.design/N3N1yJxROsazacg0/scene.splinecode" />
    </div>
  );
});

export default Showroom;
