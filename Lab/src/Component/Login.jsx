import React, { useState, useContext } from "react";
import { login, storeToken } from "../Service/AuthService.js";

function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const log = { usernameOrEmail, password };

    login(usernameOrEmail, password)
      .then((response) => {
        const token = window.btoa(`${usernameOrEmail}:${password}`);
        storeToken(token);
        setSuccess(false);
      })
      .catch((error) => {
        console.error(error);
        setSuccess(true);
      });
  }
  return (
    <>
      {success ? (
        <p>Wrong credentials</p>
      ) : (
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
            <form onSubmit={handleSubmit}>
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
      )}
    </>
  );
}

export default Login;
