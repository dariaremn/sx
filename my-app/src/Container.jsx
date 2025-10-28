import React from "react";
import PropTypes from "prop-types";

function Container ({title,children}) {
    return(
        <>
        <h2>{title}</h2>
         <div className="content">{children}</div>
        </>
    )
}


Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};


export default Container