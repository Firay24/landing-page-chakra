/* eslint-disable @typescript-eslint/no-explicit-any */

// import libray used
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  HStack,
  Button,
  Stack,
  Link,
  Spacer,
} from "@chakra-ui/react";

// import icon from react icon
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { FaCrown } from "react-icons/fa";

// import style global
import {
  backgroundContainer,
  primaryTextColor,
} from "../../../components/styles";

const CardProperties = (props: { properti: any; handleButtonDelete: any }) => {
  return (
    <Stack width="300px" height="400px">
      <Card
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        backgroundColor={backgroundContainer()}
        color={primaryTextColor()}
      >
        <Image
          src={props.properti.image_url}
          alt="properti image"
          objectFit="cover"
          roundedTop="lg"
          width="100%"
          height="200px"
        />
        <HStack
          fontSize="xl"
          color="white"
          position="absolute"
          right="2"
          top="2"
          backgroundColor={
            props.properti.is_premium ? "yellow.400" : "gray.600"
          }
          padding={2}
          rounded="full"
        >
          <FaCrown />
        </HStack>
        <CardBody>
          <Text fontSize="2xl" fontWeight="semibold">
            {props.properti.property_name}
          </Text>
          <HStack color="gray.500" fontSize="sm">
            <HiOutlineLocationMarker />
            <Text>{props.properti.alamat}</Text>
          </HStack>
          <Text fontSize="medium">{props.properti.description}</Text>
        </CardBody>
        <CardFooter paddingTop={0}>
          <Button
            backgroundColor="blue.600"
            color="white"
            _hover={{ backgroundColor: "blue.700" }}
          >
            <Link
              _hover={{ textDecor: "none" }}
              href={`/dashboard/properti/${props.properti.id}`}
            >
              More
            </Link>
          </Button>
          <Spacer />
          <Button
            backgroundColor="red.500"
            _hover={{ backgroundColor: "red.600" }}
            color="white"
            onClick={() => props.handleButtonDelete(props.properti.id)}
          >
            <MdDelete />
          </Button>
        </CardFooter>
      </Card>
    </Stack>
  );
};

export default CardProperties;
