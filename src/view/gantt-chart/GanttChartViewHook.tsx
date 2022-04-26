import { useGanttChart } from "../../components/gantt-chart/GanttChartHook";

export function useGanttChartViewHook() {
  const [deleteLink] = useGanttChart();

  const handleAddTask = (event: any) => {
    console.log(event);
  };

  const handleEditTask = (event: any) => {
    console.log(event);
  };

  const handleChangeTask = (event: any) => {
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
    handleAddTask,
    handleEditTask,
    handleChangeTask,
    handleCreateLink,
    handleDeleteLink,
  ];
}
