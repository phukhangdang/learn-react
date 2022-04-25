import React, { useEffect } from "react";
import { gantt } from "./dhtmlxgantt";
import "./gantt-chart-css/dhtmlxgantt.scss";
import { useGanttChart } from "./GanttChartHook";

type IProps = {
  data?: any;
  onResizeProgress?: any;
  onAddTask?: any;
  onCreateLink?: any;
  onDeleteLink?: any;
  deleteLink?: any;
};

function GanttChart(props: IProps) {
  const [deleteLink, zoomIn, zoomOut] = useGanttChart();

  useEffect(() => {
    var zoomConfig = {
      levels: [
        // hours
        {
          name: "hour",
          scale_height: 27,
          scales: [
            { unit: "day", step: 1, format: "%d %M" },
            { unit: "hour", step: 1, format: "%H:%i" },
          ],
        },
        // days
        {
          name: "day",
          scale_height: 27,
          scales: [{ unit: "day", step: 1, format: "%d %M" }],
        },
        // weeks
        {
          name: "week",
          scale_height: 50,
          scales: [
            {
              unit: "week",
              step: 1,
              format: function (date: any) {
                var dateToStr = gantt.date.date_to_str("%d %M");
                var endDate = gantt.date.add(date, -6, "day");
                var weekNum = gantt.date.date_to_str("%W")(date);
                return (
                  "#" +
                  weekNum +
                  ", " +
                  dateToStr(date) +
                  " - " +
                  dateToStr(endDate)
                );
              },
            },
            { unit: "day", step: 1, format: "%j %D" },
          ],
        },
        // months
        {
          name: "month",
          scale_height: 50,
          scales: [
            { unit: "month", step: 1, format: "%F, %Y" },
            {
              unit: "week",
              step: 1,
              format: function (date: any) {
                var dateToStr = gantt.date.date_to_str("%d %M");
                var endDate = gantt.date.add(
                  gantt.date.add(date, 1, "week"),
                  -1,
                  "day"
                );
                return dateToStr(date) + " - " + dateToStr(endDate);
              },
            },
          ],
        },
        // quarters
        {
          name: "quarter",
          height: 50,
          scales: [
            {
              unit: "quarter",
              step: 3,
              format: function (date: any) {
                var dateToStr = gantt.date.date_to_str("%M %y");
                var endDate = gantt.date.add(
                  gantt.date.add(date, 3, "month"),
                  -1,
                  "day"
                );
                return dateToStr(date) + " - " + dateToStr(endDate);
              },
            },
            { unit: "month", step: 1, format: "%M" },
          ],
        },
        // years
        {
          name: "year",
          scale_height: 50,
          scales: [
            {
              unit: "year",
              step: 5,
              format: function (date: any) {
                var dateToStr = gantt.date.date_to_str("%Y");
                var endDate = gantt.date.add(
                  gantt.date.add(date, 5, "year"),
                  -1,
                  "day"
                );
                return dateToStr(date) + " - " + dateToStr(endDate);
              },
            },
          ],
        },
        // decades
        {
          name: "year",
          scale_height: 50,
          scales: [
            {
              unit: "year",
              step: 100,
              format: function (date: any) {
                var dateToStr = gantt.date.date_to_str("%Y");
                var endDate = gantt.date.add(
                  gantt.date.add(date, 100, "year"),
                  -1,
                  "day"
                );
                return dateToStr(date) + " - " + dateToStr(endDate);
              },
            },
            {
              unit: "year",
              step: 10,
              format: function (date: any) {
                var dateToStr = gantt.date.date_to_str("%Y");
                var endDate = gantt.date.add(
                  gantt.date.add(date, 10, "year"),
                  -1,
                  "day"
                );
                return dateToStr(date) + " - " + dateToStr(endDate);
              },
            },
          ],
        },
      ],
      useKey: "ctrlKey",
      trigger: "wheel",
      // element: function () {
      //   return gantt.$root.querySelector(".gantt_task");
      // },
    };

    gantt.ext.zoom.init(zoomConfig);

    gantt.ext.zoom.setLevel("day");

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

  return (
    <>
      <div className="gantt_control">
        <input type="button" value="Zoom In" onClick={zoomIn} />
        <input type="button" value="Zoom Out" onClick={zoomOut} />
      </div>
      <div id="gantt_here" style={{ width: "100%", height: "100vh" }}></div>
    </>
  );
}

export default GanttChart;
