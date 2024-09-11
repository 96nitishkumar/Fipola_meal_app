import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/Store";
import { BrowserRouter } from "react-router-dom";
import DrawerPage from "../homeScreen/Drawer";

describe("testing the drawr render", () => {
  test("render the drawr", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DrawerPage />
        </BrowserRouter>
      </Provider>
    );
  });
});
