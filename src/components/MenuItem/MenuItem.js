import React from "react"
import { withRouter } from "react-router-dom"

import "./MenuItem.scss"

//overview
  // this component display each of the categories
  // upon being clicked, this component creates a new url using props.history and props.match properties.
  // this component is being rendered inside of the HomePage component.
  // after clicking the url would look something like /:placeholder/:theLinkUrl

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div style={{
      backgroundImage: `url(${imageUrl})`
    }} className="background-image"></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)

export default withRouter(MenuItem)