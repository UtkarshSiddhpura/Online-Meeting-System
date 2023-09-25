import PocketBase from "pocketbase";
import Peer from "peerjs";

function createPeer() {
	return new Peer(undefined, {
		host: "localhost",
		port: "3001",
		path: "/",
	});
}

function createNewRoomAndSubscribe(roomName) {
	//TODO will be disconnected on refresh
	const myPeer = createPeer();
	myPeer.on("open", async (id) => {
		try {
			await pb.collection("rooms").create({
				name: roomName,
				// host: window.authData.record.id, //set host
				host: window.authData.record.id,
				peerID: id,
			});
		} catch (e) {
			console.log(e.data);
		}
	});
	return myPeer;
}

function joinRoomByID(roomID, stream) {
	try {
		// const record = await pb.collection("rooms").getOne(roomID);
		// const hostPeer = record.host;
		const myPeer = createPeer();
		return myPeer;
	} catch (e) {
		console.log(e);
	}
}

const pb = new PocketBase("http://127.0.0.1:8090/");

async function login(email, password) {
	try {
		return await pb.collection("users").authWithPassword(email, password);
	} catch (e) {
		alert(e.message);
		console.log(e.data);
	}
}

async function signUp(formData) {
	try {
		const createdUser = await pb.collection("users").create(formData);
		await login(formData.email, formData.password);
	} catch (e) {
		alert(e.message);
		console.log(e.data);
	}
}

function signOut() {
	pb.authStore.clear();
}

export { pb, signOut, signUp, login, createNewRoomAndSubscribe, joinRoomByID };
