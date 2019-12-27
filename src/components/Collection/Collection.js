import React from "react"

import "./Collection.scss"

import CollectionItem from "../CollectionItem/CollectionItem"

//overview
  // this component is being rendered inside of the ShopPage component.
  // in the function, the arguments are being extracted out of the props object.
  // the component then reduces the number of items down to 4 using the filter method
    // and then maps over the items arrays that live in shopData file.

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;