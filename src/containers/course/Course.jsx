import '../course/Course.css'

const Course = () => {
  return (
    <section className="course-info section-margin">
      <div className="course-info__container container">
        <div className="course-info__inner">
          <div className="course-info__left">
            <h2 className="course-info__title info-title">
              Ace your coding
            </h2>
            <p className='course-info__subtitle info-subtitle'>
            Practice solving algorithmic interviews questions in a programming language of your choice! To help you conquer 
            these challenges, we provide a series of hints, a detailed solution, and a Python code for each problem.
            </p>
          </div>
          <div className="course-card__icon-wrapper">
            <div className="course-info__right course-card__icon">
              {/* <img src="" alt="" /> */}
              <span>Beginner level</span>
            </div>
            <div className="course-info__right course-card__icon">
              {/* <img src="" alt="" /> */}
              <span>8 hourse per week</span>
            </div>
            <div className="course-info__right course-card__icon">
              {/* <img src="" alt="" /> */}
              <span>stepik certificate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Course