import { HStack, Text } from "@chakra-ui/react";

const TempList = (props: { indicator: string; value: string }) => {
  return (
    <HStack>
      <HStack justifyContent="center" alignItems="center">
        <Text color="blue" fontWeight="semibold">
          {props.indicator}
        </Text>
        <Text>{props.value}</Text>
      </HStack>
    </HStack>
  );
};

export default TempList;
