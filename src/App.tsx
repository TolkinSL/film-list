// import './App.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import FilmList from "./components/FilmList/FilmList";
import FilmInfo from "./components/FilmInfo/FilmInfo";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: FilmList,
        children: [
          {
            path: "/:id",
            Component: FilmList,
          },
        ],
      },
      {
        path: "film/:id/:genre_id",
        Component: FilmInfo,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
