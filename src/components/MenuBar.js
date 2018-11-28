import React from 'react'

const MenuBar = (props) => {

  return (
    <div className="ui four item menu"  >
      <a className={"item " + (props.selected === "profile" ? "active": null)} id="profile" onClick={props.onClick}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className={"item " + (props.selected === "photo" ? "active": null)} id="photo" onClick={props.onClick} >
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={"item " + (props.selected === "cocktail" ? "active": null)} id="cocktail" onClick={props.onClick} >
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={"item " + (props.selected === "pokemon" ? "active": null)} id="pokemon" onClick={props.onClick}>
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
