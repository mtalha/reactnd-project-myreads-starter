import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksList from './BooksList';
import SearchBooks from './SearchBooks';
import NotFound from './NotFound';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';


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
    let foundBookInShelf = false;
    for (var pos in shuffledBooks) {
      if (shuffledBooks[pos].id === bookForShelfChange.id) {
        foundBookInShelf = true
        break
      }
    }
    this.setState((currentState) => {
      if (foundBookInShelf) {
        currentState.books[pos].shelf = bookForShelfChange.shelf
      } else {
        currentState.books.push(bookForShelfChange)
      }
      return { books: currentState.books }
    })
    BooksAPI.update(bookForShelfChange, bookForShelfChange.shelf)
  }

  render() {
    return (
      <div className="app">

      <Switch>
        <Route exact path='/' render={() => (
          <BooksList books={this.state.books} onShelfChange={this.handleBookShelfChange} />
        )} />

        <Route path='/search' render={() => (
          <SearchBooks shelfBooks={this.state.books} onShelfChange={this.handleBookShelfChange} />
        )} />

        <Route component={NotFound} />
        )} />
      </Switch>
      </div>
    )
  }
}

export default BooksApp
