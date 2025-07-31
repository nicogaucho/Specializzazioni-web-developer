// import { useState, useEffect } from "react";
// import { useParams } from "react-router";
import { useLoaderData } from "react-router";


function BookPage() {
  const { book } = useLoaderData();
  // let { id } = useParams();
  // const [loading, setLoading] = useState(false);
  // const [books, setBooks] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       setLoading(true);
  //       const response = await fetch(`https://gutendex.com/books/?ids=${id}`);
  //       if (!response.ok) {
  //         throw new Error("Network books response was not ok");
  //       }
  //       const json = await response.json();
  //       setBooks(json.results);
  //     } catch (error) {
  //       setError(`Error getting book - ${error}`);
  //     }
  //     setLoading(false);
  //   }
  //   fetchData();
  // }, [id]);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* {loading && (
          <div className="flex justify-center py-8">
            <span className="loading loading-spinner loading-xl text-primary "></span>
          </div>
        )}
        {error && (
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        )} */}
        {book &&
          book.map((book) => (
            <div>
              <img src={book.formats["image/jpeg"]} alt={book.title} />
              <div>
                <h1 className="text-5xl font-bold">{book.title}</h1>
                <p className="py-6">
                  {book?.summaries.map((s) => s)}
                </p>
                <button className="btn btn-primary">Buy now</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default BookPage;
