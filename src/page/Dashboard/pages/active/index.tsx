// import library used
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Stack,
  Heading,
  Button,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// import global style from components folders
import { primaryTextColor } from "../../../../components/styles";

// import react icons
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const Project = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/dashboard");
  };

  return (
    <Stack>
      <HStack
        padding={3}
        marginBottom={5}
        backgroundColor="blue.400"
        color="white"
      >
        <Heading>Active Task Details</Heading>
        <Spacer />
        <Button onClick={handleBack}>
          <MdOutlineArrowBackIosNew />
        </Button>
      </HStack>

      {/* table components */}
      <TableContainer color={primaryTextColor()}>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default Project;
