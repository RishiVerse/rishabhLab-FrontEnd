import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email + " " + pwd);
  };

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
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3" style={{ paddingTop: "50px" }}>
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  value={pwd}
                  required
                  onChange={(e) => setPwd(e.target.value)}
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
