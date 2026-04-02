const http = require("http");
const {Server} = require("socket.io");

function webSocket(app) {
    const server = http.createServer(app);

    const io = new Server(server, {
        path: "/socket.io",
        cors: { origin: "*" },
    });

    io.on("connection", (socket) => {
        console.log(`Socket connected: ${socket.id}`);

        socket.on("disconnect", () => {
            console.log(`Socket disconnected: ${socket.id}`);
        });
    });

    const testNamespace = io.of("/test/socket");

    testNamespace.on("connection", (socket) => {
        console.log(`/test/socket connected: ${socket.id}`);

        socket.on("message", (data) => {
            console.log("message --->", data)
            setTimeout(() => {
                socket.emit("message", `hey i have receive your request ---> ${data}`);
            }, 3000);
        });

        socket.on("disconnect", () => {
            console.log(`/test/socket disconnected: ${socket.id}`);
        });
    });
    return { server, io };
}

module.exports = webSocket;