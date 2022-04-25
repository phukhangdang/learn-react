import React from "react";
import GanttChart from "../../components/gantt-chart/GanttChart";

function GanttChartView(props: any) {
  const handleResizeProgress = (event: any) => {
    console.log(event);
  };

  return (
    <>
      <GanttChart onResizeProgress={handleResizeProgress} />
    </>
  );
}

export default GanttChartView;
