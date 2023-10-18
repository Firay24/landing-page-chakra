import { useNavigate } from "react-router-dom";
import { HStack, Card, CardBody, Text, Button, Spacer } from "@chakra-ui/react";
import { BiSolidShoppingBag } from "react-icons/bi";

const Cards = (props: {
  icon: JSX.Element;
  title: string;
  count: string;
  details: string;
  path: string;
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(props.path);
  };
  return (
    <Card
      width="20%"
      onClick={handleClick}
      _hover={{ backgroundColor: "gray.200" }}
      cursor="pointer"
    >
      <CardBody>
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
