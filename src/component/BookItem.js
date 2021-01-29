import React from 'react';
import './style.css';

const BookItem = ({ book }) => {
  const { title, authors, thumbnail, contents } = book;

  return (
    <div className="BookItem">
      <img src={thumbnail} alt="thumbnail" />
      <h2>{title}</h2>
      <p>{contents}</p>
    </div>
  );
};

export default BookItem;
