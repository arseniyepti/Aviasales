import React from 'react';
import { SectionTickets, Logo, Wrap } from '../../styled/styled';
import TicketFilter from '../TicketFilter/TicketFilter';
import logo from './logo.svg';

function App() {
  return (
    <SectionTickets>
      <Logo src={logo} alt="logo aviasales" />
      <Wrap>
        <TicketFilter />
      </Wrap>
    </SectionTickets>
  );
}

export default App;
