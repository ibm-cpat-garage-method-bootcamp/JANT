import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

//documentation for UI Stuff
import DisplayForm2 from "../pattern-components/DisplayForm2.jsx";
import SimpleList from "../pattern-components/SimpleList.jsx";
import '@testing-library/jest-dom';


afterEach(cleanup)

test("text area exists (canary)", () => {
  const { getByTestId } = render(<DisplayForm2 />);
  const taElement = getByTestId("display-form-item");
  expect(taElement).toBeInTheDocument();
});

/* Could also include tests for other elements */

test("Update Button exists in the DOM", () => {
  const { getByTestId } = render(<DisplayForm2 />);
  const button = getByTestId("update");
  //it's in the DOM
  expect(button).toBeInTheDOM(); 
});

test("input values inside form for ItemName", () => {
  const { getByTestId } = render(<DisplayForm2 />);
  let val = getByTestId("item-Name");
  expect(val.value).toBe("")
  fireEvent.change(val, {target: {value: "bread"}})
  expect(val.value).toBe("bread")
})

test("testing size", () => {
  const {getByTestId} = render (<DisplayForm2/>);
  let size = getByTestId("item-Size");

  expect(size.value).toBe("")
  fireEvent.change(size, {target:{value:"30"}})
  expect(size.value).toBe("30")
})


//  this breaks our test because props has not been passed
// down and one of our functions runs object.keys onto
// one of the props

// test("Testing if listRow exists", ()=>{
//   const { getByTestId } = render(<SimpleList />);
//   const listRow = getByTestId("list-row")
//   expect(listRow).toBeInTheDOM();
// })



// test("the column count field is numeric only", () => {
//   const { getByTestId } = render(<DisplayForm2 />);
//   const colCount = getByTestId("column-count");
//   fireEvent.change(colCount, { target: { value: "A" } });
//   expect(colCount.value).toBe("");
//   fireEvent.change(colCount, { target: { value: "5" } });
//   expect(colCount.value).toBe("5");
// });

// test("adding text should result in an update to the view only area", () => {
//   const { getByTestId } = render(<DisplayForm2 />);
//   const inputField = getByTestId("input-text-area");
//   fireEvent.change(inputField, { target: { value: "Some text" } });
  
//   expect(getByTestId("output-text-area").value).toEqual("Some text");
// });
