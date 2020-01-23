import React, { Component } from "react";

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import DisplayForm2 from "../pattern-components/DisplayForm2"

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  // container *must* be attached to document so events work correctly.
  document.body.appendChild(container);
});


afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("changes value when clicked", () => {
    const onClick = jest.fn();
    act(() => {
      render(<DisplayForm2 onClick={onClick} />, container);
    });

    const button = document.querySelector("[data-testid=update]");
    expect(button.innerHTML).toBe({
        itemName: "",
        itemSize: "",
        itemComment: ""
      });

    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
  
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(button.innerHTML).toBe({
        itemName: "",
        itemSize: "",
        itemComment: ""
      });
});