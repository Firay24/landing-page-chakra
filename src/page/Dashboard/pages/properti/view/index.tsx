/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HStack,
  Heading,
  Stack,
  Image,
  Text,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { decrypt } from "../../../../../util/descrypt";
import NavBar from "../../../../../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { primaryTextColor } from "../../../../../components/styles";
import { BiSolidPencil } from "react-icons/bi";

export const PropertiPage = () => {
  const menu = ["Project", "Active", "Productivity", "Teams"];
  const [properti, setProperti] = useState<{ data: any } | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const getData = async (idproperti: any) => {
    await axios
      .get(
        `https://probation.sirkell.com/probation/test/properties/${idproperti}`
      )
      .then((res: any) => {
        setProperti(decrypt(res.data));
      })
      .catch((error) => {
        console.log(error.response.status);
      });
  };

  const handleBack = () => {
    navigate("/dashboard");
  };

  const handleEdit = () => {
    navigate(`/dashboard/properti/edit/${id}`);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <Stack>
      <NavBar menu={menu} isCurrentDashboard={true}></NavBar>
      {properti && properti.data ? (
        <Stack
          marginTop="100px"
          marginLeft="50px"
          marginRight="50px"
          color={primaryTextColor()}
        >
          <HStack>
            <Stack
              fontSize="2xl"
              color={
                properti && properti.data.is_premium ? "yellow.400" : "gray.400"
              }
            >
              <FaStar />
            </Stack>
            <Heading>{properti && properti.data.property_name}</Heading>
            <Spacer />
            <Button onClick={handleBack}>
              <MdOutlineArrowBackIosNew />
            </Button>
          </HStack>
          <HStack>
            <HiOutlineLocationMarker />
            <Text>{properti && properti.data.alamat}</Text>
          </HStack>
          <Stack width="100%" height="250px">
            <Image
              width="full"
              height="full"
              src={properti && properti.data.image_url}
              alt="image properti"
              objectFit="cover"
              objectPosition="center"
            />
          </Stack>
          <Text>{properti && properti.data.description}</Text>
        </Stack>
      ) : null}
      <Stack position="fixed" bottom="5" right="5" zIndex="100" padding={2}>
        <Button
          backgroundColor="blue.600"
          _hover={{ backgroundColor: "blue.700" }}
          color="white"
          rounded="full"
          onClick={handleEdit}
        >
          <BiSolidPencil />
        </Button>
      </Stack>
    </Stack>
  );
};
