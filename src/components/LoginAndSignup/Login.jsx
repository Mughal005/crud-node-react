import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
function Login() {
	const navigate = useNavigate();
	const email = useRef();
	const password = useRef();

	const UserLogin = (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:3001/API/login", {
				email: email.current.value,
				password: password.current.value,
			})
			.then((response) => {
				console.log(response);
				if (response.data.success) {
					navigate("/mainPage", { replace: true });
					localStorage.setItem("user-data", JSON.stringify(response.data.user));
				} else {
					alert(response.data.message);
				}
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	return (
		<>
			<div className="loginbody">
				<div className="login-container">
					<form className="login-form">
						<div className="form-group">
							<label style={{ color: "black" }} htmlFor="username">
								Email
							</label>
							<input
								type="text"
								id="email"
								name="email"
								required
								autoComplete="off"
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
								ref={password}
							/>
						</div>
						<button className="buttons" onClick={UserLogin} type="submit">
							Login
						</button>
						<h1 className="signin-message">
							Not Have an account?{" "}
							<Link to={"/signup"} replace={true}>
								Sign Up
							</Link>{" "}
						</h1>
					</form>
				</div>
			</div>
		</>
	);
}

export default Login;
