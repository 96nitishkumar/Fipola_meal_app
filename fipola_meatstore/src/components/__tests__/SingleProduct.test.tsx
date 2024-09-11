import { render } from "@testing-library/react";
import store from "../../redux/Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import SingleProduct from "../singleProduct/SingleProduct";

describe("testing the single product screen", () => {
  test("test this one ", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SingleProduct />
        </BrowserRouter>
      </Provider>
    );
  });
});
