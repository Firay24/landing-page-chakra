import { Spinner, Stack } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Stack
      height="100%"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      backgroundColor="rgba(0, 0, 0, 0.5)"
      display="flex"
      alignItems="center"
      justify="center"
      zIndex="100"
    >
      <Spinner size="xl" color="blue.500" />
    </Stack>
  );
};

export default Loading;
