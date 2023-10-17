import React, { useState } from "react";
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
} from "@chakra-ui/react";
import Logo from "./logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

interface NavBarProps {
  menu: string[];
}

const NavBar: React.FC<NavBarProps> = ({ menu }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HStack
      py="6"
      px="12"
      alignItems="center"
      position="fixed"
      top="0"
      zIndex="10"
      width="100%"
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
                {menu.map((item, index) => (
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
            {menu.map((item, index) => (
              <ListItem key={index}>
                <Link _hover={{ textDecor: "none", color: "blue" }}>
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
              <Link
                fontWeight="medium"
                _hover={{ textDecor: "none", color: "blue" }}
              >
                Login
              </Link>
              <Button
                backgroundColor="blackAlpha.800"
                color="white"
                _hover={{ color: "white", backgroundColor: "blackAlpha.800" }}
              >
                Create Account
              </Button>
            </Center>
          </Box>
        </>
      ) : null}
    </HStack>
  );
};

export default NavBar;
