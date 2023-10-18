import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import LandingPage from "../page/LandingPage";
import Dashboard from "../page/Dashboard";
import Project from "../page/Dashboard/project";
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
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRouter;
