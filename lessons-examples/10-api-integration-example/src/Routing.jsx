//import { BrowserRouter, Routes, Route } from "react-router";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "./routes/Home";
import About from "./routes/About";
import BookPage from "./routes/BookPage";
import BookLayout from "./layout/BookLayout";
import { fetchBook } from "./lib/api";

// function Routing() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<BookLayout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="book/:slug/:id" element={<BookPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

let router = createBrowserRouter([
  {
    Component: BookLayout,
    children: [
      { path: "/", Component: Home },
      { path: "/about", Component: About },
      { path: "book/:title/:id", Component: BookPage, loader: async ({ params }) => {
        return { book: await fetchBook(params.id) }
      }},
    ],
  },
]);


function Routing() {
  return <RouterProvider router={router} />
}

export default Routing;
