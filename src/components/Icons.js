import React from "react";
import subject from "../icons/education.png";
import classroom from "../icons/pngwing.com.png";
import teacher from "../icons/teacher.png";

const Icons = ({
  clicked,
  setClicked,
  setSelectedClass,
  setSelectedSubject,
  setSelectedTeacher,
}) => {
  return (
    <div className="icons">
      <div
        onClick={() => {
          setClicked("subjects");
          setSelectedClass(null);
          setSelectedTeacher(null);
          setSelectedSubject(null);
        }}
        style={{ backgroundColor: clicked === "subjects" && "#f0f0f5" }}
        className="img-text"
      >
        <img src={subject} alt="pic" />
        Subjects
      </div>
      <div
        onClick={() => {
          setClicked("classes");
          setSelectedClass(null);
          setSelectedTeacher(null);
          setSelectedSubject(null);
        }}
        style={{ backgroundColor: clicked === "classes" && "#f0f0f5" }}
        className="img-text"
      >
        <img src={classroom} alt="pic" />
        Classes
      </div>
      <div
        onClick={() => {
          setClicked("teachers");
          setSelectedClass(null);
          setSelectedTeacher(null);
          setSelectedSubject(null);
        }}
        style={{ backgroundColor: clicked === "teachers" && "#f0f0f5" }}
        className="img-text"
      >
        <img src={teacher} alt="pic" />
        Teachers
      </div>
    </div>
  );
};

export default Icons;
