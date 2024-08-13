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

const Book = getBook(1);

// const title=Book.title;
// const author=Book.author;

//destructing : variable name should be excacly the same name as the properties in the obj
// heplful specially for the api

//OBJ
const { title, author, pages, genres, publicationDate, hasMovieAdaptation } =
  Book;

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

//Arrow way

const getYear = srt => srt.split("-")[0];

console.log(getYear(publicationDate));
