import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
import Search from './Search'
import { Route, Link } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)

    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <Search
            updateShelf={this.updateShelf}
            books={this.props.books}
          />
        )} />
        <Route exact path="/" render={() => (
          <BookList
            books={this.state.books}
            updateShelf={this.updateShelf}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
