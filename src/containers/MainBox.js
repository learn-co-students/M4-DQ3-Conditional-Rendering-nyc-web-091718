import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    selectedItem: 'profile'
  }

  handleclick = (e) => {
    this.setState({selectedItem: e.target.id}, ()=>console.log('in handleclick', this.state))
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = (selectedItem) => {
      switch (selectedItem) {
        case 'profile': return <Profile />; break;
        case 'photo': return <Photos />; break;
        case 'cocktail': return <Cocktails />; break;
        case 'pokemon': return <Pokemon />; break;
      }
    }

    return (
      <div>
        <MenuBar
        selectedItem={this.state.selectedItem}
        handleclick={this.handleclick}
        />
        {detailsToDisplay(this.state.selectedItem)}
      </div>
    )
  }

}

export default MainBox
