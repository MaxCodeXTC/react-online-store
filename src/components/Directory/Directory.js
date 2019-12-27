import React from "react"

import MenuItem from "../MenuItem/MenuItem"
import "./Directory.scss"

//overview
  //this component renders the MenuItem component.
  // it has a state that is set to an object called section, which contains an array of categories.
  // the state values are the passed on to the MenuItem component via props.
  // "id" gets passed on as it, while other properties such as title, imageUrl get passed using ... operator.

export default class Directory extends React.Component {
  constructor() {
    super()
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          size: 'large',
          linkUrl: ''
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          size: 'large',
          linkUrl: ''
        }
      ]
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({ id, ...sectionProps }) => (
            <MenuItem key={id} {...sectionProps} />
          ))
        }
      </div>
    )
  }
}