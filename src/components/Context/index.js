import React, { Component } from 'react';

const uuidv1 = require('uuid/v1') ;

const InvitationsContext = React.createContext();

export class Provider extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: []
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem('guests', this.state.guests)
    const localStorageFiltered = localStorage.getItem('guests-responded', this.state.isFiltered)
    if (localStorageRef) {
      this.setState({ guests: JSON.parse(localStorageRef) })
    }
    if (localStorageFiltered) {
      this.setState({ isFiltered: JSON.parse(localStorageFiltered) })
    }
  }

  setLocalStorage() {
    localStorage.setItem('guests', JSON.stringify(this.state.guests));
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
    }), this.setLocalStorage);
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
    }), this.setLocalStorage);
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
    }), this.setLocalStorage);
  }

  toggleFilter = () => {
    this.setState( prevState => ({
      isFiltered: !prevState.isFiltered,
    }),
    () => localStorage.setItem('guests-responded', JSON.stringify(this.state.isFiltered))
    );
  }

  handleNameInput = (e) => {
    this.setState({
      pendingGuest: e.target.value
    });
  }

  newGuestSubmitHandler = (e) => {
    e.preventDefault();
    const id = uuidv1();
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
      }), this.setLocalStorage);
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
      <InvitationsContext.Provider value={{
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
        {this.props.children}
      </InvitationsContext.Provider>
    );
  }
}

export const Consumer = InvitationsContext.Consumer;
