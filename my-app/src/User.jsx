import React from "react";
import PropTypes from "prop-types";

function User({User}) {
    return(
        <>
<h2>Name;{User.name}</h2>
<h2>Age;{User.age}</h2>
<h2>city;{User.city}</h2>
        </>
    )
}

User.propTypes = {
  user: PropTypes.exact({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};



export default User