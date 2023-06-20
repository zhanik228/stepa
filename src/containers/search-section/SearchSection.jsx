import GreenButton from "../../components/button/greenbutton/GreenButton"
import InputDark from "../../components/input/darkinput/InputDark"
import '../search-section/SearchSection.css'

const SearchSection = () => {
    return (
        <section className="search-filter section-margin">
          <div className="search-filter__container container">
            <div className="search-filter__inner">
              <InputDark placeholder={'Название курса, автор или предмет'} isLong={true}/>
              <GreenButton>Найти</GreenButton>
            </div>
          </div>
        </section>
    )
}

export default SearchSection