import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/Store";
import { BrowserRouter } from "react-router-dom";
import OtpScreen from "../otpScreen/OtpScreen";
import { Code } from "@mui/icons-material";

describe("testing the otp screen", () => {
  test("test the inputfields", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <OtpScreen />
        </BrowserRouter>
      </Provider>
    );

    const input1 = screen.getByTestId("inputField1") as HTMLInputElement;
    const input11 = screen.getByTestId("inputField11") as HTMLInputElement;
    const input2 = screen.getByTestId("inputField2") as HTMLInputElement;
    const input22 = screen.getByTestId("inputField22") as HTMLInputElement;
    const input3 = screen.getByTestId("inputField3") as HTMLInputElement;
    const input4 = screen.getByTestId("inputField4") as HTMLInputElement;

    fireEvent.change(input1, { target: { value: "1" } });
    expect(input1.value).toBe("1");

    setTimeout(() => {
      expect(input2.disabled).toBe(false);
      expect(input2.value).toBe("");
    }, 10);
    fireEvent.change(input2, { target: { value: "3" } });

    expect(input2.value).toBe("3");
    setTimeout(() => {
      expect(input3.disabled).toBe(false);
      expect(input3.value).toBe("");
    }, 10);
  });

  test("keyup function", () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <OtpScreen />
        </BrowserRouter>
      </Provider>
    );

    const input1 = container.querySelector(
      '[data-testid="inputField1"]'
    ) as HTMLInputElement;
    if (input1) {
      fireEvent.keyUp(input1, { key: "1" });
      const input2 = container.querySelector(
        '[data-testid="inputField2"]'
      ) as HTMLInputElement;
      setTimeout(() => {
        if (input2) {
          expect(input2.disabled).toBe(false);
          const input3 = container.querySelector(
            '[data-testid="inputField3"]'
          ) as HTMLInputElement;
          const input4 = container.querySelector(
            '[data-testid="inputField4"]'
          ) as HTMLInputElement;
          fireEvent.keyUp(input1, { key: "1" });
          fireEvent.keyUp(input2, { key: "2" });
          fireEvent.keyUp(input3, { key: "3" });
          fireEvent.keyUp(input4, { key: "4" });
          fireEvent.keyUp(input3, {
            key: "Backspace",
            code: "Backspace",
            keyCode: "8",
            which: "8",
          });

          expect(input2.disabled).toBe(true);

          expect(document.activeElement).toBe(input1);
        } else {
          fail("Second input field not found");
        }
      }, 10);
    } else {
      fail("First input field not found");
    }
  });
});
