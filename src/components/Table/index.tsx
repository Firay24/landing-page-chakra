/* eslint-disable @typescript-eslint/no-explicit-any */

// import from library used
import {
  Button,
  HStack,
  Select,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
  FormControl,
} from "@chakra-ui/react";

// import style
import {
  backgroundContainer,
  customBorder,
  borderRadius,
  primaryColor,
  primaryTextColor,
  secondaryTextColor,
} from "../styles";

// import react icons
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const TableCompo = (props: {
  tableName: string;
  description?: string;
  columns: any;
  data: any;
  pageLimit?: any;
  currentPage?: any;
  currentLimit?: any;
  setCurrentPage?: any;
  setCurrentlimit?: any;
  additionalComponent?: any;
}) => {
  return props.data.data ? (
    props.data.data.length > 0 ? (
      <Stack
        maxWidth={"1440px"}
        width={{ base: "95vw", md: "100%" }}
        marginX={"auto"}
        marginBottom={"20px"}
        padding={"5px"}
        borderRadius={borderRadius()}
        backgroundColor={backgroundContainer()}
        border={customBorder()}
      >
        <HStack
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          padding={"20px"}
        >
          <Stack lineHeight={"1"}>
            <Text fontSize={"2xl"} color={primaryColor()} as={"b"}>
              {props.tableName}
            </Text>
            <Text color={secondaryTextColor()} fontSize={"12px"}>
              {props.description}
            </Text>
          </Stack>
          {props.additionalComponent}
        </HStack>
        <Stack overflowX={"scroll"}>
          <Table>
            <Thead color={secondaryTextColor()} fontSize={"md"}>
              <Tr border={"none"}>
                {props.columns.map((cel: any, index: number) => (
                  <Td
                    borderBottom={customBorder()}
                    key={index}
                    isNumeric={cel?.align === "right" ? true : false}
                  >
                    {cel.title}
                  </Td>
                ))}
              </Tr>
            </Thead>
            <Tbody color={primaryTextColor()} fontSize={"md"}>
              {props.data.data.map((row: any, index: number) => (
                <Tr key={index}>
                  {props.columns.map((column: any, index: number) => (
                    <Td
                      border={"none"}
                      key={index}
                      isNumeric={column?.align === "right" ? true : false}
                      whiteSpace={"nowrap"}
                    >
                      {column.render ? column?.render(row) : row[column.key]}
                    </Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Stack>

        {/* //pagination in modified  */}
        {props.pageLimit ? (
          <HStack
            width="100%"
            justifyContent="center"
            marginBottom={"50px"}
            gap={8}
          >
            <Button
              isDisabled={!(props.currentPage > 1)}
              onClick={() => props.setCurrentPage(props.currentPage - 1)}
            >
              <AiOutlineLeft />
            </Button>
            <HStack gap={6}>
              <HStack gap={6}>
                {(() => {
                  const elements = [];
                  for (let i = 1; i <= props.pageLimit; i++) {
                    elements.push(
                      <Button
                        key={i}
                        backgroundColor={
                          props.currentPage === i ? "blue.500" : ""
                        }
                        padding={2}
                        rounded={"base"}
                        _hover={
                          props.currentPage === i
                            ? { backgroundColor: "blue.600" }
                            : {}
                        }
                        onClick={() => props.setCurrentPage(i)}
                      >
                        {i}
                      </Button>
                    );
                  }
                  return elements;
                })()}
                <Button
                  isDisabled={!(props.currentPage < props.pageLimit)}
                  onClick={() => props.setCurrentPage(props.currentPage + 1)}
                >
                  <AiOutlineRight />
                </Button>
              </HStack>
              <HStack>
                <FormControl display={"flex"} alignContent={"center"}>
                  <Select
                    value={props.currentLimit}
                    onChange={(e) => props.setCurrentlimit(e.target.value)}
                    color={primaryTextColor()}
                  >
                    <option>5</option>
                    <option>10</option>
                  </Select>
                </FormControl>
              </HStack>
            </HStack>
          </HStack>
        ) : null}
        {/* {props.currentLimit < props.data.totalItems ? (
          <HStack justifyContent={"flex-end"} my={"20px"}>
            {props.data.prevPage != 1 && props.data.prevPage !== 0 ? (
              <>
                {props.data.prevPage - 1 > 1 ? (
                  <Button
                    size={"sm"}
                    variant={"outline"}
                    onClick={() => props.setCurrentPage(props.data.prevPage)}
                  >
                    <IoIosArrowBack />
                  </Button>
                ) : null}
                <Button
                  size={"sm"}
                  variant={"outline"}
                  onClick={() => props.setCurrentPage(1)}
                >
                  1
                </Button>
                {props.data.prevPage - 1 !== 1 ? (
                  <Button size={"sm"} variant={"outline"}>
                    ...
                  </Button>
                ) : null}
              </>
            ) : null}

            {props.data.prevPage != 0 ? (
              <Button
                size={"sm"}
                variant={"outline"}
                onClick={() => props.setCurrentPage(props.data.prevPage)}
              >
                {props.data.prevPage}
              </Button>
            ) : null}

            <Button
              size={"sm"}
              variant={"solid"}
              onClick={() => props.setCurrentPage(props.data.currentPage)}
            >
              {props.data.currentPage}
            </Button>
            {props.data.nextPage !== 0 ? (
              <Button
                size={"sm"}
                variant={"outline"}
                onClick={() => props.setCurrentPage(props.data.nextPage)}
              >
                {props.data.nextPage}
              </Button>
            ) : null}

            {props.data.nextPage != props.data.totalPages &&
            props.data.nextPage !== 0 ? (
              <>
                {props.data.nextPage + 1 !== props.data.totalPages ? (
                  <Button size={"sm"} variant={"outline"}>
                    ...
                  </Button>
                ) : null}

                <Button
                  size={"sm"}
                  variant={"outline"}
                  onClick={() => props.setCurrentPage(props.data.totalPages)}
                >
                  {props.data.totalPages}
                </Button>
                {props.data.totalPages - props.data.nextPage > 1 ? (
                  <Button
                    size={"sm"}
                    variant={"outline"}
                    onClick={() => props.setCurrentPage(props.data.nextPage)}
                  >
                    <IoIosArrowForward />
                  </Button>
                ) : null}
              </>
            ) : null}

            <Stack>
              <Select
                value={props.currentLimit}
                onChange={(e) => {
                  props.setCurrentlimit(e.target.value);
                  props.setCurrentPage(1);
                }}
                backgroundColor={inputBackgroundColor()}
                border={customBorder()}
                color={inputColor()}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </Select>
            </Stack>
          </HStack>
        ) : null} */}
      </Stack>
    ) : (
      <Stack
        maxWidth={"1440px"}
        width={{ base: "100vw", md: "100%" }}
        height={"400px"}
        marginX={"auto"}
        marginBottom={"20px"}
        padding={"5px"}
        borderRadius={borderRadius()}
        backgroundColor={backgroundContainer()}
        border={customBorder()}
      >
        <Text margin={"auto"} as={"b"} color={primaryColor()}>
          Tidak ada Data
        </Text>
      </Stack>
    )
  ) : null;
};

export default TableCompo;
