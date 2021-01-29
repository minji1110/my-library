import React from 'react';
import './Header.css';
import { VscBook } from 'react-icons/vsc';
import { ImBook } from 'react-icons/im';

const Header = () => {
  return (
    <div className="header">
      <ImBook size="40" color="brown" />
      <h2 className="title">My Library</h2>
      <ImBook size="40" />
    </div>
  );
};

export default Header;
