import React, { Component } from 'react';
import { Provider } from './components/Context';

import Header from './components/Header'
import MainContent from './components/MainContent';
import Footer from './components/Footer';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: []
  };

  lastGuestId = 0;

  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  }

  toggleGuestProperty = (property, id) => {
    this.setState( prevState => ({
      guests: prevState.guests.map(guest => {
        if (id === guest.id) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    }));
  }

  toggleConfirmation = (id) => {
    this.toggleGuestProperty("isConfirmed", id);
  }

  toggleEditing = (id) => {
    this.toggleGuestProperty("isEditing", id);
  }

  removeGuest = (id) => {
    this.setState( prevState => ({
      guests: prevState.guests.filter(
        guest => id !== guest.id
      )
    }));
  }

  setName = (name, id) => {
    this.setState( prevState => ({
      guests: prevState.guests.map(guest => {
        if(id === guest.id) {
          return {
            ...guest,
            name
          };
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
    const id = this.newGuestId();
    if (this.state.pendingGuest.trim() !== '') {
      this.setState( prevState => ({
        guests: [
          {
            name: prevState.pendingGuest,
            isConfirmed: false,
            isEditing: false,
            id
          },
          ...prevState.guests
        ],
        pendingGuest: ''
      }));
    }
  }

  getAttendingGuests = () =>
    this.state.guests.reduce(
      (total, guest) => guest.isConfirmed ? total + 1 : total,
    0);

  getTotalInvited = () => this.state.guests.length;

  numberUnconfirmed = () =>
    this.getTotalInvited() - this.getAttendingGuests()

  render() {
    return (
      <Provider value={{
        actions: {
          newGuestSubmitHandler:this.newGuestSubmitHandler,
          pendingGuest: this.state.pendingGuest,
          handleNameInput: this.handleNameInput,
          toggleFilter: this.toggleFilter,
          isFiltered: this.state.isFiltered,
          totalInvited: this.getTotalInvited(),
          numberAttending: this.getAttendingGuests(),
          numberUnconfirmed: this.numberUnconfirmed(),
          guests: this.state.guests,
          toggleConfirmation: this.toggleConfirmation,
          toggleEditing: this.toggleEditing,
          setName: this.setName,
          removeGuest: this.removeGuest,
        }
      }}>
        <div className="invitations">
          <Header />
          <MainContent />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
