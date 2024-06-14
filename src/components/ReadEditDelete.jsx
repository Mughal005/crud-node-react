import React, { useReducer, useEffect } from "react";
import { Card, Container, Button } from "react-bootstrap";
import axios from "axios";

const initialState = {
	todoData: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SUCCESS":
			return {
				todoData: action.payload,
			};
		case "FAILED":
			return {
				todoData: [],
			};
		default:
			return state;
	}
};

export default function ReadEditDelete({ onEdit, refresh, setRefresh }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	// const [todoData, setTodoData] = useState([]);
	function todoList(id) {
		axios
			.get(`http://localhost:3001/API/todo-list/${id}`)
			.then((res) => {
				dispatch({ type: "SUCCESS", payload: res.data });
				// setTodoData(res.data);
			})
			.catch((err) => {
				dispatch({ type: "FAILURE" });
				console.log(err);
			});
	}

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user-data"));
		if (user && user) {
			todoList(user.id);
		}
	}, [refresh]);

	function handleDelete(id) {
		// e.preventDefault();
		axios
			.post("http://localhost:3001/API/delete-todo", {
				id: id,
			})
			.then(function (res) {
				setRefresh((prev) => prev + 1);
			})
			.catch(function (err) {
				console.log(err);
			});
	}

	return (
		<>
			<Container style={{ width: "60%" }}>
				{state.todoData.map((item, i) => (
					<Card className="my-3" key={i}>
						<Card.Body className="d-flex justify-content-between align-items-center col-12">
							<h4 className="col-2">{item.title}</h4>
							<p className="col-8">{item.body}</p>
							<div className="d-flex justify-content-end col-2">
								<Button
									variant="success"
									onClick={() => onEdit(item)}
									className="me-2"
								>
									Edit
								</Button>
								<Button variant="danger" onClick={() => handleDelete(item.id)}>
									Delete
								</Button>
							</div>
						</Card.Body>
					</Card>
				))}
			</Container>
		</>
	);
}
