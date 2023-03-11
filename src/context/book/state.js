// TODO: Load/parse 'favoriteBooks' from localStorage
const myBooks = localStorage.getItem('favoriteBooks');
const favoriteBooks = myBooks ? JSON.parse(myBooks) : [];


// TODO: Export initial state object as default
// initial state should have keys bookSearchResults and favoriteBooks
// bookSearchResults should be an empty array
// favoriteBooks should be the value from localStorage or an empty array if localStorage value is falsy

const initialState = {
    bookSearchResults: [],
    favoriteBooks: favoriteBooks
};

export default initialState;