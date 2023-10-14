import React, { FC } from 'react';
import logo from '../../shared/logos/vtblogo.svg';

export const Header: FC = () => (
  <header className="App-header">
    <img src={logo} alt="logo" />
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
);
