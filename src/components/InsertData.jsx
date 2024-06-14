import React, { useRef, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";

export default function InsertData({ updateItem, clearUpdate, setRefresh }) {
	const title = useRef("");
	const body = useRef("");

	useEffect(() => {
		if (updateItem) {
			title.current.value = updateItem.title;
			body.current.value = updateItem.body;
		}
	}, [updateItem]);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user-data"));
		setUserId(user);
	}, []);

	const [userId, setUserId] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (updateItem) {
			axios
				.post("http://localhost:3001/API/update-todo", {
					id: updateItem.id,
					title: title.current.value,
					body: body.current.value,
				})
				.then((res) => {
					setRefresh((pre) => pre + 1);
					clearUpdate();
					title.current.value = "";
					body.current.value = "";
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			axios
				.post("http://localhost:3001/API/add-todo", {
					title: title.current.value,
					body: body.current.value,
					userid: userId.id,
				})
				.then((res) => {
					setRefresh((pre) => pre + 1);
					title.current.value = "";
					body.current.value = "";
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};
	return (
		<>
			<Container style={{ width: "40%" }}>
				<Form
					className="my-4"
					onSubmit={handleSubmit}
					// style={{ minHeight: "30px", maxHeight: "30px" }}
				>
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Label className="label">TITLE</Form.Label>
						<Form.Control
							className="border-dark"
							type="text"
							ref={title}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Label className="label">BODY</Form.Label>
						<Form.Control
							className="border-dark"
							as="textarea"
							rows={3}
							ref={body}
							required
						/>
					</Form.Group>
					<div className="d-flex justify-content-end">
						<Button type="submit">{updateItem ? "UPDATE" : "ADD TODO"}</Button>
					</div>
				</Form>
			</Container>
		</>
	);
}
