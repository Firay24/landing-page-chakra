import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import LandingPage from "../page/LandingPage";
import Dashboard from "../page/Dashboard";
import Project from "../page/Dashboard/pages/project";
import Active from "../page/Dashboard/pages/active";
import Teams from "../page/Dashboard/pages/teams";
import Productivity from "../page/Dashboard/pages/productivity";
import Login from "../page/Login";
import CheckAuth from "../middleware/authMiddleware";

const AppRouter = () => {
  console.log(localStorage.getItem("isLoggedIn"));
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route path="/" element={<CheckAuth />}>
          <Route index element={<LandingPage />} />
          <Route path="dashboard">
            <Route index element={<Dashboard />} />
            <Route path="project" element={<Project />} />
            <Route path="active" element={<Active />} />
            <Route path="teams" element={<Teams />} />
            <Route path="productivity" element={<Productivity />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRouter;
