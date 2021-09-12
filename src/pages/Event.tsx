import { Button, Layout, Modal, Row } from "antd";
import React from "react";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/userTypedSelector";

const Event: React.FC = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const { fetchGuests } = useActions();
  const { guests } = useTypedSelector((state) => state.eventReducer);

  React.useEffect(() => {
    fetchGuests();
  }, [fetchGuests]);

  return (
    <Layout>
      <EventCalendar events={[]} />
      <Row justify="center">
        <Button onClick={() => setModalVisible(true)}>Add action</Button>
      </Row>
      <Modal
        title="Add action"
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <EventForm guests={guests} />
      </Modal>
    </Layout>
  );
};

export default Event;
