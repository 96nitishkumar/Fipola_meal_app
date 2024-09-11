import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/Store";
import { BrowserRouter } from "react-router-dom";
import TabComponent from "../homeScreen/TabComponent";

describe("testing the navigations", () => {
  test("test home", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TabComponent />
        </BrowserRouter>
      </Provider>
    );
    const about = screen.getByTestId("aboutUs");
    fireEvent.click(about);
  });
  test("test home", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TabComponent />
        </BrowserRouter>
      </Provider>
    );
    const homeTab = screen.getByTestId("home");
    fireEvent.click(homeTab);
  });
  test("test home", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TabComponent />
        </BrowserRouter>
      </Provider>
    );
    const contact = screen.getByTestId("contact");
    fireEvent.click(contact);
  });
  test("test home", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TabComponent />
        </BrowserRouter>
      </Provider>
    );
    const cart = screen.getByTestId("cart");
    fireEvent.click(cart);
  });
});
