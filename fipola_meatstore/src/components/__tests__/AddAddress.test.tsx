import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/Store";
import AddNewAddress from "../addAddress/AddAddress";
import { BrowserRouter } from "react-router-dom";

describe("addAddress testing", () => {
  test("test the navigation", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddNewAddress />
        </BrowserRouter>
      </Provider>
    );
    const backButton = screen.getByTestId("arrowBackIcon");
    fireEvent.click(backButton);
    expect(window.location.pathname).toBe("/deliveryAddress");
  });
  test("checking the input fields", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddNewAddress />
        </BrowserRouter>
      </Provider>
    );
    const flatno = screen.getByTestId("flatNoField");

    fireEvent.change(flatno, { target: { value: "Maa nilayam" } });
    expect(flatno).toHaveValue("Maa nilayam");
  });
  test("checking the input fields", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddNewAddress />
        </BrowserRouter>
      </Provider>
    );
    const cityField = screen.getByTestId("cityField");

    fireEvent.change(cityField, { target: { value: "Maa nilayam" } });
    expect(cityField).toHaveValue("Maa nilayam");
  });
  test("checking the input fields", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddNewAddress />
        </BrowserRouter>
      </Provider>
    );

    const pincodefield = screen.getByTestId("pincodefield");

    fireEvent.change(pincodefield, { target: { value: "Maa nilayam" } });
    expect(pincodefield).toHaveValue("Maa nilayam");
  });
  test("check the add address onClick", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddNewAddress />
        </BrowserRouter>
      </Provider>
    );
    const addNewButton = screen.getByTestId("addNewButton");
    fireEvent.click(addNewButton);
    expect(window.location.pathname).toBe("/deliveryAddress");
  });
});
