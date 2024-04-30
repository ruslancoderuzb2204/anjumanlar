import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Layout from "./layout/layout"
import Home from "./pages/Home"
import Transfers from "./pages/Transfers"
import Tariffs from "./pages/Tariffs"
import About from "./pages/About"
import './App.css'


const App = () => {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/transfers" element={<Transfers/>} />
        <Route path="/tariffs" element={<Tariffs/>} />
        <Route path="/about" element={<About/>} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App