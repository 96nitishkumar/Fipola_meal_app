import { render } from "@testing-library/react";
import LoginAndRegister from "../loginAndRegister/LoginAndRegister";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/Store";

jest.mock("swiper/react", () => ({
  Swiper: ({ children }: any) => (
    <div data-testid="swiper-testid">{children}</div>
  ),
  SwiperSlide: ({ children }: any) => (
    <div data-testid="swiper-slide-testid">{children}</div>
  ),
}));
describe("login test", () => {
  test("", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginAndRegister />
        </BrowserRouter>
      </Provider>
    );
  });
});
