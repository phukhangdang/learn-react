import { gantt } from "./dhtmlxgantt";

export function useGanttChart() {
  const deleteLink = (event: any) => {
    gantt.deleteLink(event);
  };

  const zoom_in = () => {
    gantt.ext.zoom.zoomIn();
  };
  const zoom_out = () => {
    gantt.ext.zoom.zoomOut();
  };

  return [deleteLink, zoom_in, zoom_out];
}
