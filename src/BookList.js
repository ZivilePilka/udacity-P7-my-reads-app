import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

function BookList(props) {
  const shelves = ["currentlyReading", "wantToRead", "read"]
  const shelfTitle = ["Currently reading", "Want to read", "Read"]
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
        <div>
          {shelves.map((shelf, index) => {
            return(
              <div key={shelves[index]} className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle[index]}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {props.books
                      .filter(book => book.shelf === shelf)
                      .map(book => (
                      <li key={book.id}>
                        <Book
                          book={book}
                          updateShelf={props.updateShelf}
                        />
                      </li>
                      ))
                    }
                  </ol>
                </div>
              </div>
            )
          })}
        </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
}

export default BookList
