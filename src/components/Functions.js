import React from "react";
import { IoIosAdd } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaChalkboardTeacher } from "react-icons/fa";

const Functions = ({ handleNew, handleDelete, clicked, handleLessonClick }) => {
  return (
    <div className="functions">
      <div onClick={handleNew} className="func">
        <IoIosAdd color="green" size={30} />
        New
      </div>
      <div onClick={handleDelete} className="func">
        <RxCross2 color="red" size={24} />
        Delete
      </div>
      <div
        onClick={() => {
          if (clicked === "teachers") handleLessonClick();
        }}
        className="func"
      >
        <FaChalkboardTeacher size={20} color="#72bcd4" />
        Lessons
      </div>
    </div>
  );
};

export default Functions;
