import React, { useEffect } from "react";
import Spline from "@splinetool/react-spline";

const Showroom = React.forwardRef((props, ref) => {
  return (
    <div className="showroom-container" ref={ref}>
      {/* <Spline scene="https://prod.spline.design/N3N1yJxROsazacg0/scene.splinecode" /> */}
      <iframe
        className="iframe-showroom"
        src="https://vto.webxr.tools/u/mattjantes/dummy-labs/"
        allow="accelerometer;camera; gyroscope;"
        allowFullScreen
      ></iframe>
    </div>
  );
});

export default Showroom;
