import { Book } from "@/types";
import Image from "next/image";
import DownloadButton from "./DownloadButton";

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
    <section className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-10 md:px-5 px-2 md:py-10 py-8">
      <div className="md:col-span-2 pr-8 text-primary-950 md:order-1 order-2">
        <h2 className="mb-5 md:text-5xl text-4xl font-bold leading-[1.1]">{book.title}</h2>
        <span className="font-semibold">by {book.author.name}</span>
        <p className="mt-5 text-lg leading-8 text-justify mb-10">
          Dive into the world of object-oriented programming with our
          comprehensive guide to C++. Learn the fundamentals of OOP concepts
          like classes, objects, inheritance, and polymorphism, and master the
          art of building efficient and modular software. Whether you are a
          beginner or an experienced programmer, this book equips you with the
          skills to excel in C++ development
        </p>
        <DownloadButton fileLink={book.file} />
      </div>
      <div className="md:col-span-1 flex justify-center md:justify-end md:order-2 order-1">
        <Image
          src={book.coverImage}
          alt={book.title}
          width={0}
          height={0}
          sizes="100vw"
          layout="responsive"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </section>
  );
};

export default SingleBookPage;
