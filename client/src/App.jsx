import io from "socket.io-client";

const socket = io("http://localhost:4000");

function App() {
  return (
    <>
      <h1>Hola</h1>
    </>
  );
}

export default App;
