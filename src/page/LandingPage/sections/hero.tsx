import {
  Heading,
  Image,
  Stack,
  chakra,
  Text,
  Card,
  CardBody,
  HStack,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";
import HeroImage from "../../../assets/hero.jpg";
import { AiFillCloud } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import TempList from "./tempList";
import dataTemp from "../../../util/dataTemp";
import {
  backgroundContainer,
  primaryTextColor,
} from "../../../components/Navbar/styles";

const HeroSection = () => {
  console.log(dataTemp);
  return (
    <Stack>
      <Stack
        paddingX="10"
        paddingY="8"
        marginY="60px"
        height="70vh"
        bgPosition="top"
        bgSize="cover"
        position="relative"
      >
        <Image
          src={HeroImage}
          alt="hero image"
          rounded="2xl"
          width="100%"
          height="100%"
          objectFit="cover"
          objectPosition="top"
        />
      </Stack>
      <Stack
        position="absolute"
        top="160px"
        bottom="0"
        left="0"
        right="0"
        display="inline-block"
        alignItems="center"
        justifyContent="center"
        zIndex="1"
      >
        <Grid templateColumns="repeat(3, 1fr)" marginX="160px">
          <GridItem colSpan={2}>
            <Heading fontSize="5xl" fontWeight="semibold" color="gray.800">
              Provide you a world wide{" "}
              <chakra.span color="blue.700" fontWeight="bold">
                weather
              </chakra.span>{" "}
              forecast
            </Heading>
            <Text marginTop={2}>
              The world Most Accurate Forecaster. With extreme weather on the
              rise. It so easy to receive the weather conditions in your current
              location
            </Text>
          </GridItem>
          <GridItem>
            <Card
              width="fit-content"
              dropShadow="lg"
              aspectRatio="1/1"
              backgroundColor={backgroundContainer()}
            >
              <CardBody justifyContent="center" alignItems="center">
                <Stack>
                  <HStack
                    color="gray"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <HiOutlineLocationMarker />
                    <Text>Zocca</Text>
                  </HStack>
                  <HStack
                    color="gray.400"
                    fontSize="6xl"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <AiFillCloud />
                    <Text color={primaryTextColor()} fontSize="4xl">
                      235 &deg;K
                    </Text>
                  </HStack>
                  <Text
                    color="blue.500"
                    fontWeight="semibold"
                    textAlign="center"
                  >
                    Clouds
                  </Text>
                  <Text color="gray.400" textAlign="center">
                    Lon-10.99 - Lat-44.34
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </Stack>
      <Stack
        position="absolute"
        top="200px"
        bottom="0"
        left="0"
        right="0"
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex="2"
      >
        <Card
          width="80%"
          boxShadow="md"
          paddingY="2"
          paddingX="8"
          backgroundColor={backgroundContainer()}
        >
          <CardBody>
            <SimpleGrid columns={4} gridRow={2} spacing={1}>
              {(() => {
                const tempElements = [];
                for (let i = 0; i < dataTemp.length; i++) {
                  tempElements.push(
                    <TempList
                      key={i}
                      indicator={dataTemp[i].indicator}
                      value={dataTemp[i].value}
                    />
                  );
                }
                return tempElements;
              })()}
            </SimpleGrid>
          </CardBody>
        </Card>
      </Stack>
    </Stack>
  );
};

export default HeroSection;
