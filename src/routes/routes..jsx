import AuthenticateLayout from "../layouts/AuthenticateLayout/AuthenticateLayout";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import ExamLayout from "../layouts/ExamLayout/ExamLayout";
import Document from "../pages/Document/Document";
import Exam from "../pages/Exam/Exam";
import Home from "../pages/Home/Home";
import Login from "../pages/Authenticate/Login";
import Major from "../pages/Major/Major";
import Subject from "../pages/Subject/Subject";
import Test from "../pages/Test/Test";
import Register from "../pages/Authenticate/Register";
import AccountAuthen from "../pages/Authenticate/AccountAuthen";

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
  {
    path: "/test/:idExam",
    component: Test,
    layout: ExamLayout,
  },
  {
    path: "/login",
    component: Login,
    layout: AuthenticateLayout,
  },
  {
    path: "/register",
    component: Register,
    layout: AuthenticateLayout,
  },
  {
    path: "/account-authentication",
    component: AccountAuthen,
    layout: AuthenticateLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
