import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Book from "./components/Book";

// const asyncOperation = () => {
//   return new Promise((resolve) => {
//     return resolve();
//   });
// };

// asyncOperation()
//   .then((res1) => res1.json())
//   .then((res2) => res2.json())
//   .then((res3) => {
//     return res3;
//   })

// SYNTATIC SUGAR...
// async function doAsyncStuff() {
//   const res1 = await asyncOperation();
//   const res2 = await res1.json();
//   const res3 = await res2.json();
//   return res3;
// }

// La callback passata allo useEffect non puo essere asincrona!
// useEffect(async () => {
//     fetch('api/13123')
//   }, []);

// useEffect(() => {
//   return new Promise.resolve(() => {

//   })
// }, []);

function App() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // fetch("https://gutendex.com/books/?page=1")
      //   .then((response) => {
      //     if (!response.ok) {
      //       throw new Error("Network response was not ok");
      //     }
      //     return response.json();
      //   })
      //   .then((data) => console.log(data))
      //   .catch((error) => console.error("Fetch error:", error));
      try {
        setLoading(true);
        const response = await fetch("https://gutendex.com/books/?page=1");
        if (!response.ok) {
          throw new Error("Network books response was not ok");
        }
        const json = await response.json();
        setBooks(json.results);
      } catch (error) {
        setError(`Error getting books - ${error}`);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold">E-books</h1>
            <p className="py-2">
              Scegli il tuo e-book preferito, ottieni uno sconto del 20% se ti
              abboni oggi!
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="join grid grid-cols-2">
          <button className="join-item btn btn-outline">Previous page</button>
          <button className="join-item btn btn-outline">Next</button>
        </div>
      </div>
      {loading && (
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
      )}
      <div className="grid grid-cols-3 gap-3 py-6">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </>
  );
}

export default App;
