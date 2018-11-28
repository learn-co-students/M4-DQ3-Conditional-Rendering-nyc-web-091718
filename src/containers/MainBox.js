import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    currentMenuId: 'profile'
  }

  handleClick = (event) => {
    if (event.target.className === 'item') {
      event.target.className = 'item active'
    } else {
       event.target.parentElement.className = 'item active'
    }
    this.setState({
      currentMenuId: event.target.id
    })
  }

  selectedDetails = () => {
    if (this.state.currentMenuId === 'profile') {
      return <Profile />
    } else if (this.state.currentMenuId === 'photo') {
      return <Photos />
    } else if (this.state.currentMenuId === 'cocktail') {
      return <Cocktails />
    } else if (this.state.currentMenuId === 'pokemon') {
      return <Pokemon />
    }
  }



  render() {
    return (
      <div>
        <MenuBar onClick={this.handleClick} />
        <div>{this.selectedDetails()}</div>
      </div>
    )
  }

}

export default MainBox
