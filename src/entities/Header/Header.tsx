import React, { FC } from 'react';
import logo from '../../shared/logos/vtblogo.svg';
import './Header.css';

export const Header: FC = () => (
  <header className="App-header">
    <img src={logo} alt="logo" />
    <h4>Автокредит</h4>
  </header>
);
