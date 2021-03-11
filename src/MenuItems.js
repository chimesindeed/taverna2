import React from 'react'

export const MenuItems = (props) => {
  
  function displayItems(items){
    return (
      items ? <ul>
                { items.map(item=><li className="list-item">{ item.item }</li>) }
              </ul>

            : <h3>Loading...</h3>
    )
  }
  
  return(
    <div>
      {displayItems(props.items)}
    </div>
  )
 }