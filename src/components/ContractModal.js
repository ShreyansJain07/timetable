import React, { useState } from "react";
import { Button, Modal } from "antd";
import lesson from "../icons/lesson.png";
import { IoIosAdd } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { MdEdit } from "react-icons/md";

const ContractModal = ({
  contractModal,
  setContractModal,
  teacherIndex,
  teachers,
  functionCalls,
  setFunctionCalls,
}) => {
  const [selectedFunction, setSelectedFunction] = useState(null);
  const [lessonModal, setLessonModal] = useState(false);

  const handleOk = () => {
    setContractModal(false);
  };

  const handleCancel = () => {
    setContractModal(false);
  };

  const handleFunctionClick = (index) => {
    setSelectedFunction(index === selectedFunction ? null : index);
  };

  return (
    <Modal
      title="Contract"
      width={1000}
      open={contractModal}
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
      <div className="contract-main">
        <div className="contract-logo">
          <img src={lesson} alt="img"></img>
          <div className="contract-title">
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              {teachers[teacherIndex].teacher}
            </span>
            <span>{teachers[teacherIndex].alais}</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <div className="contract-listarea">
            <div className="contract-row">
              <span style={{ flex: 1, padding: "5px", fontWeight: "bold" }}>
                Subject
              </span>
              <span style={{ flex: 1, padding: "5px", fontWeight: "bold" }}>
                Teacher
              </span>
              <span style={{ flex: 1, padding: "5px", fontWeight: "bold" }}>
                Class
              </span>
              <span style={{ flex: 1, padding: "5px", fontWeight: "bold" }}>
                Count
              </span>
            </div>
            {functionCalls
              .filter((call) => call.teacher === teachers[teacherIndex].teacher)
              .map((call, i) => (
                <div
                  key={i}
                  className={`contract-row ${
                    i === selectedFunction ? "selected-subject" : ""
                  }`}
                  onClick={() => handleFunctionClick(i)}
                >
                  <span style={{ flex: 1, padding: "5px" }}>
                    {call.subject}
                  </span>
                  <span style={{ flex: 1, padding: "5px" }}>
                    {call.teacher}
                  </span>
                  <span style={{ flex: 1, padding: "5px" }}>
                    {call.division}
                  </span>
                  <span style={{ flex: 1, padding: "5px" }}>
                    {call.lectureCount}
                  </span>
                </div>
              ))}
          </div>
          <div className="functions">
            <div className="func">
              <IoIosAdd color="green" size={30} />
              New
            </div>
            <div className="func">
              <RxCross2 color="red" size={24} />
              Delete
            </div>
            <div className="func">
              <MdEdit size={20} color="#72bcd4" />
              Edit
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ContractModal;
