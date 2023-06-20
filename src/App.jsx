import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./pages/main/MainPage"
import Header from "./containers/header/Header"

const App = () => {
  return (
    <>
    <Header/>
    <main>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
    </main>
    </>
  )
}

export default App