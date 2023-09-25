routerAdd("GET", "/rooms/:roomID", (c) => {
    console.log("why not");
    var sockett = require("socket.io");
    console.log("socket: ", sockett);
    // const server = io.listen(3000);

    // server.on("connection", function (socket) {
    //     console.log("user connected");
    //     socket.emit("welcome", "welcome man");
    // });

    const roomID = c.pathParam("roomID");
    const record = c.get("authRecord");
    return c.json(200, { record: record });
});
