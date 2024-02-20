import HexagonIcon from "@mui/icons-material/Hexagon";
import BusinessIcon from "@mui/icons-material/Business";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
export type Task = {
  id: number;
  image: any;
  title: string;
  status: string;
  time: string;
  days: string;
};

export type DataProps = {
  onDragEnd: (evt: React.DragEvent<HTMLDivElement>) => void;
  onDragEnter: (evt: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave: (evt: React.DragEvent<HTMLDivElement>) => void;
  onDragStart: (evt: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (
    evt: React.DragEvent<HTMLDivElement>,
    value: boolean,
    status: string
  ) => void;
  onDragOver: (evt: React.DragEvent<HTMLDivElement>) => void;
  pending: Task[];
  objOnWindow?: Task | undefined;
};

export const listItems = [
  { id: 3, icon: <ViewInArIcon /> },
];

export const recentSearch = [
  { item: "abj" },
  { item: "abj" },
  { item: "cbr" },
  { item: "crb" },
];
