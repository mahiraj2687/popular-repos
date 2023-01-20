import './index.css'

const RepositoryItem = props => {
  const {itemDetails} = props
  const {name, starsCount, issuesCount, forksCount, avatarUrl} = itemDetails
  console.log('Hi')
  return (
    <li className="list_item">
      <img src={avatarUrl} alt={name} className="image" />
      <h1 className="item_heading">{name}</h1>
      <div className="image_container">
        <img
          alt="symbol"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          className="symbol"
        />
        <p className="item">{starsCount} stars</p>
      </div>
      <div className="image_container">
        <img
          alt="symbol"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          className="symbol"
        />
        <p className="item">{forksCount} forks</p>
      </div>
      <div className="image_container">
        <img
          alt="symbol"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          className="symbol"
        />
        <p className="item">{issuesCount} issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
