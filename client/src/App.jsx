import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", message);
    const newMessage = { body: message, from: "Me" };
    setMessages([newMessage, ...messages]);
    setMessage("");
  };

  useEffect(() => {
    const receiveMsg = (message) => {
      setMessages([message, ...messages]);
    };
    socket.on("message", receiveMsg);

    return () => {
      socket.off("message", receiveMsg);
    };
  }, [messages]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button>Send</button>
      </form>
      {messages.map((message, index) => {
        return (
          <div key={index}>
            <p>
              {message.from}: {message.body}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
