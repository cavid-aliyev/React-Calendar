import { Button, Layout, Modal, Row } from "antd";
import React from "react";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/userTypedSelector";
import { IEvent } from "../models/IEvent";

const Event: React.FC = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const { guests, events } = useTypedSelector((state) => state.eventReducer);
  const { user } = useTypedSelector((state) => state.authReducer);

  React.useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, [fetchGuests, fetchEvents, user.username]);

  const addNewEvent = (event: IEvent) => {
    setModalVisible(false);
    createEvent(event);
  };

  return (
    <Layout>
      <EventCalendar events={events} />
      <Row justify="center">
        <Button onClick={() => setModalVisible(true)}>Add action</Button>
      </Row>
      <Modal
        title="Add action"
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <EventForm guests={guests} submit={addNewEvent} />
      </Modal>
    </Layout>
  );
};

export default Event;
