import Cards from "./section/card";
import { Stack, HStack, Heading, Spacer, Button } from "@chakra-ui/react";
import cardDataDashboard from "../../util/cardDashboard";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();
  const menu = ["Project", "Active", "Productivity", "Teams"];

  const handleBack = () => {
    navigate("/");
  };

  return (
    <Stack>
      <NavBar menu={menu} isCurrentDashboard={true} />
      <Stack
        backgroundColor="blue.400"
        padding={5}
        justifyContent="start"
        alignItems="start"
        marginTop="90px"
      >
        <HStack width="100%" color="white">
          <Heading
            marginBottom={2}
            color="white"
            fontWeight="medium"
            fontSize="2xl"
          >
            Halo, Fira
          </Heading>
          <Spacer />
          <Button onClick={handleBack}>
            <MdOutlineArrowBackIosNew />
          </Button>
        </HStack>
        <HStack
          width="100%"
          justifyContent="center"
          alignItems="center"
          gap={5}
        >
          {cardDataDashboard.map((item) => (
            <Cards
              icon={item.icon}
              title={item.title}
              count={item.count}
              details={item.details}
              path={item.path}
            />
          ))}
        </HStack>
      </Stack>
    </Stack>
  );
};

export default Dashboard;
