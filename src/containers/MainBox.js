import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
    state= {
      view: ''
    }

    handleClick = (event) => {
      // console.log(event.target.id)
      if (event.target.id === 'profile') {
        return this.setState({view: <Profile />})
      } else if (event.target.id === 'photo') {
        return this.setState({view: <Photos />})
      } else if (event.target.id === 'cocktail') {
        return this.setState({view: < Cocktails/>})
      } else if (event.target.id === 'pokemon') {
        return this.setState({view: <Pokemon />})
      }
    }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>{this.state.view}</div>

    return (
      <div>
        <MenuBar fn={this.handleClick}/>
        {detailsToDisplay}

      </div>
    )
  }

}

export default MainBox
