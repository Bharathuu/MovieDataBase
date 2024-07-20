import {withRouter} from 'react-router-dom'
import SearchMoviesContext from '../../context/SearchMoviesContext'
import './index.css'

const NavBar = props => {
  const renderSearchBar = () => (
    <SearchMoviesContext.Consumer>
      {({onTriggerSearchingQuery, onChangeSearchInput, searchInput}) => {
        const onChangeHandler = event => onChangeSearchInput(event.target.value)

        const onSearchHandler = event => {
          event.preventDefault()
          const {history} = props
          onTriggerSearchingQuery()
          history.push('/search')
        }

        return (
          <div className="d-flex align-items-center">
            <input type="text" value={searchInput} onChange={onChangeHandler} />
            <button type="submit" onClick={onSearchHandler}>
              Search
            </button>
          </div>
        )
      }}
    </SearchMoviesContext.Consumer>
  )

  return renderSearchBar()
}

export default withRouter(NavBar)
