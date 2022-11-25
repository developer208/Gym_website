import React from "react";
import SubComponentBox from "./SubComponentBox";
import "./SubComponent.css";
import fimage1 from "../../assets/images/2.svg";
import fimage2 from "../../assets/images/3.svg";
import fimage3 from "../../assets/images/4.svg";
import { Link } from "react-router-dom";

const SubComponent = () => {
  return (
    <div id="features">
      <h1>Shop Now</h1>
      <div className="a-container">
        <Link to="/equipment">
          <SubComponentBox image={fimage1} title="Equipment" />
        </Link>
        <Link to="/supplements">
          <SubComponentBox image={fimage2} title="Supplements" />
        </Link>
        <Link to="/accessories">
        <SubComponentBox image={fimage3} title="Accessories" />
        </Link>
      </div>
    </div>
  );
};

export default SubComponent;
