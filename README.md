# App de Chat con Socket.io

Este proyecto es una aplicación de chat en tiempo real, construida con Node.js, Socket.io y React. La aplicación permite a los usuarios conectarse y enviar mensajes en tiempo real a través de una interfaz de usuario web.

La aplicación utiliza el paquete `socket.io` para manejar la comunicación en tiempo real entre el servidor y los clientes. Los mensajes de los usuarios se transmiten a través de sockets, lo que permite una comunicación en tiempo real sin la necesidad de recargar la página.

## Instalación

Para instalar la aplicación, sigue estos pasos:

1. Clona este repositorio en tu máquina local.
2. Abre una terminal en el directorio raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias del servidor:

```
npm install
```

4. Luego, ve a la carpeta `client` y ejecuta el mismo comando para instalar las dependencias del cliente:

```
cd client
npm install
```

5. Para iniciar la aplicación, vuelve a la carpeta raíz y ejecuta el siguiente comando:

```
npm run dev
```

Este comando iniciará tanto el servidor como el cliente en modo de desarrollo.

## Uso

Una vez que la aplicación esté en funcionamiento, puedes abrir un navegador web y navegar a `http://localhost:4000` para ver la interfaz de usuario del chat.

<!-- Para conectarte al chat, simplemente ingresa un nombre de usuario en el campo de texto en la parte superior de la página y haz clic en el botón "Conectar". Luego, puedes enviar mensajes a otros usuarios que estén conectados al chat. -->

## Tecnologías utilizadas

Este proyecto utiliza las siguientes tecnologías:

- Node.js
- Socket.io
- React
- Vite
