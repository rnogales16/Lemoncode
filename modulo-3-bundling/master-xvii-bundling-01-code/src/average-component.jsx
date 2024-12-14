import React from "react";
import { getAvg } from "./average-service";
import "./average-component-styles.scss";

export const AvarageComponent = () => {
  const [avarage, setAvarage] = React.useState(0);

  React.useEffect(() => {
    const scores = [10, 20, 30, 40, 50];
    setAvarage(getAvg(scores));
  }, []);

  return (
    <div>
      <span className="result-background">Students avarage: {avarage}</span>
    </div>
  );
};
