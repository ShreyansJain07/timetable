import React, { useState } from "react";
import { Button, Modal } from "antd";
import school from "../icons/school.png";
import period from "../icons/calendar.png";
import { Input } from "antd";

const InitialModal = ({
  setDays,
  setName,
  setYear,
  setPeriods,
  setInfoModal,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setInfoModal(true);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div style={{ margin: 20 }}>
        <Button type="primary" onClick={showModal}>
          Enter Details
        </Button>
      </div>
      <Modal
        title="Enter Details"
        width={560}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
          </Button>,
        ]}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 15,
            borderRadius: 10,
            border: "1px solid #f0f0f5",
            marginBottom: 15,
          }}
        >
          <div style={{}}>
            <img src={school} width="60" height="60" alt="img" />
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <p style={{ width: "180px" }}>Name of school</p>
              <Input onChange={(e) => setName(e.target.value)} placeholder="" />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <p style={{ width: "200px" }}>Academic Year</p>
              <Input onChange={(e) => setYear(e.target.value)} placeholder="" />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 15,
            borderRadius: 10,
            border: "1px solid #f0f0f5",
          }}
        >
          <div style={{}}>
            <img src={period} width="60" height="60" alt="img" />
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <p style={{ width: "200px" }}>Periods per day</p>
              <Input
                onChange={(e) => setPeriods(e.target.value)}
                placeholder=""
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <p style={{ width: "200px" }}>Number of days</p>
              <Input onChange={(e) => setDays(e.target.value)} placeholder="" />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            ></div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default InitialModal;
