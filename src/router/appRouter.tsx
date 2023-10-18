import { Route, Routes } from "react-router-dom";
import LandingPage from "../page/LandingPage";
import Dashboard from "../page/Dashboard";
import Project from "../page/Dashboard/project";
import { Login } from "../page/Login";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<LandingPage />} />
        <Route path="dashboard">
          <Route index element={<Dashboard />}></Route>
          <Route path="project" element={<Project />}></Route>
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
