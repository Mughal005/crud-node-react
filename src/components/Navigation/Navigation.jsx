import React, { useEffect, useState } from "react";
import { Navbar, Container, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
	const [userName, setUserName] = useState("");
	const navigate = useNavigate();
	function handleLogout() {
		// Redirect to the main page
		localStorage.removeItem("user-data");

		navigate("/");
	}
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user-data"));
		if (user) {
			setUserName(user);
		} else {
			navigate("/");
		}
	}, []);

	return (
		<Navbar
			expand="lg"
			style={{ height: "40px", backgroundColor: "#dad9d9" }}
			className="d-flex"
		>
			<Container fluid>
				<Navbar.Brand
					// className="text-light"
					to="/"
					style={{ fontSize: "23px", fontWeight: "bold", marginLeft: "5%" }}
				>
					{/* <img
						alt="Crystal Solutions"
						src={Logo}
						width="100"
						height="30"
						className="d-inline-block align-top"
					/>{" "} */}
					{/* Leave Management System */}
				</Navbar.Brand>
				<Navbar className="d-flex justify-content-end align-items-center">
					<Dropdown>
						<Dropdown.Toggle
							style={{ backgroundColor: "#dad9d9", color: "#000" }}
						>
							<span className="fa-solid fa-ellipsis-vertical fa-lg"></span>
						</Dropdown.Toggle>
						<Dropdown.Menu align={{ lg: "end" }}>
							<Dropdown.Header>
								{userName.name && userName.name}
							</Dropdown.Header>
							<Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Navbar>
			</Container>
		</Navbar>
	);
}
