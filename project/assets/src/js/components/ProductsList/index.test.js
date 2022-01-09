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
});
