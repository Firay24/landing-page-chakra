/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import {
  Stack,
  HStack,
  Box,
  List,
  ListItem,
  Link,
  Spacer,
  Button,
  Center,
  useBreakpointValue,
  Switch,
  Text,
} from "@chakra-ui/react";
import Logo from "./sections/logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa6";
import { ThemeContext } from "../../router/appRouter";
import { backgroundContainer, customBorder, primaryTextColor } from "../styles";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

const NavBar = (props: {
  menu: string[];
  isCurrentDashboard?: boolean;
  isLandingPage?: boolean;
}) => {
  const theme: any = useContext(ThemeContext);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [currencyPage, setCurrencyPage] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleButtonDashboard = () => {
    if (currencyPage) {
      navigate("/dashboard");
    } else {
      navigate("dashboard");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
    navigate("/");
  };

  useEffect(() => {
    if (props.isLandingPage) {
      setCurrencyPage(true);
    }
  }, [props.isLandingPage]);

  return (
    <HStack
      py="6"
      px="12"
      alignItems="center"
      position="fixed"
      top="0"
      zIndex="10"
      width="100%"
      backgroundColor={backgroundContainer()}
      border={customBorder()}
    >
      <Logo logoName="weather" />
      <Spacer />
      {isMobile ? (
        <>
          {isMenuOpen ? (
            <Box
              position="fixed"
              top="80px"
              left="0px"
              textAlign="center"
              width="full"
            >
              <List spacing="20px">
                {props.menu.map((item, index) => (
                  <ListItem key={index}>
                    <Link _hover={{ textDecor: "none", color: "blue" }}>
                      {item}
                    </Link>
                  </ListItem>
                ))}
              </List>
              <Stack marginTop="25px" alignItems="center">
                <Link
                  fontWeight="medium"
                  _hover={{ textDecor: "none", color: "blue" }}
                >
                  Login
                </Link>
                <Button
                  backgroundColor="blackAlpha.800"
                  color="white"
                  width="85%"
                  _hover={{ color: "white", backgroundColor: "blackAlpha.800" }}
                >
                  Create Account
                </Button>
              </Stack>
            </Box>
          ) : null}
          <Button alignItems="center" onClick={toggleMenu}>
            {isMenuOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
          </Button>
        </>
      ) : (
        <Box>
          <List display="flex" gap="10">
            {props.menu.map((item, index) => (
              <ListItem key={index}>
                <Link
                  _hover={{ textDecor: "none", color: "blue" }}
                  color={primaryTextColor()}
                  href="table"
                >
                  {item}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
      {!isMobile ? (
        <>
          <Spacer />
          <Box>
            <Center gap="10px">
              <Button color="red.600" onClick={handleLogout}>
                <FaPowerOff />
              </Button>
              <Button
                isDisabled={props.isCurrentDashboard || false}
                onClick={handleButtonDashboard}
                backgroundColor="blackAlpha.700"
                color="white"
                _hover={{ color: "white", backgroundColor: "blackAlpha.800" }}
              >
                Dashboard
              </Button>
              <Text color="yellow.400" fontSize="2xl">
                {theme.currentTheme ? <BsFillSunFill /> : <MdDarkMode />}
              </Text>
              <Switch
                isChecked={theme.currentTheme}
                onChange={theme.switchTheme}
              />
            </Center>
          </Box>
        </>
      ) : null}
    </HStack>
  );
};

export default NavBar;
