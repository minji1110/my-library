import React from 'react';
import BookItem from './BookItem';
import './style.css';

const BookList = ({ list }) => {
  return (
    <div>
      {list.map((book) => (
        <BookItem book={book} key={book.isbn} />
      ))}
    </div>
  );
};

export default BookList;
