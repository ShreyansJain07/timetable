import React, { useState } from "react";
import { Calendar, Flex, Space, Table, Tag } from "antd";
import { Button, Modal } from "antd";
import InitialModal from "./components/InitialModal";
import InfoModal from "./components/InfoModal";
const { Column, ColumnGroup } = Table;

const App = () => {

  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [periods, setPeriods] = useState(8);
  const [days, setDays] = useState(2);
  const [functionCalls, setFunctionCalls] = useState([
    { teacher: "KILBERT", subject: "Eng", lectureCount: 8, division: "9A" },
    { teacher: "SD", subject: "Pe", lectureCount: 3, division: "9A" },
    { teacher: "KILBERT", subject: "Art", lectureCount: 1, division: "9A" },
  ]);

  const columnGroups = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [data, setData] = useState([
    {
      key: "1",
      age: "A",
    },
    {
      key: "2",
      age: "B",
    },
    {
      key: "3",
      age: "C",
    },
  ]);

  const [infoModal,setInfoModal] = useState(true)

  console.log(functionCalls);

  return (

    <div style={{ marginTop: 20 }}>

      <InitialModal
        setName={setName}
        setDays={setDays}
        setYear={setYear}
        setPeriods={setPeriods}
        setInfoModal={setInfoModal}
      />
      {infoModal && <InfoModal infoModal={infoModal} setInfoModal={setInfoModal} functionCalls={functionCalls} setFunctionCalls={setFunctionCalls} />}

      <Table pagination={false} bordered dataSource={data}>
        <Column title="Class" dataIndex="age" key="age" />
        {Array.from({ length: days }, (_, index) => (
          <ColumnGroup key={index + 1} title={columnGroups[index]}>
            {Array.from({ length: periods }, (_, index) => (
              <Column key={index + 1} title={(index + 1).toString()} />
            ))}
          </ColumnGroup>
        ))}
      </Table>
    </div>
  );
};
export default App;
