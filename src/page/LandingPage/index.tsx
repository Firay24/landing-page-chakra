import { Stack } from "@chakra-ui/react";
import NavBar from "../../components/Shared/NavBar"
import HeroSection from "../../components/Hero"
import LogoSection from "../../components/Logo"

const LandingPage = () => {
  const menu = ["Research", "Climate", "Service", "About Us"];
  return (
    <Stack>
      <NavBar menu={menu}></NavBar>
      <HeroSection />
      <LogoSection />
    </Stack>
  )
}

export default LandingPage