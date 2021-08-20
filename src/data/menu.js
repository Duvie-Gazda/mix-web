import { MdGroup } from "react-icons/md";
import { IoMegaphone, IoPerson, IoCall, IoSettings } from "react-icons/io5";

export const menu = [
  {
    id: 1,
    icon: <MdGroup size={"20px"} />,
    title: "Нова група",
  },
  {
    id: 2,
    icon: <IoMegaphone size={"20px"} />,
    title: "Новий канал",
  },
  {
    id: 3,
    icon: <IoPerson size={"20px"} />,
    title: "Контакти",
  },
  {
    id: 4,
    icon: <IoCall size={"20px"} />,
    title: "Виклики",
  },
  {
    id: 5,
    icon: <IoSettings size={"20px"} />,
    title: "Налаштування",
  },
];
