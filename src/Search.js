import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {
  state = {
    query: '',
    searchedBooks: []
  }

  updateQuery = (query) => {
    this.setState({query})

    if (query) {
      BooksAPI.search(query).then((searchedBooks) => {
        // if there is no book according to search term
        if(searchedBooks.error) {
          this.setState({searchedBooks: []})
        } else {
          this.setState({searchedBooks: searchedBooks})
        }
      })
    } else {
      this.setState({searchedBooks: []})
    }
  }

  render () {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchedBooks.map(searchedBook =>
              <li key={searchedBook.id}>
                <Book
                  book={searchedBook}
                  updateShelf={this.props.updateShelf}
                />
              </li>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
