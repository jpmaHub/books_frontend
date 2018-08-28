import React from 'react';
import './header.css';
import Title from '../Title';
import SearchForm from '../SearchForm';

export default function Header() {
  return(
    <header className="App-header">
      <Title/>
      <SearchForm />
    </header>
  );
}

