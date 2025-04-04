// Icons
import CourseIcon from "./icons/Course_Icon";
import ServiceIcon from "./icons/Service_Icon";
import BookIcon from "./icons/Book_Icon";

import { firstLevelMenuItem } from "@/interfaces/menu.interface";
import { TopPageCategory } from "@/interfaces/page.interface";

export const firstLevelMenu: firstLevelMenuItem[] = [
    { route: "courses", name: "Courses", icon: <CourseIcon />, id: TopPageCategory.Courses }, 
    { route: "services", name: "Services", icon: <ServiceIcon />, id: TopPageCategory.Services },
    { route: "tutors", name: "Tutors", icon: <BookIcon />, id: TopPageCategory.Tutors },
  ];