import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./pages/main/MainPage"
import Header from "./containers/header/Header"
import Course from "./containers/course/Course"

const App = () => {
  return (
    <>
    <Header/>
    <main>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/course/:id" element={<Course/>}/>
      </Routes>
    </BrowserRouter>
    </main>
    </>
  )
}

export default App