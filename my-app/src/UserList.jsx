import React from "react";
import PropTypes from "prop-types";
import User from "./User";

function  Userlist({User}) {
    return(
        <>
{User.map((u) => (
     <User key={u.name} user={u} />
))}
        </>
    )
}

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      city: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UserList