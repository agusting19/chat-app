import { useEffect, useState } from "react";
import io from "socket.io-client";
import { Box, Button, Input } from "@chakra-ui/react";

const socket = io("http://localhost:4000");

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", message);
    const newMessage = { body: message, from: "Me" };
    setMessages([...messages, newMessage]);
    setMessage("");
  };

  useEffect(() => {
    const receiveMsg = (message) => {
      setMessages([...messages, message]);
    };
    socket.on("message", receiveMsg);

    return () => {
      socket.off("message", receiveMsg);
    };
  }, [messages]);

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
