// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, makingApiCall} = props
  const {language, id} = languageDetails

  const makeApiCall = () => {
    const button = document.getElementById(id)
    button.classList.add('new_button')
    makingApiCall(id)
  }
  return (
    <li>
      <button id={id} type="button" className="button" onClick={makeApiCall}>
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
