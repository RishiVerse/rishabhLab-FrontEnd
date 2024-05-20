import React, { useState, useEffect, useContext } from "react";
import { register, isRegister } from "../Service/AuthService.js";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [passwordHash, setPasswordHash] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (isRegister) {
      setSuccess(false);
      isRegister(false);
    }
  }, [isRegister]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = { username, email, passwordHash };
    register(users)
      .then(() => {
        setSuccess(true);
        isRegister(true);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(email + " " + username + " " + passwordHash);
  };

  return (
    <>
      {success ? (
        <p>Sign up is successful</p>
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
            <form>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setPasswordHash(e.target.value)}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Register;
