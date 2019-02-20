import React from 'react';
import PropTypes from 'prop-types';

import GuestName from './GuestName';

const Guest = props => (
  <li className={props.isConfirmed ? 'responded' : null}>
    <GuestName
      isEditing={props.isEditing}
      handleNameEdits={e => props.setName(e.target.value)}
    >
      {props.name}
    </GuestName>
    <label>
      <input
        type="checkbox"
        checked={props.isConfirmed}
        onChange={props.handleConfirmation}
      /> Confirmed
    </label>
    <button onClick={props.handleToggleEditing}>
      {props.isEditing ? 'save' : 'edit'}
    </button>
    <button onClick={props.handleRemove}>remove</button>
  </li>
);

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  handleToggleEditing: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
};

export default Guest;
