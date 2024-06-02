import { useContext, useEffect } from "react";
import UserContext from "../Context/UserContext";

function UserDetailComponent() {
  const { users } = useContext(UserContext);

  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form>
        <fieldset disabled>
          <div className="mb-3">
            <label className="form-label">Email address:</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={users.usernameOrEmail}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={users.password}
            />
          </div>
        </fieldset>
        <label className="form-label">First Name:</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
        />{" "}
        <label className="form-label">Last Name</label>
        <input type="text" className="form-control" id="exampleInputEmail1" />
        <button onClick={handleClick} type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </>
  );
}

export default UserDetailComponent;
