import React, { useState } from 'react';
import axios from 'axios';
import Search from './component/Search';
import BookList from './component/BookList';
import Container from './component/Container';

const kakao = axios.create({
  baseURL: 'https://dapi.kakao.com',
  headers: {
    Authorization: 'KakaoAK 1345794fdd4b8c268cc7ff2b244e7dbf',
  },
});

const App = () => {
  const [bookList, setBookList] = useState([]);

  const onSearch = async (searchValue, inputValue) => {
    try {
      const response = await kakao.get(
        `/v3/search/book?target=${searchValue}`,
        {
          params: { query: inputValue },
        }
      );
      setBookList(response.data.documents);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Container>
        <Search onSearch={onSearch} />
        <BookList list={bookList} />
      </Container>
    </div>
  );
};

export default App;
