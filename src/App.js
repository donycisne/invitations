import React, { Component } from 'react';

import GuestInputForm from './components/GuestInputForm';
import GuestLIst from './components/GuestList';
import ConfirmedFilter from './components/ConfirmedFilter';
import Footer from './components/Footer';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
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
    this.setState( prevState => ({
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

  toggleConfirmationAt = (index) => {
    this.toggleGuestPropertyAt("isConfirmed", index);
  }

  toggleEditingAt = (index) => {
    this.toggleGuestPropertyAt("isEditing", index);
  }

  removeGuestAt = (index) => {
    this.setState( prevState => ({
      guests: [
        ...prevState.guests.slice(0, index),
        ...prevState.guests.slice(index + 1)
      ]
    }));
  }

  setNameAt = (name, indexToChange) => {
    this.setState( prevState => ({
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

  toggleFilter = () => {
    this.setState( prevState => ({
      isFiltered: !prevState.isFiltered
    }));
  }

  handleNameInput = (e) => {
    this.setState({
      pendingGuest: e.target.value
    });
  }

  newGuestSubmitHandler = (e) => {
    e.preventDefault();
    if (this.state.pendingGuest.trim() !== '') {
      this.setState( prevState => ({
        guests: [
          {
            name: prevState.pendingGuest,
            isConfirmed: false,
            isEditing: false
          },
          ...prevState.guests
        ],
        pendingGuest: ''
      }));
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Invitations</h1>
          <GuestInputForm
            newGuestSubmitHandler={this.newGuestSubmitHandler}
            pendingGuest={this.state.pendingGuest}
            handleNameInput={this.handleNameInput}
          />
        </header>
        <div className="main">
          <ConfirmedFilter
            toggleFilter={this.toggleFilter}
            isFiltered={this.state.isFiltered}
          />

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
            isFiltered={this.state.isFiltered}
            pendingGuest={this.state.pendingGuest}
          />
        </div>

        <Footer author={"Dony Cisneros"} />

      </div>
    );
  }
}

export default App;
