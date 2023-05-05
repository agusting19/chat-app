import { Box } from "@chakra-ui/react";

const MessageList = ({ messages }) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      gap="5px"
      height="100%"
      width="100%"
      padding="5px"
      bg="#d9d9d9"
      borderRadius="5px"
    >
      {messages.map((message, index) => {
        return (
          <Box key={index} bg="#f2f2f2" maxWidth="50%" padding="5px 10px">
            <Box as="h3" color="#009933">
              {message.from}
            </Box>
            <Box as="p">{message.body}</Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default MessageList;
