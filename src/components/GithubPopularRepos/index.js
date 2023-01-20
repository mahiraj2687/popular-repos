import {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import './index.css'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {finalList: [], isLoading: true}

  makingApiCall = async id => {
    this.setState({isLoading: true, finalList: []})
    const url = `https://apis.ccbp.in/popular-repos?language=${id}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const updatedList = data.popular_repos.map(eachRepo => ({
      avatarUrl: eachRepo.avatar_url,
      forksCount: eachRepo.forks_count,
      id: eachRepo.id,
      issuesCount: eachRepo.issues_count,
      name: eachRepo.name,
      starsCount: eachRepo.starsCount,
    }))
    this.setState({finalList: updatedList, isLoading: false})
  }

  gettingLanguagesList = () => (
    <ul className="items_container">
      {languageFiltersData.map(eachLanguage => (
        <LanguageFilterItem
          makingApiCall={this.makingApiCall}
          languageDetails={eachLanguage}
          key={eachLanguage.id}
        />
      ))}
    </ul>
  )

  gettingListOfItems = finalList => (
    <ul className="list_items_container">
      {finalList.map(eachItem => (
        <RepositoryItem itemDetails={eachItem} key={eachItem.id} />
      ))}
    </ul>
  )

  render() {
    const {finalList, isLoading} = this.state
    return (
      <div className="bg_container">
        <h1 className="heading">Popular</h1>
        {this.gettingLanguagesList()}
        {isLoading ? (
          <div className="loader">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-clockwise"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
              />
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
            </svg>
          </div>
        ) : (
          this.gettingListOfItems(finalList)
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
