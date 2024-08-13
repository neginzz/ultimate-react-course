const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// const Book = getBook(3);

// const title=Book.title;
// const author=Book.author;

//destructing : variable name should be excacly the same name as the properties in the obj
// heplful specially for the api

//OBJ
// const { title, author, pages, genres, publicationDate, hasMovieAdaptation } =
//   Book;

// console.log(title, author, genres);

//ARRAY

// const primaryGenres = genres[0]
// const secondryGenres = genres[1]

// destructing
// const[primaryGenres,secondryGenres] = genres;

// console.log(primaryGenres,secondryGenres);

//----Rest operator

// ... otherGenres :  this will automatically create an array
// which contains all the values that we haven't previously destructured.

//tip: that we can only place this here in the end of the destructuring operation.

// const[primaryGenres,secondryGenres, ...otherGenres] = genres;

// console.log(primaryGenres,secondryGenres, otherGenres);

// /Spread operator - more common

//wrong way
// const newGenres = [genres, 'epic fantasy']
// newGenres;

//right way

// const newGenres = [...genres, 'epic fantasy']
// newGenres;

//OBJ

//wrong way

// const updateBook = {Book, moviePublicationDate: "2001-12-19"}
// updateBook;

//right way
// adding a new property -> moviePublicationDate
// lets overwrite an exciting propery -> pages
//the spread-out original object needs to be first.

// const updateBook = {...Book, moviePublicationDate: "2001-12-19", pages: "1210"}
// updateBook;

//******** Template Literals
// get only the year from 1954-07-29
// const summery = `${title}, a ${pages}-page long book is  a book was written by ${author} and published in ${
//   publicationDate.split("-")[0]
// }. the book has${hasMovieAdaptation ? "" : "not"} been adabted as a movie`;

// console.log(summery);

//******** Ternary operator

// const pageRange = pages > 1000 ? "over a thousand" : "Less than a thousand";
// pageRange;
// console.log(`The book has ${pageRange} pages`);

//******** Arrow function
// old way
//  function getYear(srt) {
//   return srt.split("-")[0]
//  }

//Arrow way -> useful in callback func

// const getYear = srt => srt.split("-")[0];

// console.log(getYear(publicationDate));

//***************** Short-Circuiting And Logical Operators
// in certain ocnditions, the operator immedietly return the first value
// and not even look second value

//when the first value is true, will return the second one

// console.log(true && "some string");
// console.log(false && "some string");
// console.log(hasMovieAdaptation && "this book has a movie");
// console.log(0 && "some text");

//falsy: 0, '', null, undefined

// console.log(true ||"some string");
// console.log(false ||"some string");

// console.log(Bookook.translations.spanish);

// const spanishTranslation = Book.translations.spanish || "NOT TRANSLATED";
// spanishTranslation;

// console.log(Book.reviews.librarything.reviewsCount);
// const countWrong = Book.reviews.librarything.reviewsCount || "no data";
// countWrong;

// const count = Book.reviews.librarything.reviewsCount ?? "no data";
// count;

//*********** optional chaining

// function getTotalReviewCount(Book) {
//   const bookReads = Book.reviews.goodreads.reviewsCount;
//   // in book with id= 3 Book.reviews.librarything is undefined
//   // so we add ? to do it optionally so js will no longer try to read reviewscount
//   //the result is NAN but atleast we are not getting an error
//   //so set a defult by ??
//   const librarything = Book.reviews.librarything?.reviewsCount ?? 0;

//   return bookReads + librarything;
// }

// console.log(getTotalReviewCount(Book));

// Functional array method : map - filter - reduce -> they do't mutate the original array but
// instead return a new array based on the original one

/*********** MAP method */

/*the map method will loop over an array and return a new array with the same length 
with some operation applied to each of the elements of the original array.*/

const books = getBooks();
books;

// const x = [1, 2, 3, 4, 5].map((el) => el * 2);
// console.log(x);

// const titles = books.map((book) => book.title);

// console.log(titles);

// const essentialData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
// }));

// console.log(essentialData);

/**********filter method */
//And now here, instead of returning the value that we want in a new array,
// we need to return a condition which will either be true or false, if it was true add to the new list

// const longBooks = books.filter((book) => book.pages > 500).filter((book)=> book.hasMovieAdaptation)
// longBooks;

// const adventureBooks=books.filter (book=>book.genres.includes('adventure')).map(book=>book.title)

// adventureBooks

/************** reduce */
//the most powerful one
// it takes a callback func which will be executed for each element of th array
//and as a secon argument it also takes in a starter value, basically
// the goal of the reduce is to reduce basically the entire array to just one value (to boil it down)

// const pagesAllBooks = books.reduce((sum, book) =>sum+ book.pages, 0);

// pagesAllBooks;

/************ sort method  */
// not an functional method to fix this we can use slice

const arr = [3, 7, 1, 9, 6];

//صعودی
const sorted = arr.slice().sort((a, b) => a - b);

//نزولی b-a
arr;
sorted;


const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

