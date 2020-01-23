import React, { Component } from "react";
import { TextInput, Form, Tile, Button } from "carbon-components-react";
import "./patterns.scss";

// let products = {"apple" : {name:"apple", desc:"30", comment:"i love apples"} };
let products = ''
// const products = {"apple" : {name:"apple", desc:"30", comment:"i love apples"} }
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
                      console.log(this.state)
                      //   const products = {"apple" : {name:"apple", desc:"", comment:""} }
                      products = this.props.productz
                      console.log("this is producz ,", this.props.productz)
                      console.log("this products: ", products)
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
<<<<<<< HEAD
                    
                    
                    }}>Update</Button>
                    
                  {/* <Button onClick={this.saveForm}>Update</Button> */}
                </div>
=======
                    }}>Update</Button>
                </div>  
                {/* <Button onClick={this.props.boolChanger }> updator </Button> */}
                  {Object.keys(products).map((product, i)=> <div key = {i} >ProductName: {product} || Size: {products[product].desc}</div>)}         
>>>>>>> 51181e96c7becb8dd3aa76c2f3caf66c36c55e6c
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
