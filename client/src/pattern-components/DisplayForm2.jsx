import React, { Component } from "react";
import { TextInput, Form, Tile, Button } from "carbon-components-react";
import "./patterns.scss";


const products = {"apple" : {name:"apple", desc:"red", comment:"i love apples"} }

class DisplayForm2 extends Component {
  constructor(props) {
    // We should probably pass in the data store as a property
    super(props);
    this.state = {
      itemName: "",
      itemSize: "",
      itemComment: ""
    };
  }

  saveForm() {
      console.log(this.state)
  }

  render() {
    return (
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <Tile>
              <Form>
                <div className="display-form-item">
                  <TextInput
                    id="itemName"
                    value={this.state.itemName}
                    // value={'hello'}
                    labelText="Item Name:"
                    onChange={event => {
                      event.preventDefault();
                      // (event.target.value)
                      this.setState({ itemName: event.target.value });
                    //   console.log('item name is :' + this.state.itemName)

                    }}
                  />
                </div>
                <div className="display-form-item">
                  <TextInput
                    id="itemSize"
                    value={this.state.itemSize}
                    labelText="Item Description:"
                    onChange={event => {
                      event.preventDefault();
                      // (event.target.value)
                      this.setState({ itemSize: event.target.value });
                    }}
                  />
                </div>
                <div className="display-form-item">
                  <TextInput
                    id="itemComment"
                    value={this.state.itemComment}
                    labelText="Item COmment:"
                    onChange={event => {
                      event.preventDefault();
                      // (event.target.value)
                      this.setState({ itemComment: event.target.value });
                    }}
                  />
                </div>
                <div className="left-align">
                  <Button onClick={()=>{
                      console.log(this.state)
                      //   const products = {"apple" : {name:"apple", desc:"", comment:""} }
                      if(!products[this.state.itemName]){
                        products[this.state.itemName]= 
                        {name:this.state.itemName, desc:this.state.itemSize, comment:this.state.itemComment}
                        alert(`These are your products \n`, `open the console log`)
                        console.log(products)
                      this.setState({
                        itemName: "",
                        itemSize: "",
                        itemComment: ""
                      })
                    }
                    else{
                        alert(`Item ${this.state.itemName} already exists!`)
                    }
                      
                    }}>Update</Button>
                  {/* <Button onClick={this.saveForm}>Update</Button> */}
                </div>
              </Form>
            </Tile>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
export default DisplayForm2;