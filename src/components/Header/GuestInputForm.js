import React from 'react';
import { Consumer } from '../Context';

const GuestInputForm = () => (
  <Consumer>
    {context => (
      <form onSubmit={context.actions.newGuestSubmitHandler}>
        <input
          type="text"
          value={context.actions.pendingGuest}
          onChange={context.actions.handleNameInput}
          placeholder="Invite Someone"
          required
        />
        <button
          type="submit"
          name="submit"
          value="submit"
        >Invite</button>
      </form>
    )}
  </Consumer>
);

export default GuestInputForm;
