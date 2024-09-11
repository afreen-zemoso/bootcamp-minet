import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TextFieldComponent, { Props } from "./index";

const renderTextField = (props: Props) => {
  return render(<TextFieldComponent {...props} />);
};

describe("TextFieldComponent", () => {
  test("renders correctly", () => {
    const props: Props = {
      id: "test-id",
      label: "Test Label",
      type: "text",
    };
    const { getByLabelText } = renderTextField(props);
    const textFieldElement = getByLabelText("Test Label");
    expect(textFieldElement).toBeInTheDocument();
  });

  test("toggles show password", () => {
    const props: Props = {
      id: "test-id",
      label: "Test Label",
      type: "password",
    };
    const { getByLabelText, getByRole } = renderTextField(props);
    const textFieldElement = getByLabelText("Test Label");
    const toggleButtonElement = getByRole("button");
    
    expect(textFieldElement.getAttribute("type")).toBe("password");
    fireEvent.click(toggleButtonElement);
    expect(textFieldElement.getAttribute("type")).toBe("text");
    fireEvent.click(toggleButtonElement);
    expect(textFieldElement.getAttribute("type")).toBe("password");
  });
});

