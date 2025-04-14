import './App.css'
import TodoList from "./components/TodoList.jsx";
import {createBrowserRouter, Router, RouterProvider} from "react-router-dom";
import Home from "./components/Home.jsx";
import Notfound from "./components/Notfound.jsx";

const router = createBrowserRouter([
  {path: "/", element: <Home/> },
  {path: "/task", element: <TodoList/> },
  {path: "*", element: <Notfound /> },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
