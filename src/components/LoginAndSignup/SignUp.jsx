import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
function SignUp() {
	// const navigate = useNavigate();
	const name = useRef(null);
	const email = useRef();
	const password = useRef();

	const SignupUser = (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:3001/API/sign-up", {
				name: name.current.value,
				email: email.current.value,
				password: password.current.value,
			})
			.then((response) => {
				console.log(response);
				if (response.data.success) {
					name.current.value = "";
					email.current.value = "";
					password.current.value = "";
					alert(response.data.message);
				} else {
					alert(response.data.message);
				}
			})
			.catch((error) => {
				// Handle errors
				console.error("Error:", error);
			});
	};

	// Create refs for each input field

	const focusNextInput = (ref) => {
		if (ref.current) {
			ref.current.focus();
		}
	};

	// Function to handle Enter key press
	const handleEnterKeyPress = (ref, e) => {
		if (e.key === "Enter") {
			e.preventDefault(); // Prevent form submission on Enter key press
			focusNextInput(ref);
		}
	};

	return (
		<>
			<div className="loginbody">
				<div className="login-container">
					<form className="login-form">
						<div className="form-group">
							<label style={{ color: "black" }} htmlFor="name">
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								autoComplete="off"
								// onKeyDown={(e) => handleEnterKeyPress(password, e)}
								ref={name}
							/>
						</div>
						<div className="form-group">
							<label style={{ color: "black" }} htmlFor="email">
								Email
							</label>
							<input
								type="text"
								id="email"
								name="email"
								required
								autoComplete="off"
								// onKeyDown={(e) => handleEnterKeyPress(password, e)}
								ref={email}
							/>
						</div>
						<div className="form-group">
							<label style={{ color: "black" }} htmlFor="password">
								Password
							</label>
							<input
								type="password"
								id="password"
								name="password"
								required
								autoComplete="off"
								// onKeyDown={(e) => handleEnterKeyPress(Enter3, e)}
								ref={password}
							/>
						</div>
						<button className="buttons" onClick={SignupUser} type="submit">
							Sign Up
						</button>

						<h1 className="signin-message">
							Have an account?{" "}
							<Link to={"/"} replace={true}>
								Sign in
							</Link>
						</h1>
					</form>
				</div>
			</div>
		</>
	);
}

export default SignUp;
