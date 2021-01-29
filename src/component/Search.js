import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import './style.css';

const Search = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    onSearch(inputValue);
    e.preventDefault();
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          placeholder="검색어를 입력하세요."
          value={inputValue}
          onChange={onChange}
        />
        <button type="submit">
          <MdSearch color="gray" size="30" />
        </button>
      </form>
    </div>
  );
};

export default Search;
