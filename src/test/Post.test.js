import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Post from "../components/Post";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Renders blue correctly when score is odd", () => {
    act(() => {
        const post = {data: {score: 1}};
        render(<Post post={post}/>, container);
    });
    expect(container.firstChild.classList.contains('blue-background')).toBe(true);
});

it("Renders orange correctly when score is even", () => {
    act(() => {
        const post = {data: {score: 2}};
        render(<Post post={post}/>, container);
    });
    expect(container.firstChild.classList.contains('orange-background')).toBe(true);
});




