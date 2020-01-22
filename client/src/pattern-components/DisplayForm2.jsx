import React, { Component } from "react";
import { TextInput, Form, Tile, Button } from "carbon-components-react";
import Header from "./Header";
import "./patterns.scss";

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

  saveForm() {}

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
                    labelText="Item Name:"
                    onChange={event => {
                      event.preventDefault();
                      // (event.target.value)
                      this.setState({ itemName: event.target.value });
                    }}
                  />
                </div>
                <div className="display-form-item">
                  <TextInput
                    id="itemSize"
                    value={this.state.itemSize}
                    labelText="Item Size:"
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
                    labelText="Item Size:"
                    onChange={event => {
                      event.preventDefault();
                      // (event.target.value)
                      this.setState({ itemComment: event.target.value });
                    }}
                  />
                </div>
                <div className="left-align">
                  <Button onClick={this.saveForm}>Update</Button>
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
