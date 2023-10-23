import { HStack, Image, Text } from "@chakra-ui/react";
import LogoImage from "../../../assets/logo.png";
import { primaryTextColor } from "../../styles";

const Logo = (props: { logoName: string }) => {
  return (
    <HStack gap={"5px"}>
      <Image src={LogoImage} alt="logo" boxSize="40px" />
      <Text fontSize="14px" color={primaryTextColor()} fontWeight="semibold">
        {props.logoName}
      </Text>
    </HStack>
  );
};

export default Logo;
