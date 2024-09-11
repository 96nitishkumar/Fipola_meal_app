import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/Store";
import { BrowserRouter } from "react-router-dom";
import OurCategory, { dataFordifferentMeats } from "../ourCategory/OurCategory";

describe("testing the category", () => {
  test("updated the data ", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <OurCategory />
        </BrowserRouter>
      </Provider>
    );
    const meatName = screen.getAllByTestId("meatsName");
    expect(meatName[0]).toHaveTextContent(dataFordifferentMeats[0].name);
  });
});
