import React from "react";
import { createRoot } from "react-dom/client";
import { AverageComponent } from "./average-component";
import { TotalScoreComponent } from "./total-score-component";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Hello from React</h1>
    <AverageComponent />
    <TotalScoreComponent />
  </div>
);
