import React from 'react';
import CitySelector from './components/CitySelector';
import './App.css';
import {Container} from 'react-bootstrap';
import UseFetch from './hooks/UseFetch'
import {API_KEY, API_BASE_URL} from './api/config';

const App = () => {
  const {data, error, isLoading, setUrl} = UseFetch();

  return (
    <Container className="App">
        <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}`)} />
    </Container>
  );
};

export default App;