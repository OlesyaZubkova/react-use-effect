import { useState } from "react";
import List from "./List";
import Details from "./Details";

function User() {
  const [info, setInfo] = useState();

  const selectUser = (user) => {
    return () => {
      setInfo(user);
    };
  };

  return (
    <div className="User">
      <List selectUser={selectUser} />
      <Details info={info} />
    </div>
  );
}

export default User;
