import { useState, useEffect, useRef } from "react";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { createNewRoomAndSubscribe, joinRoomByID } from "@/lib/pocketbase";

export default function Dashboard() {
	const [roomName, setRoomName] = useState("");
	const videoRef = useRef(null);
	const videoRef1 = useRef(null);
	const [stream, setStream] = useState(undefined);

	useEffect(() => {
		const func = async () => {
			try {
				navigator.mediaDevices
					.getUserMedia({
						video: true,
						audio: true,
					})
					.then((stream) => {
						setStream(stream);
						videoRef.current.srcObject = stream;
						videoRef.current.play();
					});
			} catch (e) {
				console.log(e);
			}
		};
		func();
	}, []);

	const onChangeHandler = (e) => {
		setRoomName(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// TODO X roomName hostid
		const myPeer = createNewRoomAndSubscribe(roomName, stream);
		myPeer.on("call", (call) => {
			call.on("stream", (userVideoStream) => {
				videoRef1.current.srcObject = userVideoStream;
				videoRef1.current.play();
				console.log("VIDEO", userVideoStream);
			});
			console.log("ans call");
			call.answer(stream);
		});
	};

	// TODO
	const joinRoom = () => {
		const myPeer = joinRoomByID();
		myPeer.on("open", (id) => {
			const call = myPeer.call(roomName, stream);
			console.log("Call: ", call);
			call.on(
				"stream",
				(userVideoStream) => {
					console.log("VIDEO", userVideoStream);
					// addVideoStream(video, userVideoStream);
					videoRef1.current.srcObject = userVideoStream;
					videoRef1.current.play();
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
	};

	return (
		<>
			<video ref={videoRef} controls />
			<video ref={videoRef1} controls />
			<Box component="form" onSubmit={handleSubmit} sx={{ m: 3 }}>
				<TextField
					margin="normal"
					required
					fullWidth
					id="roomName"
					label="Enter room Name"
					name="roomName"
					autoFocus
					value={roomName}
					onChange={onChangeHandler}
				/>
				<Box sx={{ mt: 2 }}>
					<Button
						variant="contained"
						type="submit"
						sx={{ mr: 2, mb: 2 }}
					>
						Create A Room
					</Button>
					<Button
						variant="contained"
						type="button"
						onClick={joinRoom}
						sx={{ mb: 2 }}
					>
						Join a Room
					</Button>
				</Box>
			</Box>
		</>
	);
}
