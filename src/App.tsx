// import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import FilmList from './components/FilmList/FilmList';
import FilmInfo from './components/FilmInfo/FilmInfo';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: "/",
        Component: FilmList,
      },
      {
        path: "film/:id",
        Component: FilmInfo,
        children: [
          {
            path: ":id",
            Component: FilmInfo,
          },]
      },
    ],
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
