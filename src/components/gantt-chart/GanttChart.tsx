import React, { useEffect } from "react";
import { gantt } from "./dhtmlxgantt";
import "./gantt-chart-css/dhtmlxgantt.scss";

type IProps = {
  data?: any;
  onResizeProgress?: any;
};

function GanttChart(props: IProps) {
  useEffect(() => {
    gantt.init("gantt_here");
    gantt.parse({
      data: [
        {
          id: 1,
          text: "Project #2",
          start_date: "01-04-2018",
          duration: 18,
          progress: 0.4,
          open: true,
        },
        {
          id: 2,
          text: "Task #1",
          start_date: "02-04-2018",
          duration: 8,
          progress: 0.6,
          parent: 1,
        },
        {
          id: 3,
          text: "Task #2",
          start_date: "11-04-2018",
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

    gantt.onResizeProgress = (event) => {
      props.onResizeProgress(event);
    };
  }, [props]);

  return <div id="gantt_here" style={{ width: "100%", height: "100vh" }}></div>;
}

export default GanttChart;
