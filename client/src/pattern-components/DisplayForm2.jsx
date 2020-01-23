import React, { Component } from "react";
import { TextInput, Form, Tile, Button } from "carbon-components-react";
import "./patterns.scss";

let products = ''

class DisplayForm2 extends Component {
  constructor(props) {
    super(props);
    console.log(JSON.stringify(props.productz));
    this.state = {
      itemName: "",
      itemSize: "",
      itemComment: ""
    };
  }

 

  render() {
    return (
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <Tile>
              <Form>
                <div className="display-form-item"  data-testid="display-form-item">
                  <TextInput
                    id="itemName"
                    value={this.state.itemName}
                  
                    labelText="Item Name:"
                    onChange={event => {
                      event.preventDefault();
                    
                      this.setState({ itemName: event.target.value });
                    }}
                  />
                </div>
                <div className="display-form-item" >
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
                <div className="display-form-item" >
                  <TextInput
                    id="itemComment"
                    value={this.state.itemComment}
                    labelText="Item Comment:"
                    onChange={event => {
                      event.preventDefault();
                      // (event.target.value)
                      this.setState({ itemComment: event.target.value });
                    }}
                  />
                </div>
                <div className="left-align">
                  <Button 
                  data-testid="update"
                    onClick={()=>{
                      products = this.props.productz
                      if(!products[this.state.itemName]){
                        products[this.state.itemName]= 
                        {name:this.state.itemName, desc:this.state.itemSize, comment:this.state.itemComment}
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
