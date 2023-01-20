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
  state = {finalList: []}

  makingApiCall = async id => {
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
    this.setState({finalList: updatedList})
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
    const {finalList} = this.state
    return (
      <div className="bg_container">
        <h1 className="heading">Popular</h1>
        {this.gettingLanguagesList()}
        {this.gettingListOfItems(finalList)}
      </div>
    )
  }
}

export default GithubPopularRepos
