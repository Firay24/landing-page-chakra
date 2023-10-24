/* eslint-disable @typescript-eslint/no-explicit-any */

// import library used
import {
  HStack,
  Heading,
  Stack,
  Image,
  Text,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import component
import NavBar from "../../../../../components/Navbar";
import Loading from "../../../../../components/Loading";

// import icons from react-icons
import { FaStar } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { primaryTextColor } from "../../../../../components/styles";
import { BiSolidPencil } from "react-icons/bi";

// import state global and action from redux flow
import {
  selectProperty,
  selectPropertyStatus,
} from "../../../../../state/selectors/property";
import { fetchPropertyByID } from "../../../../../state/actions/property";
import { fetchByIdProperty } from "../../../../../thunk/property";

export const PropertiPage = () => {
  const dispatch = useDispatch();
  // const property = useSelector(selectProperty);
  // const status = useSelector(selectPropertyStatus);
  const menu = ["Project", "Active", "Productivity", "Teams"];
  const { id } = useParams();
  const navigate = useNavigate();
  const { property, status } = useSelector((state: any) => state.property);

  // handle button back to dashboard page
  const handleBack = () => {
    navigate("/dashboard");
  };

  // handle button edit to edit page
  const handleEdit = () => {
    navigate(`/dashboard/properti/edit/${id}`);
  };

  // useEffect call api function when dispatch effect
  // useEffect(() => {
  //   dispatch(fetchPropertyByID(id));
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchByIdProperty(id));
  }, [dispatch]);

  return (
    <Stack>
      <NavBar menu={menu} isCurrentDashboard={true}></NavBar>
      {status === "default" ? (
        // show this component if when finished process call api
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
        // if status "loading", show Loading compoenent
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
