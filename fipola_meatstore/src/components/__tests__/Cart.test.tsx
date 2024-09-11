import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/Store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../cart/Cart";
import SingleCategoryProducts from "../productsCategoryawise/SingleCategoryProducts";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { singleProductCategoryWise } from "../../environment/Data";

describe("cart test", () => {
  const initialState = { cart: singleProductCategoryWise };
  const slice = createSlice({
    name: "mock to get the cart data",
    initialState,
    reducers: {},
  });
  const store = configureStore({
    reducer: { state: slice.reducer },
  });
  test("cart check", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Cart />
        </BrowserRouter>
      </Provider>
    );

    const incrementBtn = screen.getAllByTestId("incrementBtn");
    const quantity = screen.getAllByTestId("quantity");
    fireEvent.click(incrementBtn[0]);
    expect(quantity[0].textContent).toBe("01");
  });
});
