import React, { Component } from 'react';

import GuestLIst from './components/GuestList';
class App extends Component {

  state = {
    guests: [
      {
        name: 'Dony',
        isConfirmed: true,
        isEditing: false
      },
      {
        name: 'Luciana',
        isConfirmed: true,
        isEditing: false
      },
      {
        name: 'Tom',
        isConfirmed: false,
        isEditing: true
      },
      {
        name: 'Sabrina',
        isConfirmed: true,
        isEditing: false
      },
    ]
  };

  toggleGuestPropertyAt = (property, indexToChange) => {
    this.setState(prevState => ({
      guests: prevState.guests.map((guest, index) => {
        if(index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          }
        }
        return guest;
      })
    }));
  }

  toggleConfirmationAt = index =>
    this.toggleGuestPropertyAt("isConfirmed", index);

  toggleEditingAt = index =>
    this.toggleGuestPropertyAt("isEditing", index);

  removeGuestAt = index =>
    this.setState(prevState => ({
      guests: [
        ...prevState.guests.slice(0, index),
        ...prevState.guests.slice(index + 1)
      ]
    }));

  setNameAt = (name, indexToChange) => {
    this.setState(prevState => ({
      guests: prevState.guests.map((guest, index) => {
        if(index === indexToChange) {
          return {
            ...guest,
            name
          }
        }
        return guest;
      })
    }));
  }

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

          <GuestLIst
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
            removeGuestAt={this.removeGuestAt}
          />

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
