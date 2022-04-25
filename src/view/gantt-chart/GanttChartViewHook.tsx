import { useGanttChart } from "../../components/gantt-chart/GanttChartHook";

export function useGanttChartViewHook() {
  const [deleteLink] = useGanttChart();

  const handleResizeProgress = (event: any) => {
    console.log(event);
  };

  const handleAddTask = (event: any) => {
    console.log(event);
  };

  const handleCreateLink = (event: any) => {
    console.log(event);
  };

  const handleDeleteLink = (event: any) => {
    console.log(event);

    deleteLink(event.id);
  };

  return [
    handleResizeProgress,
    handleAddTask,
    handleCreateLink,
    handleDeleteLink,
  ];
}
