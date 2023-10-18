import { Stack } from "@chakra-ui/react";
import NavBar from "../../components/Navbar";
import HeroSection from "./sections/hero";
import LogoSection from "./sections/logoSection";

const LandingPage = () => {
  const menu = ["Research", "Climate", "Service", "About Us"];
  return (
    <Stack>
      <NavBar menu={menu}></NavBar>
      <HeroSection />
      <LogoSection />
    </Stack>
  );
};

export default LandingPage;
