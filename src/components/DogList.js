import React from "react";
import Dog from './Dog'
import PropTypes from "prop-types";

const DogList = (props) => {
  const dogComponents = props.dogData.map((dog) => {
    return (
      <Dog name={dog.name} favoriteToy={dog.favoriteToy} chipNumber={dog.chipNumber} />
    );
});

  return (
    <section>
        <ul>
            <{dogComponents} />
        </ul>
    </section>
  );    
};

DogList.propTypes = {
  catData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DogList;