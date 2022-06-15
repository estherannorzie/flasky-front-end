import React from "react";
import PropTypes from "prop-types";

const Dog = (props) => {
    
    return (
        <li>
            <h3>
                (props.name)
            </h3>
            <button> 
                Pet Dog 
            </button>
        </li>
    );
}

Dog.propTypes = {
    name: PropTypes.string.isRequired,
    favoriteToy: PropTypes.string,
    chipNumber: PropTypes.number,
  };

export default Dog;