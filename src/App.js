import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksList from './BooksList';
import SearchBooks from './SearchBooks';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  handleBookShelfChange = (bookForShelfChange) => {
    var shuffledBooks = this.state.books
    var shuffledBook = undefined
    for (let pos in shuffledBooks) {
      if (shuffledBooks[pos].id === bookForShelfChange.id) {
        shuffledBooks[pos].shelf = bookForShelfChange.shelf
        shuffledBook = shuffledBooks[pos]
        break
      }
    }
    
    if (shuffledBook === undefined) {
      shuffledBooks.push(bookForShelfChange)
    }

    this.setState({
      books: shuffledBooks
    })

    BooksAPI.update(bookForShelfChange, bookForShelfChange.shelf)
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BooksList books={this.state.books} onShelfChange={this.handleBookShelfChange} />
        )} />

        <Route path='/search' render={() => (
          <SearchBooks shelfBooks={this.state.books} onShelfChange={this.handleBookShelfChange} />
        )} />
      </div>
    )
  }
}

export default BooksApp
