/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HStack,
  Stack,
  Heading,
  Spacer,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import NavBar from "../../../../../components/Navbar";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { primaryTextColor } from "../../../../../components/styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { decrypt } from "../../../../../util/descrypt";
import qs from "qs";
import { encrypt } from "../../../../../util/encrypt";
import { useDispatch, useSelector } from "react-redux";
import { selectPropertyStatus } from "../../../../../state/selectors/property";
import { editProperty } from "../../../../../state/actions/property";

const EditPropertiPage = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectPropertyStatus);
  const menu = ["Project", "Active", "Productivity", "Teams"];
  const navigate = useNavigate();
  const { id } = useParams();
  const [prevProperti, setPrevProperti] = useState({
    property_name: "",
    alamat: "",
    description: "",
    is_premium: false,
    image_url: "http://dummyimage.com/171x148.png/ff4444/ffffff",
  });

  const [properti, setProperti] = useState({
    property_name: "",
    alamat: "",
    description: "",
    image_url: "http://dummyimage.com/171x148.png/ff4444/ffffff",
    is_premium: false,
  });

  const getData = async (idproperti: any) => {
    await axios
      .get(
        `https://probation.sirkell.com/probation/test/properties/${idproperti}`
      )
      .then((res: any) => {
        const result = decrypt(res.data);
        setPrevProperti(result.data);
      })
      .catch((error) => {
        console.log(error.response.status);
      });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "is_premium") {
      const updateType = value === "true";
      console.log(updateType);
      setProperti((prevState) => ({
        ...prevState,
        [name]: updateType,
      }));
    } else {
      setProperti((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleBack = () => {
    navigate("/dashboard");
  };

  const handleSubmit = async (id: any) => {
    try {
      const data = {
        payload: encrypt(properti),
      };
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      await axios.patch(
        `https://probation.sirkell.com/probation/test/properties/${id}`,
        qs.stringify(data),
        config
      );
      alert("Sucessfully");
      navigate(`/dashboard/properti/${id}`);
    } catch (error) {
      console.error("failed to edit data");
    }
  };

  const onUpdateProperty = (e: any) => {
    e.preventDefault();
    dispatch(editProperty(properti, id));
    if (status === "default") {
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    if (prevProperti) {
      setProperti({
        property_name: prevProperti.property_name,
        alamat: prevProperti.alamat,
        description: prevProperti.description,
        image_url: "http://dummyimage.com/171x148.png/ff4444/ffffff",
        is_premium: prevProperti.is_premium,
      });
    }
  }, [prevProperti]);

  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <Stack>
      <NavBar menu={menu} isCurrentDashboard={true} />
      <Stack
        marginTop="100px"
        marginLeft="50px"
        marginRight="50px"
        marginBottom="30px"
        color={primaryTextColor()}
      >
        <HStack>
          <Heading>Edit Data</Heading>
          <Spacer />
          <Button onClick={handleBack}>
            <MdOutlineArrowBackIosNew />
          </Button>
        </HStack>
        <form onSubmit={onUpdateProperty}>
          <Stack marginTop="20px">
            <FormControl display="flex" flexDirection="column" gap={6}>
              <Stack>
                <Stack>
                  <FormLabel>Nama Properti</FormLabel>
                  <Input
                    type="text"
                    name="property_name"
                    value={properti.property_name}
                    onChange={handleChange}
                  />
                </Stack>
                <Stack>
                  <FormLabel>Alamat</FormLabel>
                  <Input
                    type="text"
                    name="alamat"
                    value={properti.alamat}
                    onChange={handleChange}
                  />
                </Stack>
                <Stack>
                  <FormLabel>Status</FormLabel>
                  <Select
                    name="is_premium"
                    placeholder="Select status"
                    value={properti.is_premium ? "true" : "false"}
                    onChange={handleChange}
                  >
                    <option value="true">Premium</option>
                    <option value="false">No-premium</option>
                  </Select>
                </Stack>
                <Stack>
                  <FormLabel>Deskripsi</FormLabel>
                  <Textarea
                    name="description"
                    value={properti.description}
                    onChange={handleChange}
                  />
                </Stack>
              </Stack>
              <Stack>
                <Button type="submit">Submit</Button>
              </Stack>
            </FormControl>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
};

export default EditPropertiPage;
