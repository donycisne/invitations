import React from "react";

import ConfirmedFilter from './ConfirmedFilter';
import Counter from './Counter';
import GuestList from './GuestList';

const MainContent = (props) => (
  <main>
    <ConfirmedFilter
      toggleFilter={props.toggleFilter}
      isFiltered={props.isFiltered}
    />
    <Counter
      totalInvited={props.totalInvited}
      numberAttending={props.numberAttending}
      numberUnconfirmed={props.numberUnconfirmed}
    />
    <GuestList
      guests={props.guests}
      toggleConfirmation={props.toggleConfirmation}
      toggleEditing={props.toggleEditing}
      setName={props.setName}
      removeGuest={props.removeGuest}
      isFiltered={props.isFiltered}
      pendingGuest={props.pendingGuest}
    />
  </main>
);

export default MainContent;
