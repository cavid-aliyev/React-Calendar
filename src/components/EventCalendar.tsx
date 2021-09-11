import { Calendar } from "antd";
import React from "react";
import { IEvent } from "../models/IEvent";

interface EventCalnedarProps {
  events: IEvent[];
}

const EventCalendar: React.FC<EventCalnedarProps> = () => {
  return <Calendar />;
};

export default EventCalendar;
