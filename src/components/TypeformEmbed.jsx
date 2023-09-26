import React, { useEffect } from "react";

const TypeformEmbed = React.forwardRef((props, ref) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;

    const iframeContainer = document.getElementById("typeform-container");
    iframeContainer.appendChild(script);

    return () => {
      // Clean up the script tag when the component unmounts
      iframeContainer.removeChild(script);
    };
  }, []);

  return (
    <div id="typeform-container" className="typeform-container" ref={ref}>
      <iframe
        className="typeform"
        src="https://forms.zohopublic.com/danny45/form/DUMMYLABS/formperma/shT5k-GLADe89NeRsy_k5_2O_LnZuyT2d9DGhQYAE8U"
      ></iframe>
    </div>
  );
});

export default TypeformEmbed;
