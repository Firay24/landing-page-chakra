import { Flex } from "@chakra-ui/react";
import NavBar from "./components/Shared/NavBar";

function App() {
  const menu = ["Research", "Climate", "Service", "About Us"];
  return (
    <Flex>
      <NavBar menu={menu}></NavBar>
    </Flex>
  );
}

export default App;
