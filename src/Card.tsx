import React from "react";
import "./Card.css";

interface CardProps {
  title: string;
  id?: string;
  extraStyles?: string;
  children: React.ReactNode;
}

const Card = ({ title, id, extraStyles, children }: CardProps) => {
  return (
    <div className={"body-section " + extraStyles} id={id}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
export default Card;
