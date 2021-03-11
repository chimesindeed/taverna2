import React, { useState, useEffect } from "react";
import "./style.css";
import {MenuItems} from './MenuItems'

const url = "http://localhost:3001/menus";
  
export default function App() {
  const [items, setItems]=useState("");
  
  function getItems(){
    fetch(url)
      .then((res)=>{return res.json()})
        .then((res)=>{return setItems(res)})
  }

  useEffect( ()=>{ getItems() }, [] ) 
  return (
    <div className="main">
      <div className="container">

        <div className="container-header">
          <div className="logo">Taverna |</div>
          <div className="nav-bar">
            <button className="button nav-button-one">Get Items</button>
            <button className="button nav-button-two">Create Item</button>
          </div>
        </div>

        <div className ="container-body">
          <div className="item-list"><MenuItems items={items}/></div>
          <div className="content">Content</div>
        </div>
      </div>
    </div>
  );
}
