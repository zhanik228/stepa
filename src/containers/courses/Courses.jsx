
import { useState } from 'react'
import CourseList from '../../components/course-list/CourseList'

const Courses = () => {
    const [currentTab, setCurrentTab] = useState('new')
    const [newCourses, setNewCourses] = useState([
        {
            id: 1,
            title: 'Как полететь на луну',
            author: 'Zhanik Winchester',
            users: '29',
            time: '32',
            price: '400$'
        }
    ])
    const [popularCourses, setPopularCourses] = useState([
        {
            id: 4,
            title: 'Популярный курс',
            author: 'Zhanik',
            users: '36',
            time: '40',
            price: '200$'
        }
    ])

    const setActiveLink = (e) => {
        const active = document.querySelector('.course-nav__list-link_active')
        if (active ) {
            active.classList.remove('course-nav__list-link_active')
        } 
        e.target.classList.add('course-nav__list-link_active')
    }

    return (
        <section className="courses">
        <div className="courses__container container">
          <div className="courses__inner">
            <h2 className="section-title">Онлайн-курсы</h2>
            <div className="courses-tab">
              <div className="courses-tab__header">
                <nav className="courses-tab__nav">
                  <ul className="course-nav__list">
                    <li className="course-nav__list-item">
                      <a onClick={e => {setActiveLink(e); setCurrentTab('new');}} href="#" className="course-nav__list-link course-nav__list-link_active">Новые курсы</a>
                    </li>
                    <li className="course-nav__list-item">
                      <a onClick={e => {setActiveLink(e); setCurrentTab('popular');}} href="#" className="course-nav__list-link">Популярные курсы</a>
                    </li>
                    <li className="course-nav__list-item">
                      <a href="#" className="course-nav__list-link">Курсы по разработке игр</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="courses-tab__body">
                <CourseList currentTab={currentTab} newCourses={newCourses} popularCourses={popularCourses}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Courses