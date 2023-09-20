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
      <div
        data-tf-widget="Bp2cawLm"
        data-tf-opacity="100"
        data-tf-iframe-props="title=DUMMY LABS"
        data-tf-transitive-search-params
        data-tf-medium="snippet"
        className="typeform"
      ></div>
    </div>
  );
});

export default TypeformEmbed;
