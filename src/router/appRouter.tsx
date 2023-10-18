import { Route, Routes } from "react-router-dom";
import LandingPage from "../page/LandingPage";
import Dashboard from "../page/Dashboard";
import Project from "../page/Dashboard/project";
import Login from "../page/Login";
import { checkAuth } from "../middleware/authMiddleware";

const AppRouter = () => {
  return (
    <Routes>
      {checkAuth() ? (
        <Route path="/">
          <Route index element={<LandingPage />} />
          <Route path="dashboard">
            <Route index element={<Dashboard />} />
            <Route path="project" element={<Project />} />
          </Route>
        </Route>
      ) : (
        <Route path="/*" element={<Login />} />
      )}
    </Routes>
  );
};

export default AppRouter;
