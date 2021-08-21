import { Button } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import firebase from "firebase";

function ChatInput({ channelName, channelId }) {
	const [input, setInput] = useState("");
	const sendMessage = (e) => {
		e.preventDefault();

		if (!channelId) {
			return false;
		}

		db.collection("rooms").doc(channelId).collection("messages").add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			user: "Emmanuel Kolawole",
			userImage:
				"https://scontent-frx5-2.xx.fbcdn.net/v/t1.6435-9/119282954_3774766162536918_9041178260190273021_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=J58OnOIWLygAX9DdnJ7&_nc_ht=scontent-frx5-2.xx&oh=ead394e022f537ea3f29abc853ca42b2&oe=6144F916",
		});

		setInput("");
	};

	return (
		<ChatInputContainer>
			<form>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder={`Message here`}
				/>
				<Button hidden type="submit" onClick={sendMessage}>
					SEND
				</Button>
			</form>
		</ChatInputContainer>
	);
}

export default ChatInput;

const ChatInputContainer = styled.div`
	border-radius: 20px;

	> form {
		position: relative;
		display: flex;
		justify-content: center;
	}

	> form > input {
		position: fixed;
		bottom: 30px;
		width: 60%;
		border: 1px solid gray;
		border-radius: 3px;
		padding: 20px;
		outline: none;
	}

	> form > button {
		display: none !important;
	}
`;
