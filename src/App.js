import React, { useState, useEffect } from "react";
import "./style.css";

const url = "localhost:3001/menus";
export default function App() {
  const [items, setItems]=useState("");

  const renderItems = () => {
    if(items ===""){return "loading"
    }
    else {
      return(
        <ul>
        {
          items.map((item)=>{
          return(<li>item.item</li>)
        })
        }
        </ul>
      )
    }

  }
  return (
    <div className="main">
      <div className="container">
        <div className="header">
          <div className="logo">Taverna |</div>

          <div className="nav-bar">
            <button className="button nav-button-one">Get Items</button>

            <button className="button nav-button-two">Create Item</button>
          </div>
        </div>

        <div className="item-list">{renderItems()}</div>

        <div className="content">Content</div>
      </div>{" "}
      /*END GRID CONTAINER */
    </div>
  );
}
