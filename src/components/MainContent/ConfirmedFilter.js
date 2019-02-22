import React from 'react';
import { Consumer } from '../Context'

const ConfirmedFilter = () => (
  <Consumer>
    {context => (
      <div className="invitees">
        <h2>Invitees</h2>
        <label className="invitees-check">
          <input
            type="checkbox"
            onChange={context.actions.toggleFilter}
            checked={context.actions.isFiltered}
          />
          Hide those who haven't responded
        </label>
      </div>
    )}
  </Consumer>
);

export default ConfirmedFilter;
