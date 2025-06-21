import type { Event } from "./Event";
import { useState } from "react";
import "./Timeline.css";

interface TimelineProps {
  events: Event[];
}

const Timeline = (props: TimelineProps) => {
  const [name, setName] = useState(-1);

  // 1. vtvorit prazdny timeline.css
  // 2. pridat classnames na elemtny tu (napriklad na <li)
  // 3. do timeline.css pridat styl pre tie klasy

  return (
    <ul>
      {props.events.map((event, index) => (
        <li
          onClick={() => {
            if (index === name) setName(-1);
            else setName(index);
          }}
          className="list-item"
        >
          <b>{event.date}</b>
          {event.shortText}
          <br />
          {event.longText}
          <p
            className={
              "lbase " +
              (index === name ? "long-long-text-selected" : "long-long-text")
            }
          >
            {event.longLongText}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
