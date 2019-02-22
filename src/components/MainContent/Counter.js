import React from 'react';
import { Consumer } from '../Context';

const Counter = () => (
  <Consumer>
    {context => (
      <table className="counter">
        <tbody>
          <tr>
            <td>Attending:</td>
            <td>{context.actions.numberAttending}</td>
          </tr>
          <tr>
            <td>Unconfirmed:</td>
            <td>{context.actions.numberUnconfirmed}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>{context.actions.totalInvited}</td>
          </tr>
        </tbody>
      </table>
    )}
  </Consumer>
);

export default Counter;
