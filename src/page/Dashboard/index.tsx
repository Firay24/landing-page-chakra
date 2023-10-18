import Cards from "./card";
import { Stack, HStack, Heading } from "@chakra-ui/react";
import cardDataDashboard from "../../util/cardDashboard";

const Dashboard = () => {
  return (
    <Stack>
      <Stack
        backgroundColor="blue.400"
        padding={5}
        justifyContent="start"
        alignItems="start"
      >
        <Heading
          marginBottom={2}
          color="white"
          fontWeight="medium"
          fontSize="2xl"
        >
          Halo, Fira
        </Heading>
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
            />
          ))}
        </HStack>
      </Stack>
    </Stack>
  );
};

export default Dashboard;
