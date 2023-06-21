import cardImg from '../../assets/course-card/0a816ba9a1b4a2a33941b1c609b1ad4c.jpg'
import favouriteIcon from '../../assets/course-card/love.png'
import user from '../../assets/course-card/user.png'
import time from '../../assets/course-card/time-left.png'
import '../course-card/CourseCard.css'
import { Link } from 'react-router-dom'

const CourseCard = ({course}) => {
    return (
        <li className="course-list__col">
          <Link to={`/course/${course.id}`} className="course-list__card course-card">
              <div className="course-card__header">
                  <div className="course-card__header-content">
                      <h3 className="course-card__title">
                          {course.title}
                      </h3>
                      <p className="course-card__author">
                          {course.author}
                      </p>
                  </div>
                  <div className="course-card__header-right">
                      <img className='course-card__header-img' src={cardImg} alt="course img" />
                      <div className='course-card__header-fav-icon__container'>
                          <img className='course-card__header-fav-icon' src={favouriteIcon} alt="favourite" />
                      </div>
                  </div>
              </div>
              <div className="course-card__footer">
                  <div className="course-card__icon-wrapper">
                      <div className="course-card__icon">
                          <img className='course-card__icon-img' src={user} alt="users" />
                          <span>{course.users}</span>
                      </div>
                      <div className="course-card__icon">
                          <img className='course-card__icon-img' src={time} alt="time" />
                          <span>{course.time}</span>
                      </div>
                  </div>
                  <p className="course-card__price">{course.price}</p>
              </div>
          </Link>
        </li>
    )
}

export default CourseCard