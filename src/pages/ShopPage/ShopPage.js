import React from "react"

import shopData from "./shopData"

import Collection from "../../components/Collection/Collection"

//overview
  // this component has a state that is set to all the items that are availale inside of shopData file.
  // the component then renders the Collection component and passes it the state values as props.
  // "id" is being passed as it is, while other values are being passed using the ES6 spread operator.
  // this component is tied to the "/shop" url in App.js, using React Router.

class ShopPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collections: shopData
    }
  }
  render() {
    const {collections} = this.state
    return (
      <div className="shop-page">
        {collections.map(({id, ...collectionProps}) => (
          <Collection key={id} {...collectionProps} />
        ))}
      </div>
    )
  }
}

export default ShopPage