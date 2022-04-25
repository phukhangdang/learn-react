import React, { useEffect, useState } from "react";
import GanttChart from "../../components/gantt-chart/GanttChart";
import { useGanttChartViewHook } from "./GanttChartViewHook";

function GanttChartView(props: any) {
  const [data, setData] = useState<any>();
  const [
    handleResizeProgress,
    handleAddTask,
    handleCreateLink,
    handleDeleteLink,
  ] = useGanttChartViewHook();

  useEffect(() => {
    setData({
      data: [
        {
          id: 1,
          text: "Project #2",
          start_date: "21-04-2022",
          duration: 18,
          progress: 0.4,
          open: true,
        },
        {
          id: 2,
          text: "Task #1",
          start_date: "22-04-2022",
          duration: 8,
          progress: 0.6,
          parent: 1,
        },
        {
          id: 3,
          text: "Task #2",
          start_date: "01-05-2022",
          duration: 8,
          progress: 0.6,
          parent: 1,
        },
      ],
      links: [
        { id: 1, source: 1, target: 2, type: "1" },
        { id: 2, source: 2, target: 3, type: "0" },
      ],
    });
  }, []);

  return (
    <>
      <GanttChart
        data={data}
        onResizeProgress={handleResizeProgress}
        onAddTask={handleAddTask}
        onCreateLink={handleCreateLink}
        onDeleteLink={handleDeleteLink}
      />
    </>
  );
}

export default GanttChartView;
