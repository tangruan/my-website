const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 5000 });

server.on("connection", (ws) => {
  console.log("Client connected");
  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);
  });
  ws.send("Hello from server");
});

console.log("WebSocket server is running on ws://localhost:5000");
