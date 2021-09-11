import { Button, Layout, Modal, Row } from "antd";
import React from "react";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";

const Event: React.FC = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
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
        <EventForm />
      </Modal>
    </Layout>
  );
};

export default Event;
