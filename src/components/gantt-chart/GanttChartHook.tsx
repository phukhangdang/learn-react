import { gantt } from "./dhtmlxgantt";

export function useGanttChart() {
  const deleteLink = (event: any) => {
    gantt.deleteLink(event);
  };

  return [deleteLink];
}
