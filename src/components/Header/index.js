import React from 'react';

import GuestInputForm from './GuestInputForm';

const Header = (props) => (
  <header>
    <h1>Invitations</h1>
    <GuestInputForm
      newGuestSubmitHandler={props.newGuestSubmitHandler}
      pendingGuest={props.pendingGuest}
      handleNameInput={props.handleNameInput}
    />
  </header>
);

export default Header;
