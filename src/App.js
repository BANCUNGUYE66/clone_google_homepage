import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;
