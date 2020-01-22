import React, { Component } from "react";
import { TextInput, Form, DropdownV2, Tile } from "carbon-components-react";
import Header from "./Header";
import "./patterns.scss";
import { product } from '../functionality/actions'
class DisplayForm extends Component {
  constructor(props) {
    super(props);
    const defaultData = product;
    this.state = {
      data: props.data || defaultData,
      
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) this.setState({ data: nextProps.data });
  }


  render() {
    const data = this.state.data;
    return (
      <div className="bx--grid">
        { (
          <Header
            title="Display Form"
            subtitle="Displays a model object as a form in a read only display."
          />
        )}
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <Tile>
              <Form>
                {/* {console.log(data)} */}
                {data.map(item => {
                  if (item.type === "textinput") {
                    return (
                      <div key={item.label} className="display-form-item">
                        <TextInput
                          
                          id={item.label}
                          value={data}
                          // value = {'hello'}
                          labelText={
                            item.label.charAt(0).toUpperCase() +
                            item.label.slice(1).replace(/([A-Z])/g, " $1")
                          }
                        }
                        />
                      </div>
                    );
                  } else if (item.type === "dropdown") {
                    return (
                      <div key={item.label} className="display-form-item">
                        <p className="bx--label left-align">{item.label}</p>
                        <DropdownV2
                          
                          id={item.label}
                          label={"Select a " + item.label.toLowerCase() + ".."}
                          items={item.value}
                          selectedItem={item.value[0]}
                        />
                      </div>
                    );
                  } else {
                    return <div />;
                  }
                })}




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
export default DisplayForm;
