import { useState, useEffect, useRef } from "react";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Form } from "react-router-dom";

import { createNewRoom, joinByRoomID } from "@/lib/peer";

export default function Home() {
	const [roomName, setRoomName] = useState("");
	const videoRef = useRef(null);
	const videoRef1 = useRef(null);
	const [stream, setStream] = useState(undefined);

	const getMedia = async () => {
		const videoStream = await navigator.mediaDevices.getUserMedia({
			video: true,
			audio: true,
		});
		console.log(videoStream);
		setStream(videoStream);
		videoRef.current.srcObject = videoStream;
	};

	const onChangeHandler = (e) => {
		setRoomName(e.target.value);
	};

	const createRoom = async (e) => {
		e.preventDefault();
		await getMedia();
		// TODO X roomName hostid
		const myPeer = createNewRoom(roomName, stream, videoRef1);
	};

	const joinRoom = async () => {
		await getMedia();
		joinByRoomID(roomName, stream, videoRef1);
	};

	return (
		<>
			<video autoPlay muted ref={videoRef} controls />
			<video autoPlay ref={videoRef1} controls />
			<Box component="form" onSubmit={createRoom} sx={{ m: 3 }}>
				<TextField margin="normal" required fullWidth id="roomName" label="Enter room Name" name="roomName" autoFocus value={roomName} onChange={onChangeHandler} />
				<Box sx={{ mt: 2 }}>
					<Button variant="contained" type="submit" sx={{ mr: 2, mb: 2 }}>
						Create A Room
					</Button>
					<Button variant="contained" type="button" onClick={joinRoom} sx={{ mb: 2 }}>
						Join a Room
					</Button>
				</Box>
			</Box>
			<Form method="post" action="/auth">
				<Button variant="outlined" type="submit" name="intent" value="sign-out" sx={{ ml: 3 }}>
					Sign Out
				</Button>
			</Form>
		</>
	);
}
