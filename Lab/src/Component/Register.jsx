import React, { useState, useEffect, useContext } from "react";
import { register } from "../Service/AuthService.js";
import UserContext from "../Context/UserContext.js";

function Register() {
  
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [passwordHash, setPasswordHash] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [usernameMessage, setUsernameMessage] = useState();
  const [usernameFlag, setUsernameFlag] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [emailFlag, setEmailFlag] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordFlag, setPasswordFlag] = useState(false);
  const [signUpMessage, setSignUpMessage] = useState();

  // const { setUsers } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      setUsernameMessage("Enter username");
      setUsernameFlag(true);
    }
    if (!email) {
      setEmailMessage("Enter correct email");
      setEmailFlag(true);
    }
    if (!passwordHash) {
      setPasswordMessage("Enter correct password");
      setPasswordFlag(true);
    }

    const users = { username, email, passwordHash };
    console.log(email + " " + username + " " + passwordHash);
    if (!username && !email && !passwordHash) {
      register(users)
        .then(() => {
          //setUsers({ username, email, passwordHash });
          setErrorMessage("sign up success");
        })
        .catch((err) => {
          console.log("username is :  " + username);
          if (username) {
            setUsernameMessage("Enter correct username");
            setUsernameFlag(true);
          }

          setErrorMessage("signup failed");
        });
    } else {
      setSignUpMessage("Please fill details");
    }
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
          <form onChange={() => setErrorMessage("")}>
            <label>{errorMessage}</label>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => {
                  setUsername(e.target.value);
                  setUsernameMessage("");
                }}
              />
              {usernameFlag ? <label>{usernameMessage}</label> : <p></p>}
              <br />
              <br />
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailMessage("");
                }}
              />
              {emailFlag ? <label>{emailMessage}</label> : <p></p>}
              <br />
              <br />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => {
                  setPasswordHash(e.target.value);
                  setPasswordMessage("");
                }}
              />
              {passwordFlag ? <label>{passwordMessage}</label> : <p></p>}
              <br />
              <br />
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
    </>
  );
}

export default Register;
