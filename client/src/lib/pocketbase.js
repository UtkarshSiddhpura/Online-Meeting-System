import PocketBase from "pocketbase";

const pb = new PocketBase(import.meta.env.VITE_PB_URL);

export async function login(email, password) {
	try {
		return await pb.collection("users").authWithPassword(email, password);
	} catch (e) {
		alert(e.message);
		console.log(e.data);
	}
}

export function isAuthenticated() {
	console.log("checking");
	if (!pb.authStore.isValid || !pb.authStore.token) return false;
	return true;
}

export async function signUp(formData) {
	try {
		const createdUser = await pb.collection("users").create(formData);
		await login(formData.email, formData.password);
	} catch (e) {
		alert(e.message);
		console.log(e.data);
	}
}

export function signOut() {
	pb.authStore.clear();
}

export function addRoomRecord(roomName, peerID) {
	//TODO Err handling
	pb.collection("rooms").create({
		name: roomName,
		host: pb.authStore.model.id,
		peerID: peerID,
	});
}
