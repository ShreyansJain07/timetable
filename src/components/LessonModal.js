import React, { useState } from "react";
import { Button, Modal, Input, Select } from "antd";
import calender from "../icons/calendar1.png";
import subject from "../icons/education.png";
import classroom from "../icons/pngwing.com.png";
import teacher1 from "../icons/teacher.png";

const LessonModal = ({
  lessonModal,
  setLessonModal,
  subjects,
  teachers,
  classes,
  teacher,
  functionalCalls,
  setFunctionCalls,
}) => {
  const [sub, setSub] = useState("");
  const [div, setDiv] = useState("");
  const [lec, setLec] = useState("");

  const onChange = (value) => {
    console.log(`selected ${value}`);
    setSub(value);
  };

  function onDivChange(value) {
    setDiv(value);
  }

  function onLecChange(e) {
    setLec(parseInt(e.target.value, 10));
  }

  const handleOk = () => {
      if(sub && div && lec){
    setFunctionCalls((prev) => [
      ...prev,
      { teacher, subject: sub, lectureCount: lec, division: div },
    ]);
    setLessonModal(false);
}else alert("enter all values")
  };

  const handleCancel = () => {
    setLessonModal(false);
  };

  return (
    <Modal
      title="Lesson"
      style={{ top: 143 }}
      width={400}
      open={lessonModal}
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
      <div className="lesson">
        <div className="lesson-child">
          <img src={teacher1} alt="img"></img>
          <span style={{ fontSize: "17px", fontWeight: "600" }}>{teacher}</span>
        </div>
        <div className="lesson-child">
          <img src={subject} alt="img"></img>
          <Select
            placeholder="Select a Subject"
            onChange={onChange}
            options={subjects.map((subjectObj) => ({
              value: subjectObj.subject,
              label: subjectObj.alias,
            }))}
          />
        </div>
        <div className="lesson-child">
          <img src={classroom} alt="img"></img>
          <Select
            placeholder="Select a Class"
            onChange={onDivChange}
            options={classes.map((div) => ({
              value: div,
              label: div,
            }))}
          />
        </div>
        <div className="lesson-child">
          <img src={calender} alt="img"></img>
          <Input
            onChange={(e) => onLecChange(e)}
            value={lec}
            style={{ width: "230px" }}
            type="number"
            placeholder="Lessons/Week"
          />
        </div>
      </div>
    </Modal>
  );
};

export default LessonModal;
