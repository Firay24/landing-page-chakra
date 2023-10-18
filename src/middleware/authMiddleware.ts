export const checkAuth = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn === "true";
};
