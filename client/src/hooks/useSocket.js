import { useEffect, useRef, useState, useCallback } from "react";
import io from "socket.io-client";

export const useSocket = () => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io();

    const receiveMsg = (message) => {
      setMessages((messages) => [...messages, message]);
    };
    socketRef.current.on("message", receiveMsg);

    return () => {
      socketRef.current.off("message", receiveMsg);
    };
  }, []);

  const sendMessage = useCallback((message) => {
    socketRef.current.emit("message", message);
    const newMessage = { body: message, from: "Me" };
    setMessages((messages) => [...messages, newMessage]);
  }, []);

  return [messages, sendMessage];
};
