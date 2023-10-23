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
import NavBar from "../../../../../components/Navbar";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { primaryTextColor } from "../../../../../components/styles";
import { BiSolidPencil } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProperty,
  selectPropertyStatus,
} from "../../../../../state/selectors/property";
import { fetchPropertyByID } from "../../../../../state/actions/property";
import Loading from "../../../../../components/Loading";

export const PropertiPage = () => {
  const dispatch = useDispatch();
  const property = useSelector(selectProperty);
  const status = useSelector(selectPropertyStatus);
  const menu = ["Project", "Active", "Productivity", "Teams"];
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/dashboard");
  };

  const handleEdit = () => {
    navigate(`/dashboard/properti/edit/${id}`);
  };

  useEffect(() => {
    dispatch(fetchPropertyByID(id));
  }, [dispatch]);

  return (
    <Stack>
      <NavBar menu={menu} isCurrentDashboard={true}></NavBar>
      {status === "default" ? (
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
                property && property.data.is_premium ? "yellow.400" : "gray.400"
              }
            >
              <FaStar />
            </Stack>
            <Heading>{property && property.data.property_name}</Heading>
            <Spacer />
            <Button onClick={handleBack}>
              <MdOutlineArrowBackIosNew />
            </Button>
          </HStack>
          <HStack>
            <HiOutlineLocationMarker />
            <Text>{property && property.data.alamat}</Text>
          </HStack>
          <Stack width="100%" height="250px">
            <Image
              width="full"
              height="full"
              src={property && property.data.image_url}
              alt="image properti"
              objectFit="cover"
              objectPosition="center"
            />
          </Stack>
          <Text>{property && property.data.description}</Text>
        </Stack>
      ) : (
        <Loading />
      )}
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
