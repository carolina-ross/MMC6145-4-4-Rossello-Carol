// TODO: import actions and implement reducer for each action
import {
  ADD_BOOK,
  REMOVE_BOOK,
  SEARCH_BOOKS 
} from './actions.js'

export default function reducer(prevState, {action, payload}) {
  const {favoriteBooks} = prevState
  let newFavBooks
  switch(action) {
    case ADD_BOOK:
      newFavBooks = [...favoriteBooks, payload]
      saveToLocalStorage(newFavBooks);
      return {
        ...prevState,
        favoriteBooks: newFavBooks
      }
    case REMOVE_BOOK:
      newFavBooks = favoriteBooks.filter(book => book.id != payload)
      saveToLocalStorage(newFavBooks);
      return {
        ...prevState,
        favoriteBooks: newFavBooks
      }
    case REMOVE_BOOK:
      newFavBooks = favoriteBooks.filter(book => book.id != payload)
      saveToLocalStorage(newFavBooks);
      return {
        ...prevState,
        favoriteBooks: newFavBooks
      };
    default:
      return prevState
};
}

// This helper function stores the favoriteBook state in localStorage as a string
function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks))
}