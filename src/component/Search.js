import React, { useState } from 'react';

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
      <form className="search" onSubmit={onSubmit}>
        <input
          placeholder="검색어를 입력하세요."
          value={inputValue}
          onChange={onChange}
        />
        <button type="submit">검색</button>
      </form>
    </div>
  );
};

export default Search;
