import React, { Component } from "react";
import SimpleList from "../pattern-components/SimpleList";
import BasicPage from "../pattern-components/BasicPage";
import DisplayForm from "../pattern-components/DisplayForm2";
import "../pattern-components/patterns.scss";

class UIShellBody extends Component {
  components = {
    "Simple List": SimpleList,
    "Basic Page": BasicPage,
    "Display Form": DisplayForm,
  };
  defaultComponent = "Simple List";

  productz = {"apple" : {name:"apple", desc:"30", comment:"i love apples", out:true} }

  
  render() {

    const PatternName = this.components[this.props.patternName];
    return (
      <div className="pattern-container">
        <PatternName productz={this.productz} boolChanger = {this.boolChanger} showDescription={true} />   
      </div>
    );
  }
}
export default UIShellBody;
