import React, { useEffect, useRef } from "react";

const Showroom = ({ onShowroomLoad }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    iframeRef.current.onload = () => {
      onShowroomLoad();
    };
  }, [onShowroomLoad]);

  return (
    <div className="showroom-container">
      <iframe
        className="iframe-showroom"
        src="https://vto.webxr.tools/u/mattjantes/dummy-labs/"
        allow="camera; gyroscope;"
        allowFullScreen
        scrolling="no"
        ref={iframeRef}
      ></iframe>
    </div>
  );
};

export default Showroom;
