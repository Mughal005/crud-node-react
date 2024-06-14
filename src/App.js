import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import MainPage from "./components/MainPage";
import { Routes, Route } from "react-router-dom";
import Login from "./components/LoginAndSignup/Login";
import SignUp from "./components/LoginAndSignup/SignUp";

function App() {
	return (
		<Routes className="App">
			<Route path="/" element={<Login />}></Route>
			{/* <Route path="/login" element={<Login />}></Route> */}
			<Route path="/signup" element={<SignUp />}></Route>
			<Route path="/mainPage" element={<MainPage />}></Route>
		</Routes>
	);
}

export default App;
