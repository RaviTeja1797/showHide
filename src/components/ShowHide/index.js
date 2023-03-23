import {Component} from 'react'
import './index.css'
import BoxComponent from '../BoxComponent'

class ShowHide extends Component {
  state = {firstButtonClickStatus: true, lastButtonClickStatus: true}

  whenFirstNameClicked = () => {
    this.setState(previousSate => {
      if (previousSate.firstButtonClickStatus) {
        return {firstButtonClickStatus: false}
      }
      return {firstButtonClickStatus: true}
    })
  }

  whenLastNameClicked = () => {
    this.setState(previousState => {
      if (previousState.lastButtonClickStatus) {
        return {lastButtonClickStatus: false}
      }
      return {lastButtonClickStatus: true}
    })
  }

  render() {
    const {firstButtonClickStatus, lastButtonClickStatus} = this.state

    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="buttons-container">
            <div className="button-container">
              <button
                type="button"
                className="button"
                onClick={this.whenFirstNameClicked}
              >
                Show/Hide Firstname
              </button>
              <p className="name-container">
                {firstButtonClickStatus ? 'Joe' : ''}
              </p>
            </div>
            <div className="button-container">
              <button
                type="button"
                className="button"
                onClick={this.whenLastNameClicked}
              >
                Show/Hide Lastname
              </button>
              <p className="name-container">
                {lastButtonClickStatus ? 'Jonas' : ''}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
