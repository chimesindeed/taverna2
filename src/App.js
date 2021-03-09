import React, { useState } from "react";
import "./style.css";

export default function App() {
  return (
    <div className="container">
      
      <div className="header">
        
        <div className="logo">Taverna |</div>
        
        <div className="nav-bar">
       
          <button className="button nav-button-one">Get Items</button>
          
          <button className="button nav-button-two">Create Item</button>
       
       </div> 
      
      </div>
      
      <div className="item-list">Items</div>
      
      <div className="content">Content</div>
    
    </div>
  );
}
