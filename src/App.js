import React from "react";
import './App.css';
import ListItem from "./Component/ListItem/ListItem";

const App = () => {
  const itemArray = [
    {
      imgSrc: `https://www.notebookcheck.net/fileadmin/_processed_/c/d/csm_Produktfotos_Apple_iPhone_13_Pro_1448_0001583eaa.jpg`,
      name: 'Iphone 13 Pro-max',
      price: `#1 000 000`,
    },
    {
      imgSrc: `https://www.cdiscount.com/pdt2/0/4/6/1/700x700/raz8886419358046/rw/razer-blade-15-rz09-03009f76-r3f1-intel-core-i.jpg`,
      name: 'Razer Blade',
      price: `#300 000`,
    },
    {
      imgSrc: `https://images.lpcdn.ca/924x615/201903/15/1622571-audi-r8-crdit-audi.jpg`,
      name: 'audi R8',
      price: `#17 000 000`,
    },
  ];


  return (
    <div className="App">
      <div className="container">
        <ListItem itemArray={itemArray} />
      </div>
    </div>
    
  );
}



export default App;
