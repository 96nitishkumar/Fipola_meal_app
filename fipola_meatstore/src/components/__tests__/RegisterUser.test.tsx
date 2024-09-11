import { fireEvent, getByText, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/Store";
import { BrowserRouter } from "react-router-dom";
import RegisterPage from "../registerPage/RegisterPage";
import { isDisabled } from "@testing-library/user-event/dist/utils";

describe("new user registration", () => {
  test("test the render", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </Provider>
    );

    const registerText = screen.getByText("Register");
    expect(registerText).toBeInTheDocument();
  });

  test("test the first inputField", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </Provider>
    );
    const nameInput1 = screen.getByTestId("firstName");
    fireEvent.change(nameInput1, { target: { value: "srirama" } });

    expect(nameInput1).toHaveValue("srirama");
  });

  test("test the first inputField with wrong text", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </Provider>
    );
    const nameInput1 = screen.getByTestId("firstName");
    fireEvent.change(nameInput1, { target: { value: "rama" } });

    expect(nameInput1).toHaveValue("rama");
    const errorText = screen.getByText(
      "*first name should be greater than 4 characters"
    );
    expect(errorText).toBeInTheDocument();
  });
  test("test the first inputField with wrong text", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </Provider>
    );
    const lastNameInput1 = screen.getByTestId("lastName");
    fireEvent.change(lastNameInput1, { target: { value: "rama" } });

    expect(lastNameInput1).toHaveValue("rama");
  });
  test("test the first inputField with wrong text", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </Provider>
    );
    const lastNameInput1 = screen.getByTestId("lastName");
    fireEvent.change(lastNameInput1, { target: { value: "ra" } });

    expect(lastNameInput1).toHaveValue("ra");
    const errorText = screen.getByText(
      "*last name should be greater than 2 characters"
    );
    expect(errorText).toBeInTheDocument();
  });
  test("email field test", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </Provider>
    );

    const emailField = screen.getByTestId("emailField");
    fireEvent.change(emailField, { target: { value: "abcd@gmail.com" } });
    expect(emailField).toHaveValue("abcd@gmail.com");
  });
  test("email field test", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </Provider>
    );

    const emailField = screen.getByTestId("emailField");
    fireEvent.change(emailField, { target: { value: "abcdgmail.com" } });
    expect(emailField).toHaveValue("abcdgmail.com");
    const errorText = screen.getByText("*invalid email");
    expect(errorText).toBeInTheDocument();
  });
  test("phone number field test", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </Provider>
    );

    const numberField = screen.getByTestId("phoneNumberField");
    fireEvent.change(numberField, { target: { value: "abcdgmail" } });
    expect(numberField).toHaveValue(null);
    //   const errorText = screen.getByText("*invalid email");
    //   expect(errorText).toBeInTheDocument();
  });
  test("phone number field test", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </Provider>
    );

    const numberField = screen.getByTestId("phoneNumberField");
    fireEvent.change(numberField, { target: { value: 9632586325 } });
    expect(numberField).toHaveValue(9632586325);
  });
  test("phone number short of 10 digits", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </Provider>
    );

    const numberField = screen.getByTestId("phoneNumberField");
    fireEvent.change(numberField, { target: { value: 96325863 } });
    expect(numberField).toHaveValue(96325863);
    const errorText = screen.getByText(
      "*mobile number should be 10 digits only"
    );
    expect(errorText).toBeInTheDocument();
  });
  test("phone number excess of 10 digits", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </Provider>
    );

    const numberField = screen.getByTestId("phoneNumberField");
    fireEvent.change(numberField, { target: { value: 96325863232 } });
    expect(numberField).toHaveValue(96325863232);
    const errorText = screen.getByText(
      "*mobile number should be 10 digits only"
    );
    expect(errorText).toBeInTheDocument();
  });

  test("correct password testing", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </Provider>
    );

    const passwordField = screen.getByTestId("passwordField");
    fireEvent.change(passwordField, { target: { value: "AaAa@123" } });
    expect(passwordField).toHaveValue("AaAa@123");
  });

  test(" password testing size", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </Provider>
    );

    const passwordField = screen.getByTestId("passwordField");
    fireEvent.change(passwordField, { target: { value: "AaAa@12" } });
    expect(passwordField).toHaveValue("AaAa@12");
    const errorMsg = screen.getByText(
      "*password must be greater than 8 characters and should contain at least one uppercase letter, one lowercase letter, one number and one special character"
    );
    expect(errorMsg).toBeInTheDocument();
  });
  test(" password testing with no special character ", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </Provider>
    );

    const passwordField = screen.getByTestId("passwordField");
    fireEvent.change(passwordField, { target: { value: "AaAa1255" } });
    expect(passwordField).toHaveValue("AaAa1255");
    const errorMsg = screen.getByText(
      "*password must be greater than 8 characters and should contain at least one uppercase letter, one lowercase letter, one number and one special character"
    );
    expect(errorMsg).toBeInTheDocument();
  });
  test(" password testing with no capital character ", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </Provider>
    );

    const passwordField = screen.getByTestId("passwordField");
    fireEvent.change(passwordField, { target: { value: "aaaa@125" } });
    expect(passwordField).toHaveValue("aaaa@125");
    const errorMsg = screen.getByText(
      "*password must be greater than 8 characters and should contain at least one uppercase letter, one lowercase letter, one number and one special character"
    );
    expect(errorMsg).toBeInTheDocument();
  });

  test(" password testing with no smallcase character ", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </Provider>
    );

    const passwordField = screen.getByTestId("passwordField");
    fireEvent.change(passwordField, { target: { value: "AAAA@125" } });
    expect(passwordField).toHaveValue("AAAA@125");
    const errorMsg = screen.getByText(
      "*password must be greater than 8 characters and should contain at least one uppercase letter, one lowercase letter, one number and one special character"
    );
    expect(errorMsg).toBeInTheDocument();
  });
  test(" password testing with no number ", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </Provider>
    );

    const passwordField = screen.getByTestId("passwordField");
    fireEvent.change(passwordField, { target: { value: "AAAA@asdsd" } });
    expect(passwordField).toHaveValue("AAAA@asdsd");
    const errorMsg = screen.getByText(
      "*password must be greater than 8 characters and should contain at least one uppercase letter, one lowercase letter, one number and one special character"
    );
    expect(errorMsg).toBeInTheDocument();
  });

  test("test the register Button", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </Provider>
    );

    const nameInput1 = screen.getByTestId("firstName");
    const numberField = screen.getByTestId("phoneNumberField");
    const emailField = screen.getByTestId("emailField");
    const passwordField = screen.getByTestId("passwordField");
    const lastNameInput1 = screen.getByTestId("lastName");
    const registerButton = screen.getByTestId("registerButton");

    fireEvent.change(nameInput1, { target: { value: "srirama" } });
    fireEvent.change(lastNameInput1, { target: { value: "rama" } });
    fireEvent.change(emailField, { target: { value: "abcd@gmail.com" } });
    fireEvent.change(numberField, { target: { value: 9632586325 } });
    fireEvent.change(passwordField, { target: { value: "AaAa@123" } });

    expect(nameInput1).toHaveValue("srirama");
    expect(lastNameInput1).toHaveValue("rama");
    expect(passwordField).toHaveValue("AaAa@123");
    expect(emailField).toHaveValue("abcd@gmail.com");
    expect(numberField).toHaveValue(9632586325);

    expect(isDisabled(registerButton)).toBe(false);
  });

  test("test the  register Button no errors", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </Provider>
    );

    const nameInput1 = screen.getByTestId("firstName");
    const numberField = screen.getByTestId("phoneNumberField");
    const emailField = screen.getByTestId("emailField");
    const passwordField = screen.getByTestId("passwordField");
    const lastNameInput1 = screen.getByTestId("lastName");
    const registerButton = screen.getByTestId("registerButton");

    fireEvent.change(nameInput1, { target: { value: "srirama" } });
    fireEvent.change(lastNameInput1, { target: { value: "rama" } });
    fireEvent.change(emailField, { target: { value: "abcd@gmail.com" } });
    fireEvent.change(numberField, { target: { value: 9632586325 } });
    fireEvent.change(passwordField, { target: { value: "AaAa1123" } });

    expect(isDisabled(registerButton)).toBe(true);
  });
  test("test the  register Button no errors", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </Provider>
    );

    const nameInput1 = screen.getByTestId("firstName");
    const numberField = screen.getByTestId("phoneNumberField");
    const emailField = screen.getByTestId("emailField");
    const passwordField = screen.getByTestId("passwordField");
    const lastNameInput1 = screen.getByTestId("lastName");

    fireEvent.change(nameInput1, { target: { value: "sri rama" } });
    fireEvent.change(lastNameInput1, { target: { value: "rama" } });
    fireEvent.change(emailField, { target: { value: "abcd@gmail.com" } });
    fireEvent.change(numberField, { target: { value: 9632586325 } });
    fireEvent.change(passwordField, { target: { value: "AaAa@1123" } });

    const registerButton = screen.getByTestId("registerButton");
    fireEvent.click(registerButton);
    expect(isDisabled(registerButton)).toBe(false);
  });
});
