import {Component} from 'react'
import './index.css'

class BoxComponent extends Component {
  render() {
    const {children} = this.props
    return <p className="name-container">{children}</p>
  }
}

export default BoxComponent
