import React, { useEffect } from "react";
import { gantt } from "./dhtmlxgantt";
import "./gantt-chart-css/dhtmlxgantt.scss";

type IProps = {
  data?: any;
  onResizeProgress?: any;
  onAddTask?: any;
  onCreateLink?: any;
  onDeleteLink?: any;
  deleteLink?: any;
};

function GanttChart(props: IProps) {
  useEffect(() => {
    gantt.init("gantt_here");

    if (props.data) {
      gantt.parse(props.data);

      gantt.onResizeProgress = (event) => {
        props.onResizeProgress(event);
      };

      gantt.onAddTask = (event) => {
        props.onAddTask(event);
      };

      gantt.onCreateLink = (event) => {
        props.onCreateLink(event);
      };

      gantt.onDeleteLink = (event) => {
        props.onDeleteLink(event);
      };
    }
  }, [props]);

  return <div id="gantt_here" style={{ width: "100%", height: "100vh" }}></div>;
}

export default GanttChart;
