import React from "react";
import { Container } from "react-bootstrap";
import FiveOh from "../../components/UpgradePackages/FiveOh/index.js";
import FourVal from "../../components/UpgradePackages/FourVal/index.js";
import VSix from "../../components/UpgradePackages/VSix/index.js";
import "./upgrade-packages.css";

const UpgradePackages = () => {
  return (
    <Container id="packages-container">
      <FiveOh className="package-five-oh" />
      <FourVal className="package-four-val">Package One</FourVal>
      <VSix className="package-v6">Package One</VSix>
      <div className="package-three-val">Package One</div>
      <div className="package-two-val">Package One</div>
      <div className="package-mopar">Package One</div>
    </Container>
  );
};

export default UpgradePackages;
