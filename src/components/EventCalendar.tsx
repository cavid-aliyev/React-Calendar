import { Calendar } from "antd";
import React from "react";
import { IEvent } from "../models/IEvent";
import { Moment } from "moment";
import { formatDate } from "../utils/date";

interface EventCalnedarProps {
  events: IEvent[];
}

const EventCalendar: React.FC<EventCalnedarProps> = (props) => {
  function dateCellRender(value: Moment) {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = props.events.filter(
      (ev) => ev.date === formatedDate
    );
    return (
      <div>
        {currentDayEvents.map((ev, index) => (
          <div key={index}>{ev.description}</div>
        ))}
      </div>
    );
  }
  return <Calendar dateCellRender={dateCellRender} />;
};

export default EventCalendar;
