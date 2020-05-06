import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Products from './components/Products';
import './App.css';
import { Container } from 'react-bootstrap';
import store from "./store/appStore";
import { Provider } from 'react-redux';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Container>
          <Banner />
          <Products />
        </Container>
      </Provider>
    </div>
  );
}

export default App;
