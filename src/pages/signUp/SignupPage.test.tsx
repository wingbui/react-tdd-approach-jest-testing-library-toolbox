import { render, screen } from "@testing-library/react";

import { SignUpPage } from "./SignUpPage";

describe("SignUpPage", () => {
  describe("Template", () => {
    it("should have a header", () => {
      render(<SignUpPage />);

      const heading = screen.queryByRole("heading", { name: "Sign Up" });

      expect(heading).toBeInTheDocument();
    });

    it("should have Username input", () => {
      render(<SignUpPage />);

      const input = screen.getByLabelText("Username");

      expect(input).toBeInTheDocument();
    });

    it("should have placeholder username", () => {
      render(<SignUpPage />);

      const placeholder = screen.queryByPlaceholderText("username");

      expect(placeholder).toBeInTheDocument();
    });

    it("should have Email input", () => {
      render(<SignUpPage />);

      const input = screen.getByLabelText("Email");

      expect(input).toBeInTheDocument();
    });

    it("should have placeholder email", () => {
      render(<SignUpPage />);

      const placeholder = screen.getByPlaceholderText("email");

      expect(placeholder).toBeInTheDocument();
    });

    it("should have Password input", () => {
      render(<SignUpPage />);

      const input = screen.getByLabelText("Password");

      expect(input).toBeInTheDocument();
    });

    it("should have placeholder password", () => {
      render(<SignUpPage />);

      const placeholder = screen.getByPlaceholderText("password");

      expect(placeholder).toBeInTheDocument();
    });

    it("should have Password Confirm input", () => {
      render(<SignUpPage />);

      const input = screen.getByLabelText("Password Confirm");

      expect(input).toBeInTheDocument();
    });

    it("should have password type for password input", () => {
      render(<SignUpPage />);

      const input = screen.queryByLabelText("Password") as HTMLInputElement;

      expect(input.type).toBe("password");
    });

    it("should have placeholder password confirm", () => {
      render(<SignUpPage />);

      const placeholder = screen.getByPlaceholderText("password confirm");

      expect(placeholder).toBeInTheDocument();
    });

    it("should have password type for password confirm input", () => {
      render(<SignUpPage />);

      const input = screen.queryByLabelText(
        "Password Confirm"
      ) as HTMLInputElement;

      expect(input.type).toBe("password");
    });

    it("should have Sign Up button", () => {
      render(<SignUpPage />);

      const button = screen.queryByRole("button", { name: "Sign Up" });

      expect(button).toBeInTheDocument();
    });

    it("should disable the button initially", () => {
      render(<SignUpPage />);

      const button = screen.queryByRole("button", { name: "Sign Up" });

      expect(button).toBeDisabled();
    });
  });
});
