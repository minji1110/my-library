import React, { Children } from 'react';
import './style.css';
import { ImBook } from 'react-icons/im';

const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="header">
        <ImBook size="40" color="brown" />
        <h1 className="title"> My Library </h1>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Container;
