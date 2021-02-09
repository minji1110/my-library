import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import './style.css';

const Search = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    onSearch(searchValue, inputValue);
    e.preventDefault();
  };

  const onSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <select onChange={onSearchChange}>
          <option value="">전체</option>
          <option value="title">제목</option>
          <option value="person">저자</option>
        </select>
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
