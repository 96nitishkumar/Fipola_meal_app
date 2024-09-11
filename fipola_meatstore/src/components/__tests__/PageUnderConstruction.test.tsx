import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/Store";
import { BrowserRouter } from "react-router-dom";
import PageUnderConstruction from "../pageUnderConstruction/PageUnderConstruction";

describe("the fallback page", () => {
  jest.useFakeTimers();
  test("fallBack PageRender", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PageUnderConstruction />
        </BrowserRouter>
      </Provider>
    );
    act(() => {
      jest.advanceTimersByTime(7000);
    });
    expect(window.location.pathname).toBe("/home");
  });
  test("checking home Navigation Button", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PageUnderConstruction />
        </BrowserRouter>
      </Provider>
    );

    const homeButton = screen.getByTestId("homeButton");
    fireEvent.click(homeButton);
    expect(window.location.pathname).toBe("/home");
  });
});
