import { useState } from "react";
import UserContexts from "./UserContexts";
import Register from "../Component/Register";
function UserContextProvider() {
  const [users, setUsers] = useState(null);
  return (
    <UserContexts.Provider value={{ users, setUsers }}>
      <Register />
    </UserContexts.Provider>
  );
}

export default UserContextProvider;
