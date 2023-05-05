import { useState } from "react";
import { useSocket } from "./hooks/useSocket";
import { Box, Button, Input } from "@chakra-ui/react";
import MessageList from "./components/MessageList";

function App() {
  const [message, setMessage] = useState("");
  const [messages, sendMessage] = useSocket();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(message);
    setMessage("");
  };

  return (
    <Box
      as="main"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="#3C3C3C"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="5px"
        width="500px"
        height="800px"
        borderRadius="5px"
        padding="40px 30px"
        bg="#2292A4"
      >
        <MessageList messages={messages} />
        <Box
          as="form"
          display="flex"
          alignItems="center"
          width="100%"
          onSubmit={handleSubmit}
        >
          <Input
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Type your message here..."
            height="34px"
            width="100%"
            borderRadius="5px 0px 0px 5px"
            padding="15px 10px"
          />
          <Button
            bg="#F1D302"
            width="65px"
            height="34px"
            borderRadius="0px 5px 5px 0px"
            fontWeight="600"
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
