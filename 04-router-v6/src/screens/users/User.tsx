import {Link, Outlet, useParams} from "react-router-dom";
import {users} from "../../db";

function User() {
  const {userId} = useParams();
  const userName = users[Number(userId) - 1].name;
  return (
    <div>
      <h1>User with it {userId} is name: {userName}</h1>
      <hr />
      <Link to='followers'>See followers</Link>
      <Outlet context={{
        nameOfMyUser: userName,
      }}/>
    </div>
  );
}

export default User;