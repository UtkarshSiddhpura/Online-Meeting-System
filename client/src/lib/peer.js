import Peer from "peerjs";

async function createPeer(id) {
	const peer = await new Peer(id, {
		host: "localhost",
		port: "3001",
		path: "/",
	});
	console.log("peer: ", peer);
	return peer;
}

function connectToNewUser(peer, userId, stream) {
	const call = peer.call(userId, stream);
	const video = document.createElement("video");
	call.on("stream", (userVideoStream) => {
		addVideoStream(video, userVideoStream);
	});
	call.on("close", () => {
		video.remove();
	});
}

export { createPeer };
