import { Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { backgroundColor } from "../components/Navbar/styles";

const Layout = () => {
  return (
    <Stack backgroundColor={backgroundColor()} minHeight={"100vh"}>
      <Outlet />
    </Stack>
  );
};

export default Layout;
