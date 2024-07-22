import React, { useState, useContext } from "react";
import { login, storeToken, saveLoggedUser } from "../Service/AuthService.js";
import UserContext from "../Context/UserContext.js";
import { useNavigate } from "react-router-dom";

function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(true);
  const { users, setUsers } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    // const log = { usernameOrEmail, password };

    login(usernameOrEmail, password)
      .then((response) => {
        const token = window.btoa(`${usernameOrEmail}:${password}`);
         
        storeToken(token);
        sessionStorage.setItem("LoggedIn", "true");

        saveLoggedUser(usernameOrEmail);

        setErrorMessage("Sign in successsful");
        setUsers({ usernameOrEmail, password });
        console.log(users.usernameOrEmail + "  " + users.password);
        navigation("/homepage");
      })
      .catch((error) => {
        console.error(error);

        setErrorMessage("wrong email or password");
      });
  }
  const handleOnChnage = () => {
    setErrorMessage("");
  };
  return (
    <>
      <div
        className="card"
        style={{
          width: "25rem",
          height: "40rem",
          marginLeft: "500px",
          paddingTop: "30px",
          marginTop: "30px",
        }}
      >
        <div className="card-body">
          <form onSubmit={handleSubmit} onChange={handleOnChnage}>
            <label id="credentials">{errorMessage}</label>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="Email"
                value={usernameOrEmail}
                required
                onChange={(e) => setUsernameOrEmail(e.target.value)}
              />
            </div>
            <div className="mb-3" style={{ paddingTop: "50px" }}>
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              {}
            </div>
            <div style={{ paddingTop: "90px" }}>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
