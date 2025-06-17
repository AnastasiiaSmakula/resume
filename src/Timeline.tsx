import type { Event } from "./Event";

interface TimelineProps {
  events: Event[];
}

const Timeline = (props: TimelineProps) => {
  return (
    <ul>
      {props.events.map((event) => (
        <li>
          <b>{event.date}</b>
          {event.shortText}
          <br />
          {event.longText}
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
