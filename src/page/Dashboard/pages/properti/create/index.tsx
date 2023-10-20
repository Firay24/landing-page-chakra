/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormLabel,
  Stack,
  Heading,
  Input,
  Textarea,
  Select,
  Button,
} from "@chakra-ui/react";
import NavBar from "../../../../../components/Navbar";
import { useState } from "react";
import { encrypt } from "../../../../../util/encrypt";
import axios from "axios";

const CreatePage = () => {
  const menu = ["Project", "Active", "Productivity", "Teams"];

  const [properti, setProperti] = useState({
    property: {
      property_name: "",
      alamat: "",
      description: "",
      image_url: "http://dummyimage.com/171x148.png/ff4444/ffffff",
      is_premium: false,
    },
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProperti((prevState) => ({
      ...prevState,
      property: {
        ...prevState.property,
        [name]: value,
      },
    }));
  };
  console.log(encrypt(properti));
  console.log(properti);

  const handleSubmit = async () => {
    try {
      await axios.post(
        "https://probation.sirkell.com/probation/test/properties",
        encrypt(properti)
      );
      alert("Sucessfully");
    } catch (error) {
      console.error("failed to create data");
    }
  };

  return (
    <Stack>
      <NavBar menu={menu} />
      <Stack
        marginTop="100px"
        marginLeft="50px"
        marginRight="50px"
        marginBottom="50px"
      >
        <Heading>Tambah Properti</Heading>
        <Stack marginTop="20px">
          <FormControl display="flex" flexDirection="column" gap={6}>
            <Stack>
              <Stack>
                <FormLabel>Nama Properti</FormLabel>
                <Input
                  type="text"
                  name="property_name"
                  value={properti.property.property_name}
                  onChange={handleChange}
                />
              </Stack>
              <Stack>
                <FormLabel>Alamat</FormLabel>
                <Input
                  type="text"
                  name="alamat"
                  value={properti.property.alamat}
                  onChange={handleChange}
                />
              </Stack>
              <Stack>
                <FormLabel>Status</FormLabel>
                <Select
                  name="is_premium"
                  placeholder="Select status"
                  value={properti.property.is_premium}
                  onChange={handleChange}
                >
                  <option value={true}>Premium</option>
                  <option value={false}>No-premium</option>
                </Select>
              </Stack>
              <Stack>
                <FormLabel>Deskripsi</FormLabel>
                <Textarea
                  name="description"
                  value={properti.property.description}
                  onChange={handleChange}
                />
              </Stack>
            </Stack>
            <Stack>
              <Button onClick={handleSubmit}>Submit</Button>
            </Stack>
          </FormControl>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CreatePage;
