import Banner from "./components/Banner";
import BookList from "./components/BookList";

export default async function Home() {
  //api call

  const response = await fetch(`${process.env.BACKEND_URL}/books`,{
    cache: 'no-store'
  });
  //if(!response.ok)  return false   /*throw new Error('An occured while fetching the books data'); */
  const {books} = await response.json();

  return (
    <>
      <Banner />
      <BookList books={books} />
    </>
  );
}
