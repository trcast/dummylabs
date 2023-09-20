import React from "react";
import topLine from "../assets/client/line-short-bottom-left.svg";
import bottomLine from "../assets/client/line-short-top-right.svg";

const Header = React.forwardRef((props, ref) => {
  return (
    <header ref={ref}>
      <div className="header-line-top">
        <img src={topLine} alt="" />
      </div>

      <div className="header-container">
        <h1 className="header-title">DUMMY LABS</h1>
        <h2 className="header-text">
          Delivering premium 3D design services & crafting timeless collections
        </h2>
      </div>
      <div className="header-line-bottom">
        <img src={bottomLine} alt="" />
      </div>
    </header>
  );
});

export default Header;
