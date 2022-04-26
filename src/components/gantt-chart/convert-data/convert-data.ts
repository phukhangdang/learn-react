import fakeData from "./fake-response-data.json";

export function convertData() {
  const projectWorkItems = fakeData.projectWorkItems;
  const ganttChartDto: GanttChartDto = {
    data: [],
    link: [],
  };

  projectWorkItems.forEach((item) => {
    const target = mapping(item);
    ganttChartDto.data.push(target);
  });

  console.log(ganttChartDto);

  return ganttChartDto;
}

function mapping(source: any) {
  const target: IData = {
    id: source.id,
    text: source.name,
    start_date: convertDate(source.startAt),
    end_date: convertDate(source.endAt),
    // duration: source.duration,
    progress: source.constructionProgress,
    open: true,
    parent: source.parentId,
  };

  return target;
}

function convertDate(source: string) {
  const timestamp = Date.parse(source);
  if (isNaN(timestamp) === false) {
    const date = new Date(timestamp);

    const yyyy = date.getFullYear();
    let mm: any = date.getMonth() + 1; // Months start at 0!
    let dd: any = date.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const result = dd + "-" + mm + "-" + yyyy;

    return result;
  } else {
    return "";
  }
}

type GanttChartDto = {
  data: IData[];
  link: ILink[];
};

type IData = {
  id: string | number;
  text: string;
  start_date?: string;
  end_date?: string;
  duration?: string | number;
  progress: string | number;
  open?: boolean;
  parent?: string | number;
};

type ILink = {
  id: string | number;
  source: string | number;
  targer: string | number;
  type: string | number;
};
