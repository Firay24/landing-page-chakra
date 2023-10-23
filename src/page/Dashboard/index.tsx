/* eslint-disable @typescript-eslint/no-explicit-any */
import Cards from "./section/card";
import { Stack, HStack, Heading, Spacer, Button } from "@chakra-ui/react";
import cardDataDashboard from "../../util/cardDashboard";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/Navbar";
import Loading from "../../components/Loading";
import {
  backgroundContainer2,
  primaryTextColor,
} from "../../components/styles";
import { useEffect, useState } from "react";
import axios from "axios";
import CardProperties from "./section/cardProperties";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  selectProperty,
  selectPropertyStatus,
} from "../../state/selectors/property";
import { fetchProperty, removeProperty } from "../../state/actions/property";

const Dashboard = () => {
  const dispatch = useDispatch();
  const property = useSelector(selectProperty);
  const status = useSelector(selectPropertyStatus);
  const menu = ["Project", "Active", "Productivity", "Teams"];
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProperty());
  }, [dispatch]);

  const handleBack = () => {
    navigate("/");
  };

  const handleCreateButton = () => {
    navigate("properti/create");
  };

  const onDelete = (id: any) => {
    dispatch(removeProperty(id))
      .then(() => {
        dispatch(fetchProperty());
      })
      .catch((error: any) => {
        console.error("Error deleting property: ", error);
      });
  };

  return (
    <Stack>
      <NavBar menu={menu} isCurrentDashboard={true} />
      <Stack
        backgroundColor={backgroundContainer2()}
        padding={5}
        justifyContent="start"
        alignItems="start"
        marginTop="90px"
      >
        <HStack width="100%" color="white">
          <Heading
            marginBottom={2}
            color="white"
            fontWeight="medium"
            fontSize="2xl"
          >
            Halo, Fira
          </Heading>
          <Spacer />
          <Button onClick={handleBack}>
            <MdOutlineArrowBackIosNew />
          </Button>
        </HStack>
        <HStack
          width="100%"
          justifyContent="center"
          alignItems="center"
          gap={5}
        >
          {cardDataDashboard.map((item) => (
            <Cards
              icon={item.icon}
              title={item.title}
              count={item.count}
              details={item.details}
              path={item.path}
            />
          ))}
        </HStack>
      </Stack>
      <Stack marginTop="30px" justifyContent="center" alignItems="center">
        <Heading color={primaryTextColor()}>Properti</Heading>
        {status === "loading" ? (
          <Loading />
        ) : (
          <HStack
            marginTop="10px"
            width="full"
            paddingX={10}
            marginBottom="20px"
            flexWrap="wrap"
            justifyContent="center"
            gap={5}
          >
            {property &&
              property.data &&
              property.data.length > 0 &&
              property.data.map((item: any, index: number) => (
                <CardProperties
                  handleButtonDelete={() => onDelete(item.id)}
                  properti={item}
                  key={index}
                />
              ))}
          </HStack>
        )}
      </Stack>
      <Stack position="fixed" bottom="5" right="5" zIndex="100" padding={2}>
        <Button
          backgroundColor="blue.600"
          _hover={{ backgroundColor: "blue.700" }}
          color="white"
          rounded="full"
          onClick={handleCreateButton}
        >
          <AiOutlinePlus />
        </Button>
      </Stack>
    </Stack>
  );
};

export default Dashboard;
