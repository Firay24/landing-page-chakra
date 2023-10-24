// import library used
import { HStack, Text } from "@chakra-ui/react";
// import icons from react-icons
import {
  PiNotionLogoBold,
  PiPaperPlaneBold,
  PiPhosphorLogoBold,
  PiRecordBold,
} from "react-icons/pi";

const LogoSection = () => {
  return (
    <HStack
      marginY="70px"
      justifyContent="center"
      alignItems="center"
      gap={18}
      color={"gray.500"}
    >
      <HStack fontSize="4xl">
        <PiNotionLogoBold />
        <Text fontSize="xl">Company West</Text>
      </HStack>
      <HStack fontSize="4xl">
        <PiPaperPlaneBold />
        <Text fontSize="xl">Paper Plane</Text>
      </HStack>
      <HStack fontSize="4xl">
        <PiPhosphorLogoBold />
        <Text fontSize="xl">PostPhore</Text>
      </HStack>
      <HStack fontSize="4xl">
        <PiRecordBold />
        <Text fontSize="xl">Record Studio</Text>
      </HStack>
    </HStack>
  );
};

export default LogoSection;
