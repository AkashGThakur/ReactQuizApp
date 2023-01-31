import React, { useState } from "react";
import "./loginform.css";

const LoginForm = () => {

	const[popupStyle, showPopup] = useState("hide");

	const popup = () => {
		showPopup("login-popup")
		setTimeout(() => showPopup("hide"), 3000);
	}

	return (
		<div className="cover">
			<h1>Login Here !!</h1>

			<input type="text" placeholder="Enter UserName here" /> <br />

			<input type="password" placeholder="Enter Password here" />

			<div className="login-btn" onClick={popup} >Login</div>

			<p className="text">Or login using</p>

			<div className="alt-login">
				<div className="facebook"></div>
				<div className="google"></div>
			</div>

			<div className={popupStyle}>
				<h3>Login Failed</h3>
				<p>UserName or Password incorrect</p>
			</div>
		</div>

	)
}

export default LoginForm;