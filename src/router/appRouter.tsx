/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { PropertiPage } from "../page/Dashboard/pages/properti/view";
import TablePage from "../page/Table";
import PropertiCreatePage from "../page/Dashboard/pages/properti/create";
import EditPropertiPage from "../page/Dashboard/pages/properti/edit";
import Login from "../page/Login";
import CheckAuth from "../middleware/authMiddleware";
import { createContext, useEffect, useState } from "react";
import Layout from "../page/Layout";

export const ThemeContext: any = createContext(null);

const AppRouter = () => {
  const [currentTheme, setCurrentTheme] = useState(false);
  const switchTheme = () => {
    setCurrentTheme(!currentTheme);
    localStorage.currentTheme = !currentTheme;
  };

  useEffect(() => {
    try {
      setCurrentTheme(JSON.parse(localStorage.currentTheme));
    } catch (error) {
      setCurrentTheme(true);
      localStorage.currentTheme = true;
    }
  }, []);

  const router = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route path="/" element={<CheckAuth />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="dashboard">
              <Route index element={<Dashboard />} />
              <Route path="project" element={<Project />} />
              <Route path="active" element={<Active />} />
              <Route path="teams" element={<Teams />} />
              <Route path="productivity" element={<Productivity />} />
              <Route path="properti/:id" element={<PropertiPage />} />
              <Route path="properti/create" element={<PropertiCreatePage />} />
              <Route path="properti/edit/:id" element={<EditPropertiPage />} />
            </Route>
            <Route path="table">
              <Route index element={<TablePage />} />
            </Route>
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </>
    )
  );
  return (
    <ThemeContext.Provider value={{ currentTheme, switchTheme }}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
};

export default AppRouter;
