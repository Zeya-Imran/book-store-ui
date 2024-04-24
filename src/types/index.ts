export interface Book {
  _id: string;
  title: string;
  author: Author;
  file: string;
  coverImage: string;
  genre: string;
}

export interface Author {
  name: string;
}
