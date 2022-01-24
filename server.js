const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: "*",
  },
});

const cors = require("cors");

// app.use(cors({ origin: "http://localhost:3000" }));
// app.use(cors());

const PORT = 8080;

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

io.on("connection", (socket) => {
  console.log("a client is connected to our server using socket: ", socket.id);
  socket.emit("connection", null);

  socket.send("Hello!");
});

app.get("/", (req, res) => {
  console.log("user requested at /");
  res.send("hello world lol");
});
