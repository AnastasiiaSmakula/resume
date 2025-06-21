import type { Event } from "./Event";
import { useState } from "react";
import "./Timeline.css";

interface TimelineProps {
  events: Event[];
}

const Timeline = (props: TimelineProps) => {
  const [name, setName] = useState(-1);

  return (
    <ul>
      {props.events.map((event, index) => (
        <li
          onClick={() => {
            // early return / guardian clause
            if (event.longLongText === undefined) return;

            if (index === name) setName(-1);
            else setName(index);
          }}
          className={event.longLongText === undefined ? "" : "list-item"}
        >
          <b>{event.date}</b>
          {event.shortText}
          <br />
          {event.longText}
          {event.longLongText && (
            <p
              className={
                "lbase " +
                (index === name ? "long-long-text-selected" : "long-long-text")
              }
            >
              {event.longLongText}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
