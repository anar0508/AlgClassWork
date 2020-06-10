import React from "react";
import { Link } from "react-router-dom";
function List(props) {
  const usersList = props.list.map((user) => {
    const path = `/${user.idUser}`;
    return (
      <Link key={user.idUser} to={path}>
        <li
          onClick={() => {
            props.show();
          }}
        >
          {user.fullName}
        </li>
      </Link>
    );
  });

  return <ul>{usersList}</ul>;
}

export default List;
