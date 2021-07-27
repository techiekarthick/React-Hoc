import React, { Component } from "react";
import StockList from "./StockList";
import Hoc from "./Hoc";
import datajson from "./StockList.json";
import './App.css';

const Stocks = Hoc(StockList, datajson);

class App extends Component {
  render() {
    return (
      <div className="parent">
        <div className="card">
          <div classname="container">
            <h5>UserList Data</h5>
            <Stocks></Stocks>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
