import React from "react";
import "./Card.css";

interface CardProps {
  title: string;
  id?: string;
  extraStyles?: string;
  children: React.ReactNode;
  ref?: React.RefObject<any>;
}

const Card = ({ title, id, extraStyles, children, ref }: CardProps) => {
  return (
    <div className={"body-section " + extraStyles} id={id} ref={ref}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
export default Card;
