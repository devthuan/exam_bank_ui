import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Document from "../pages/Document/Document";
import Exam from "../pages/Exam/Exam";
import Home from "../pages/Home/Home";
import Major from "../pages/Major/Major";
import Subject from "../pages/Subject/Subject";

const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/document", component: Document, layout: DefaultLayout },
  { path: "/major/:nameUni", component: Major, layout: DefaultLayout },
  {
    path: "/major/:nameUni/:nameMajor",
    component: Subject,
    layout: DefaultLayout,
  },
  {
    path: "/major/:nameUni/:nameMajor/:nameSub",
    component: Exam,
    layout: DefaultLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
