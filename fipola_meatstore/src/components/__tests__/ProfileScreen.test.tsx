import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/Store";
import { BrowserRouter } from "react-router-dom";
import ProfileScreen from "../../components/profile/ProfileComponent";

describe("profile Screen Testing", () => {
  window.alert = jest.fn();
  test("screen Render", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfileScreen />
        </BrowserRouter>
      </Provider>
    );
    const nameInput = screen.getByTestId("firstName");
    fireEvent.change(nameInput, { target: { value: "sri rama" } });

    expect(nameInput).toHaveValue("sri rama");
  });
  test("testing the register function", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfileScreen />
        </BrowserRouter>
      </Provider>
    );
    const nameInput = screen.getByTestId("firstName");
    fireEvent.change(nameInput, { target: { value: "sri rama" } });
    const nameInput2 = screen.getByTestId("lastName");
    fireEvent.change(nameInput2, { target: { value: "sri rama" } });
    const mailInput = screen.getByTestId("email");
    fireEvent.change(mailInput, { target: { value: "sri rama" } });

    const registerBtn = screen.getByTestId("registerBtn");

    fireEvent.click(registerBtn);

    expect(window.alert).toHaveBeenCalledTimes(1);
  });
  test("test the last name field", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfileScreen />
        </BrowserRouter>
      </Provider>
    );
    const nameInput = screen.getByTestId("lastName");
    fireEvent.change(nameInput, { target: { value: "sri rama" } });

    expect(nameInput).toHaveValue("sri rama");
  });
  test("test the email field", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfileScreen />
        </BrowserRouter>
      </Provider>
    );
    const nameInput = screen.getByTestId("email");
    fireEvent.change(nameInput, { target: { value: "sri rama" } });

    expect(nameInput).toHaveValue("sri rama");
  });
  test("test the email field", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfileScreen />
        </BrowserRouter>
      </Provider>
    );
    const nameInput = screen.getByTestId("number");
    fireEvent.change(nameInput, { target: { value: "9865658998" } });

    expect(nameInput).toHaveValue("9865658998");
  });

  test("testing the register function", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfileScreen />
        </BrowserRouter>
      </Provider>
    );
    const nameInput = screen.getByTestId("firstName");
    fireEvent.change(nameInput, { target: { value: "sri rama" } });
    const nameInput2 = screen.getByTestId("lastName");
    fireEvent.change(nameInput2, { target: { value: "sri rama" } });
    const mailInput = screen.getByTestId("email");
    fireEvent.change(mailInput, { target: { value: "sri rama" } });
    const numInput = screen.getByTestId("number");
    fireEvent.change(numInput, { target: { value: "9865658998" } });
    const registerBtn = screen.getByTestId("registerBtn");
    fireEvent.click(registerBtn);
  });
});
