import { Book } from "@/types";
import Image from "next/image";

const SingleBookPage = async ({ params }: { params: { bookId: string } }) => {
  let book: Book | null = null;

  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/books/${params.bookId}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) throw new Error("Error fetching book");

    book = await response.json();

  } catch (error) {
    console.log(error);
  }

  if (!book) throw new Error("Book Not Found");

  return (
    <section className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10">
      <div className="col-span-2 pr-8 text-primary-950">
        <h2 className="mb-5 text-5xl font-bold leading-[1.1]">{book.title}</h2>
        <span className="font-semibold">by {book.author.name}</span>
        <p className="mt-5 text-lg leading-8">Dive into the world of object-oriented programming with our comprehensive guide to C++. Learn the fundamentals of OOP concepts like classes, objects, inheritance, and polymorphism, and master the art of building efficient and modular software. Whether you are a beginner or an experienced programmer, this book equips you with the skills to excel in C++ development</p>
      </div>
      <div className="flex justify-end"><Image src={book.coverImage} alt={book.title} width={0} height={0} sizes="100vw" style={{width:'auto', height:'auto'}} /></div>
    </section>
  )
  

};

export default SingleBookPage;
