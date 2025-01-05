export const SEARCH_FOR_BOOKS = (title: string, author: string) =>
  `https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&key=${process.env.GOOGLE_BOOKS_API_KEY}`;
