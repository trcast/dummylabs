import React, { useEffect, useRef } from "react";
import Iframe from "react-iframe";

const Showroom = React.forwardRef((props, ref) => {
  return (
    <div className="showroom-container" ref={ref}>
      <Iframe
        className="iframe-showroom"
        src="https://vto.webxr.tools/u/mattjantes/dummy-labs/"
        allow="camera; gyroscope;"
        allowFullScreen
        scrolling="no"
        position="relative"
      ></Iframe>
    </div>
  );
});

export default Showroom;
