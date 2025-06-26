import React from "react";
import "./Card.css";
import { useNightModeContext } from "./NightModeContext";

interface CardProps {
  title: string;
  id?: string;
  extraStyles?: string;
  children: React.ReactNode;
  ref?: React.RefObject<any>;
}

const Card = ({ title, id, extraStyles, children, ref }: CardProps) => {
  const { mode } = useNightModeContext();

  return (
    <div className={"body-section " + extraStyles} id={id} ref={ref}>
      <h2 className={mode ? "card-h2-night" : "card-h2-day"}>{title}</h2>
      {children}
    </div>
  );
};
export default Card;
