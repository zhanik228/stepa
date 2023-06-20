
import { useState } from "react"
import SearchSection from "../../containers/search-section/SearchSection"
import '../main/MainPage.css'
import Courses from "../../containers/courses/Courses"
import Modal from "../../components/modal/Modal"

const MainPage = () => {
  return (
    <>
      <SearchSection/>
      <Courses/>
    </>
  )
}

export default MainPage