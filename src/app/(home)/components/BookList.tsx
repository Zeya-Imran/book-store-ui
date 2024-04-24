import { Book } from "@/types";
import BookCard from "./BookCard";

const BookList = ({books} : {books: Book[]}) => {  
  // if (!Array.isArray(books)) {
  //   return <div>No books available</div>;
  // }
  return (
    <section className="mx-auto max-w-6xl md:px-0 px-2 grid md:grid-cols-3 grid-cols-1 gap-8">
       {
          books.map((book)=>(
            <BookCard  book={book} key={book._id} />
          ))
       }
    </section>
  );
};

export default BookList;
