import * as React from "react";
import "./Template.scss";
import AdItem from "../Item";
import { ads } from "config/ads";

function AdTemplate() {
  return (
    <div className="AdTemplate">
      {ads.map(ad => (
        <AdItem {...ad} />
      ))}
    </div>
  );
}

export default AdTemplate;
