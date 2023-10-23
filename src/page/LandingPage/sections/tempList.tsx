import { HStack, Text } from "@chakra-ui/react";
import { primaryTextColor } from "../../../components/styles";

const TempList = (props: { indicator: string; value: string }) => {
  return (
    <HStack>
      <HStack justifyContent="center" alignItems="center">
        <Text color="blue.700" fontWeight="semibold">
          {props.indicator}
        </Text>
        <Text color={primaryTextColor()}>{props.value}</Text>
      </HStack>
    </HStack>
  );
};

export default TempList;
