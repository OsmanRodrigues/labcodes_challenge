import "@babel/polyfill";
import React from "react";
import { MemoryRouter, Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import { ProductDetailsPage } from "./index";

class ProductsListPageWithRouteProps extends React.Component {

  render() {
    const mockedMatchParams = { params: { code: 'P-0005' } };

    return <ProductDetailsPage match={mockedMatchParams} {...this.props} />;
  }
}

describe("Product detail", () => {
  it("renders without props", async () => {
    const component = render(
      <MemoryRouter>
        <ProductsListPageWithRouteProps />
      </MemoryRouter>
    );
    expect(component).toBeTruthy();
  });

  it("calls fetchProduct on mounting", async () => {
    const mockedFunc = jest.fn();
    expect(mockedFunc).not.toBeCalled();
    render(
      <MemoryRouter>
        <ProductsListPageWithRouteProps fetchProduct={mockedFunc} />
      </MemoryRouter>
    );
    expect(mockedFunc).toBeCalled();
  });

  it("renders product name and available quantity if passed", async () => {
    const mockedProduct = { name: 'My product', available_quantity: 10 };
    render(
      <MemoryRouter>
        <ProductsListPageWithRouteProps product={mockedProduct} />
      </MemoryRouter>
    );
    expect(screen.getByText(mockedProduct.name, { exact: true })).toBeTruthy();
    expect(screen.getByText(mockedProduct.available_quantity, { exact: true })).toBeTruthy();
  });
});
