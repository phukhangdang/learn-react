import React, { useEffect, useState } from "react";
import GanttChart from "../../components/gantt-chart/GanttChart";
import { useGanttChartViewHook } from "./GanttChartViewHook";
import { convertData } from "../../components/gantt-chart/convert-data/convert-data";

function GanttChartView(props: any) {
  const [data, setData] = useState<any>();
  const [
    handleAddTask,
    handleEditTask,
    handleChangeTask,
    handleCreateLink,
    handleDeleteLink,
  ] = useGanttChartViewHook();

  useEffect(() => {
    setData(convertData());
  }, []);

  return (
    <>
      <div style={{ height: "100vh" }}>
        <GanttChart
          data={data}
          onAddTask={handleAddTask}
          onEditTask={handleEditTask}
          onChangeTask={handleChangeTask}
          onCreateLink={handleCreateLink}
          onDeleteLink={handleDeleteLink}
        />
      </div>
    </>
  );
}

export default GanttChartView;
