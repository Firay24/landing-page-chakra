/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Image, Stack } from "@chakra-ui/react";
import NavBar from "../../components/Navbar";
import TableCompo from "../../components/Table";
import { useEffect, useState } from "react";
import axios from "axios";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import { primaryTextColor } from "../../components/styles";

const TablePage = () => {
  const menu = ["Research", "Climate", "Service", "About Us"];
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(5);
  const [pageLimit, setPageLimit] = useState(1);
  const [data, setData] = useState({});

  const getData = async () => {
    await axios
      .get(
        `https://reqres.in/api/users?page=${currentPage}&per_page=${currentLimit}`
      )
      .then((res: any) => {
        setData(res.data);
        setPageLimit(res.data.total_pages);
      })
      .catch((error) => {
        console.log(error.response.status);
      });
  };

  // const handlePage = (value: number) => {
  //   setCurrentPage(value);
  // };

  // const handlePrevButton = () => {
  //   setCurrentPage((prevPage) => prevPage - 1);
  // };

  // const handleNextButton = () => {
  //   setCurrentPage((prevPage) => prevPage + 1);
  // };

  // const handleOnChange = (event: any) => {
  //   setCurrentLimit(event.target.value);
  // };

  useEffect(() => {
    getData();
  }, [currentPage, currentLimit]);

  const columns = [
    {
      title: "Gambar",
      key: "last_name",
      render: (data: any) => (
        <Image
          src={data.avatar}
          width={"50px"}
          height={"50px"}
          objectFit={"cover"}
        />
      ),
    },
    {
      title: "Email",
      key: "email",
    },
    {
      title: "First Name",
      key: "first_name",
    },
    {
      title: "Last Name",
      key: "last_name",
    },
  ];

  return (
    <Stack>
      <NavBar menu={menu} />
      <Stack marginTop={"100px"}>
        <TableCompo
          columns={columns}
          data={data && data}
          tableName="User"
          pageLimit={pageLimit}
          currentPage={currentPage}
          setCurrentPage={(value: any) => setCurrentPage(value)}
          setCurrentlimit={(value: any) => setCurrentLimit(value)}
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
      </Stack>
    </Stack>
  );
};

export default TablePage;
