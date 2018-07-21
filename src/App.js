import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
import Search from './Search'
import { Route, Link } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <Search />
        )} />
        <Route exact path="/" render={() => (
          <BookList />
        )} />
      </div>
    )
  }
}

export default BooksApp
