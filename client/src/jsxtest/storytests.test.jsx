import React from "react";
import { render, cleanup } from "@testing-library/react";
import DisplayForm2 from "../pattern-components/DisplayForm2.jsx";
import '@testing-library/jest-dom';
afterEach(cleanup);

test("text area exists (canary)", () => {
  const { getByTestId } = render(<DisplayForm2 />);
  const taElement = getByTestId("display-form-item");
  expect(taElement).toBeInTheDocument();
});

/* Could also include tests for other elements */

// test("the default column count should be 30", () => {
//   const { getByTestId } = render(<DisplayForm2 />);
//   const colCount = getByTestId("column-count");
//   expect(colCount.value).toBe("30");
// });

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
