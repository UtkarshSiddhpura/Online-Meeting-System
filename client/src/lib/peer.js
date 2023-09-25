import Peer from "peerjs";
import { addRoomRecord } from "@/lib/pocketbase";

function createPeer() {
	return new Peer(undefined, {
		host: import.meta.env.VITE_PEERJS_HOST,
		port: import.meta.env.VITE_PEERJS_PORT,
		config: {
			iceServers: [{ url: "stun:stun.l.google.com:19302" }],
		},
	});
}

export function createNewRoom(roomName, myVideoStream, videoElementRef) {
	//TODO room will be disconnected on refresh
	const myPeer = createPeer();
	myPeer.on("open", (id) => {
		addRoomRecord(roomName, id);
		console.log("CreatedRoomID", id);
	});

	// Answer user call
	myPeer.on("call", (call) => {
		call.on("stream", (userVideoStream) => {
			videoElementRef.current.srcObject = userVideoStream;
		});
		console.log("incoming call");
		call.answer(myVideoStream);
	});
}

export function joinByRoomID(roomID, myVideoStream, videoElementRef) {
	console.log(roomID, videoElementRef);
	const myPeer = createPeer();
	myPeer.on("open", (id) => {
		// Make call with the help of roomPeerID
		const call = myPeer.call(roomID, myVideoStream);
		console.log("Call: ", call);
		call.on(
			"stream",
			(userVideoStream) => {
				videoElementRef.current.srcObject = userVideoStream;
			},
			(e) => {
				console.log("ERROR", e);
			},
		);
		call.on("open", () => {
			console.log("conn opened");
		});
		call.on("close", () => {
			console.log("conn close");
		});
	});

	// const record = await pb.collection("rooms").getOne(roomID);
	// const hostPeer = record.host;
}
