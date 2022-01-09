import "@babel/polyfill";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import {ProductsList} from "./index";

describe("Products", () => {
  it("renders without props", async () => {
    const component = render(
      <MemoryRouter>
        <ProductsList />
      </MemoryRouter>
    );
    expect(component).toBeTruthy();
  });

  it("calls fetchProducts on mounting", async () => {
    const mockedFunc = jest.fn();
    expect(mockedFunc).not.toBeCalled();
    render(
      <MemoryRouter>
        <ProductsList fetchProducts={mockedFunc} />
      </MemoryRouter>
    );
    expect(mockedFunc).toBeCalled();
  });

  it("renders hero message if passed", async () => {
    const message = "Products List";
    render(
      <MemoryRouter>
        <ProductsList />
      </MemoryRouter>
    );
    expect(screen.getByText(message)).toBeTruthy();
  });
});
