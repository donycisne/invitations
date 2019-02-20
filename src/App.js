import React, { Component } from 'react';

import GuestLIst from './components/GuestList';
class App extends Component {

  state = {
    guests: [
      {
        name: 'Dony',
        isConfirmed: true
      },
      {
        name: 'Luciana',
        isConfirmed: true
      },
      {
        name: 'Tom',
        isConfirmed: false
      },
      {
        name: 'Sabrina',
        isConfirmed: true
      },
    ]
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Invitations</h1>
          <form>
            <input type="text" value="Laura" placeholder="Invite Someone" />
            <button type="submit" name="submit" value="submit">Invite</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" /> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <GuestLIst  guests={this.state.guests} />
        </div>
        <footer>
          <span>Made with ❤ by &nbsp;
            <a
              href="https://donycisneros.now.sh"
              target="_blank"
              rel="noopener noreferrer"
            >Dony Cisneros</a>
          </span>
        </footer>
      </div>
    );
  }
}

export default App;
