import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MotorItem = ({ motor }) => (
  <div className="w-full h-96 card rounded-lg">
    <div className="w-full flex justify-center items-center h-64 bg-customBorder p-4 m-2 rounded-lg">
      <img className=" max-h-full" src={motor.image_url} alt="motor" />
    </div>
    <h1 className="font-bold text-white bg-blur">{motor.name}</h1>
    <NavLink
      to={`/motors/${motor.id}`}
      type="button"
      className="px-16 pb-2 pt-1 bg-customBorder flex justify-center text-black rounded-md text-center shadow-md hover:bg-customBg"
    >
      See Model
    </NavLink>
  </div>
);
export default MotorItem;

MotorItem.propTypes = {
  motor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
};
