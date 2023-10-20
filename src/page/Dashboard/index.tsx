/* eslint-disable @typescript-eslint/no-explicit-any */
import Cards from "./section/card";
import { Stack, HStack, Heading, Spacer, Button } from "@chakra-ui/react";
import cardDataDashboard from "../../util/cardDashboard";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/Navbar";
import Loading from "../../components/Loading";
import { backgroundContainer2 } from "../../components/Navbar/styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { decrypt } from "../../util/descrypt";
import CardProperties from "./section/cardProperties";

const Dashboard = () => {
  const navigate = useNavigate();
  const menu = ["Project", "Active", "Productivity", "Teams"];
  const [properti, setProperti]: any = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    await axios
      .get("https://probation.sirkell.com/probation/test/properties")
      .then((res: any) => {
        setProperti(decrypt(res.data));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response.status);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [properti]);

  const handleBack = () => {
    navigate("/");
  };

  const handleButtonDelete = (id: any) => {
    const isConfirm = window.confirm("Yakin menghapus data?");

    if (isConfirm) {
      axios
        .delete(`https://probation.sirkell.com/probation/test/properties/${id}`)
        .then((response) => {
          if (response.status === 200) {
            console.log("success");
          }
        })
        .catch((error) => {
          console.error("failed", error);
        });
    }
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
        <Heading>Properti</Heading>
        {loading ? (
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
            {properti &&
              properti.data.map((item: any, index: number) => (
                <CardProperties
                  handleButtonDelete={() => handleButtonDelete(item.id)}
                  properti={item}
                  key={index}
                />
              ))}
          </HStack>
        )}
      </Stack>
    </Stack>
  );
};

export default Dashboard;
