import React, { Component } from "react";
import {
  StructuredListWrapper,
  StructuredListRow,
  StructuredListCell,
  StructuredListHead,
  StructuredListBody,
  StructuredListInput,
  Icon
} from "carbon-components-react";
import { iconCheckmarkSolid } from "carbon-icons";
import Header from "./Header";
import "./patterns.scss";

class SimpleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRow: 0
    };
  }

  onRowClick = id => {
    this.setState({ selectedRow: id });
  };

  renderRow = (row, id) => {
    return (
      <StructuredListRow key={id} onClick={() => this.onRowClick(id)}>
        <div>
          <StructuredListInput
            id={`row-${id}`}
            data-testid="list-row"
            value="row-0"
            title="row-0"
            name="row-0"
            //defaultChecked={this.state.selectedRow === id}
            checked={this.state.selectedRow === id}
          />
          <StructuredListCell>
            <Icon
              className="bx--structured-list-svg"
              icon={iconCheckmarkSolid}
            />
          </StructuredListCell>
        </div>

        <StructuredListCell className="simple-list-row">
          {row}
        </StructuredListCell>
      </StructuredListRow>
    );
  };

  render() {
    const productNames = []
    const productSizes = []
    const DNE = []

    for (let i = 0; i < Object.keys(this.props.productz).length; i++) {
      productNames.push('Product Name: ' + Object.keys(this.props.productz)[i])
      productSizes.push('Size: ' + Object.values(this.props.productz)[i]["desc"])
      if (Object.values(this.props.productz)[i]["out"]) DNE.push('Out Stock')
      else DNE.push('In Stock')
    }

    // const data = []

    // for (let i = 0; i<Object.keys(this.props.productz).length; i++) {
    //   data.push('Product Name: ' + Object.keys(this.props.productz)[i] + ' |       Size: '+ Object.values(this.props.productz)[i]["desc"])
    // }
    return (
      <div className="bx--grid pattern-container">
        <Header
          title="Simple List"
          subtitle="This pattern will display an array of model objects in a simple list column list."
        />
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <StructuredListWrapper selection border>
              <StructuredListHead>
                <StructuredListRow head>
                  <StructuredListCell head />
                  <StructuredListCell head>
                    Product List
                  </StructuredListCell>
                </StructuredListRow>
              </StructuredListHead>

              <StructuredListBody>
                {/* Product Name Cell */}
                <StructuredListCell >
                  {productNames.map((row, i) => {
                    return this.renderRow(row, i);
                  })}
                </StructuredListCell>
                {/* Product Size Cell */}
                <StructuredListCell >
                  {productSizes.map((row, i) => {
                    return this.renderRow(row, i);
                  })}
                </StructuredListCell>

                <StructuredListCell >
                  
                  
                    
                  {DNE.map((row, i) => {
                    
                    return (
                      // <button>test </button>
                      <button onClick={()=>{
                        // if(DNE[i]) this.props.productz[i][row]
                        console.log('ProductNames: ' + productNames[0]) 
                        const name = productNames[0]
                        console.log('NAMEEE', name)
                        // let prod = productNames[i]
                        console.log("Props productz : ", this.props.productz[`${productNames[0]}`])
                        console.log("row", i)
                      }}>
                        {this.renderRow(row, i)}
                        </button>
                      );
                    })}
                    
                </StructuredListCell>

              </StructuredListBody>
            </StructuredListWrapper>
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleList;
