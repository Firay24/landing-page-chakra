import { FiMenu } from "react-icons/fi";
import { BiSolidShoppingBag } from "react-icons/bi";
import { FaUserGroup } from "react-icons/fa6";
import { IoEarthOutline } from "react-icons/io5";

type CardDashboard = {
  icon: JSX.Element;
  title: string;
  count: string;
  details: string;
  path: string;
};

const cardDataDashboard: CardDashboard[] = [
  {
    icon: BiSolidShoppingBag,
    title: "Project",
    count: "18",
    details: "2 completed",
    path: "project",
  },
  {
    icon: FiMenu,
    title: "Active Task",
    count: "121",
    details: "10 completed",
    path: "active",
  },
  {
    icon: FaUserGroup,
    title: "Teams",
    count: "100",
    details: "1 completed",
    path: "teams",
  },
  {
    icon: IoEarthOutline,
    title: "Productivity",
    count: "76%",
    details: "5% completed",
    path: "productivity",
  },
];

export default cardDataDashboard;
