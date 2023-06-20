import InputDark from "../../components/input/darkinput/InputDark"
import '../main/MainPage.css'

const MainPage = () => {
  return (
    <section className="search-filter section-margin">
      <div className="search-filter__container container">
        <div className="search-filter__inner">
          <InputDark placeholder={'Название курса, автор или предмет'} isLong={true}/>

        </div>
      </div>
    </section>
  )
}

export default MainPage