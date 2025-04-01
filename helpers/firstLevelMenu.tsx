// Icons
import CourseIcon from "./icons/Course_Icon";
import ServiceIcon from "./icons/Service_Icon";
import BookIcon from "./icons/Book_Icon";
import ProductIcon from "./icons/Product_Icon";

import { firstLevelMenuItem } from "@/interfaces/menu.interface";
import { TopPageCategory } from "@/interfaces/page.interface";

export const firstLevelMenu: firstLevelMenuItem[] = [
    { route: "courses", name: "Курсы", icon: <CourseIcon />, id: TopPageCategory.Courses }, 
    { route: "services", name: "Сервисы", icon: <ServiceIcon />, id: TopPageCategory.Services },
    { route: "books", name: "Книги", icon: <BookIcon />, id: TopPageCategory.Books },
    { route: "products", name: "Продукты", icon: <ProductIcon />, id: TopPageCategory.Products }, 
  ];