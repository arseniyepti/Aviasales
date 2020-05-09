import React from 'react';
import { SectionTickets, Logo, Wrap } from '../../styled/styled';
import ResultApp from '../ResultApp/ResultApp';
import logo from './logo.svg';

function App() {
  return (
    <SectionTickets>
      <Logo src={logo} alt="logo aviasales" />
      <Wrap>
        <ResultApp />
      </Wrap>
    </SectionTickets>
  );
}

export default App;
