import React from 'react';
import { Consumer } from '../../Context';

import Guest from './Guest';
import PendingGuest from './PendingGuest';

const GuestList = () => (
  <Consumer>
    {context => (
      <ul className="guest-list">
        <PendingGuest name={context.actions.pendingGuest} />
        {context.actions.guests
          .filter(guest => !context.actions.isFiltered || guest.isConfirmed)
          .map((guest, index) =>
            <Guest
              key={index}
              name={guest.name}
              isConfirmed={guest.isConfirmed}
              isEditing={guest.isEditing}
              handleConfirmation={() => context.actions.toggleConfirmation(guest.id)}
              handleToggleEditing={() => context.actions.toggleEditing(guest.id)}
              setName={text => context.actions.setName(text, guest.id)}
              handleRemove={() => context.actions.removeGuest(guest.id)}
            />
          )
        }
      </ul>
    )}
  </Consumer>
);

export default GuestList;
