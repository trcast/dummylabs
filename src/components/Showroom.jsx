import React from "react";

const Showroom = React.forwardRef((props, ref) => {
  return (
    <div className="showroom-container" ref={ref}>
      <div></div>
      <iframe
        className="iframe-showroom"
        src="https://vto.webxr.tools/u/mattjantes/dummy-labs/"
        allow="camera; gyroscope;"
        allowFullScreen
        scrolling="no"
      ></iframe>
    </div>
  );
});

export default Showroom;
