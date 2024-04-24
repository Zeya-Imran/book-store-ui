import { Book } from "@/types";
import BookCard from "./BookCard";

const BookList = ({books} : {books: Book[]}) => {  
  // if (!Array.isArray(books)) {
  //   return <div>No books available</div>;
  // }
  return (
    <section className="mx-auto md:w-9/12 w-11/12 grid md:grid-cols-3 grid-cols-1 gap-8">
       {
          books.map((book)=>(
            <BookCard  book={book} key={book._id} />
          ))
       }
    </section>
  );
};

export default BookList;
