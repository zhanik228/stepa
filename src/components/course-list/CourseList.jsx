import '../course-list/CourseList.css'
import CourseCard from '../course-card/CourseCard'

const CourseList = (props) => {
    return (
        <ul className="course-list">
            {props.currentTab == 'new' && props.newCourses.map((newCourse) => 
                <CourseCard course={newCourse}/>
            )}
            {props.currentTab == 'popular' && props.popularCourses.map((popularCourse) => 
                <CourseCard course={popularCourse}/>
            )}
        </ul>
    )
}

export default CourseList