import { Navigate, Outlet } from "react-router-dom";

const CheckAuth = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
    return <Outlet />;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default CheckAuth;
