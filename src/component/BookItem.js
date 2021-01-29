import React from 'react';

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
