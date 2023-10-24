/* eslint-disable @typescript-eslint/no-unused-vars */
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
  Text,
} from "@chakra-ui/react";
import NavBar from "../../../../../components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { primaryTextColor } from "../../../../../components/styles";
import { useDispatch, useSelector } from "react-redux";
import { selectPropertyStatus } from "../../../../../state/selectors/property";
import { createProperty } from "../../../../../state/actions/property";
import { useForm } from "react-hook-form";

const CreatePage = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectPropertyStatus);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const menu = ["Project", "Active", "Productivity", "Teams"];
  const navigate = useNavigate();

  const [properti, setProperti] = useState({
    property_name: "",
    alamat: "",
    description: "",
    image_url: "http://dummyimage.com/171x148.png/ff4444/ffffff",
    is_premium: false,
  });

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

  const onAddProperty = (data: any) => {
    dispatch(createProperty(data));
    if (status === "default") {
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    setValue("is_premium", false);
    setValue("image_url", "http://dummyimage.com/171x148.png/ff4444/ffffff");
  }, [setValue]);

  // console.log(encrypt(properti));
  // console.log(properti);

  // const handleSubmit = async () => {
  //   try {
  //     const data = {
  //       payload: encrypt(properti),
  //     };
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //     };

  //     await axios.post(
  //       "https://probation.sirkell.com/probation/test/properties",
  //       qs.stringify(data),
  //       config
  //     );
  //     alert("Sucessfully");
  //     navigate("/dashboard");
  //   } catch (error) {
  //     console.error("failed to create data");
  //   }
  // };
  // console.log();

  return (
    <Stack color={primaryTextColor()}>
      <NavBar menu={menu} isLandingPage />
      <Stack
        marginTop="100px"
        marginLeft="50px"
        marginRight="50px"
        marginBottom="50px"
      >
        <Heading>Tambah Properti</Heading>
        <form onSubmit={handleSubmit(onAddProperty)}>
          <Stack marginTop="20px">
            <FormControl display="flex" flexDirection="column" gap={6}>
              <Stack>
                <Stack>
                  <FormLabel>Nama Properti</FormLabel>
                  <Input
                    {...register("property_name", {
                      required: "Nama harus diisi",
                    })}
                    type="text"
                    // name="property_name"
                    // value={properti.property_name}
                    // onChange={handleChange}
                  />
                  {errors.property_name && (
                    <Text>{errors.property_name.message}</Text>
                  )}
                </Stack>
                <Stack>
                  <FormLabel>Alamat</FormLabel>
                  <Input
                    {...register("alamat", {
                      required: "Alamat harus diisi",
                    })}
                    type="text"
                    // name="alamat"
                    // value={properti.alamat}
                    // onChange={handleChange}
                  />
                  {errors.alamat && <Text>{errors.alamat.message}</Text>}
                </Stack>
                <Stack>
                  <FormLabel>Status</FormLabel>
                  <Select
                    {...(register("is_premium"), { valueAsNumber: true })}
                    placeholder="Select status"
                    // name="is_premium"
                    // value={properti.is_premium ? "true" : "false"}
                    // onChange={handleChange}
                  >
                    <option value="true">Premium</option>
                    <option value="false">No-premium</option>
                  </Select>
                </Stack>
                <Stack>
                  <FormLabel>Deskripsi</FormLabel>
                  <Textarea
                    {...register("description")}
                    // name="description"
                    // value={properti.description}
                    // onChange={handleChange}
                  />
                </Stack>
              </Stack>
              <Stack>
                <Button type={"submit"}>Submit</Button>
              </Stack>
            </FormControl>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
};

export default CreatePage;
