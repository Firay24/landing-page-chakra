// import library used
import { useNavigate } from "react-router-dom";
import { HStack, Card, CardBody, Text, Button, Spacer } from "@chakra-ui/react";

// import icons from react icons
import { BiSolidShoppingBag } from "react-icons/bi";

// import global style from components folder
import {
  backgroundContainer,
  primaryTextColor,
  backgroundColorHover,
} from "../../../components/styles";

const Cards = (props: {
  icon: JSX.Element;
  title: string;
  count: string;
  details: string;
  path: string;
}) => {
  const navigate = useNavigate();

  // handle click container in card to detail page card
  const handleClick = () => {
    navigate(props.path);
  };
  return (
    <Card
      width="20%"
      onClick={handleClick}
      _hover={{ backgroundColor: backgroundColorHover() }}
      cursor="pointer"
      backgroundColor={backgroundContainer()}
    >
      <CardBody color={primaryTextColor()}>
        <HStack>
          <Text>{props.title}</Text>
          <Spacer />
          <Button color={"gray.400"}>
            <BiSolidShoppingBag />
          </Button>
        </HStack>
        <Text fontSize={"3xl"} fontWeight={"bold"}>
          {props.count}
        </Text>
        <Text color={"gray.400"} fontSize="12px">
          {props.details}
        </Text>
      </CardBody>
    </Card>
  );
};

export default Cards;
