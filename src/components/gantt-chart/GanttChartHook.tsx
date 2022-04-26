import { gantt } from "./dhtmlxgantt";

export function useGanttChart() {
  const deleteLink = (event: any) => {
    gantt.deleteLink(event);
  };

  return [deleteLink];
}

export function useGanttChartZoom() {
  const zoomIn = () => {
    gantt.ext.zoom.zoomIn();
  };

  const zoomOut = () => {
    gantt.ext.zoom.zoomOut();
  };

  const toggleFullscreen = () => {
    gantt.ext.fullscreen.toggle();
  };

  const openAll = () => {
    gantt.eachTask(function (task2open) {
      if (task2open.$level === 0) {
        gantt.open(task2open.id);
        console.log(task2open.id);
      }
    });
  };

  const closeAll = () => {
    gantt.eachTask(function (task2close) {
      if (task2close.$level === 0) {
        gantt.close(task2close.id);
      }
    });
  };

  return [zoomIn, zoomOut, toggleFullscreen, openAll, closeAll];
}
