import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";
import { initializeTimes, updateTimes } from "../pages/Booking";
import { fetchAPI } from "../api";

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

describe("BookingForm static text", () => {
  test("renders all static labels in the form", () => {
    render(<BookingForm availableTimes={initializeTimes()} dispatch={() => {}} submitForm={() => {}} />);
    
    const staticTexts = [
      "First Name",
      "Last Name",
      "Email",
      "Phone number",
      "Choose date",
      "Choose time",
      "Number of guests",
      "Occasion",
      "Make Your reservation" 
    ];

    staticTexts.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

test("renders all available times in the select dropdown", () => {
    const times = initializeTimes();
    render(<BookingForm availableTimes={times}
        dispatch={() => {}}
        submitForm={() => {}} />);

    times.forEach((time) => {
      const option = screen.getByText(time);
      expect(option).toBeInTheDocument();
      expect(option.tagName).toBe("OPTION"); 
    });
  });

test("BookingForm can be submitted by the user", () => {
    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn();
    render(<BookingForm
        availableTimes={initializeTimes()}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
        />);

    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: "Lolita" } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: "Smith" } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "lolita@example.com" } });
    fireEvent.change(screen.getByLabelText(/Phone number/i), { target: { value: "1234567890" } });
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: "2025-11-15" } });

    const timeOptions = screen.getAllByRole("option");
    const availableTimeOption = timeOptions.find(opt => opt.value !== ""); 
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: availableTimeOption.value } });


    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: "2" } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "Birthday" } });

    fireEvent.click(screen.getByText(/Make Your reservation/i));

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockSubmitForm).toHaveBeenCalled();
  });
});

describe("BookingPage functions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("initializeTimes calls fetchAPI and returns available times", () => {
    const result = initializeTimes();

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result).toContain(result[0]); 
  });

  test("updateTimes returns new available times for a given date", () => {
    const state = [];
    const action = { type: "UPDATE_TIMES", date: new Date("2025-11-15") };

    const result = updateTimes(state, action);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });
});

// =============== HTML5 VALIDATION TESTS =====================
describe("BookingForm HTML5 validation", () => {
  test("First Name input has required and minLength attributes", () => {
    render(<BookingForm availableTimes={initializeTimes()} dispatch={() => {}} submitForm={() => {}} />);

    const firstNameInput = screen.getByLabelText(/First Name/i);
    expect(firstNameInput).toHaveAttribute("required");
    expect(firstNameInput).toHaveAttribute("minlength", "2");
  });

  test("Email input has correct type=email", () => {
    render(<BookingForm availableTimes={initializeTimes()} dispatch={() => {}} submitForm={() => {}} />);

    const emailInput = screen.getByLabelText(/Email/i);
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toHaveAttribute("required");
  });

  test("Number of guests has min=1 and max=10", () => {
    render(<BookingForm availableTimes={initializeTimes()} dispatch={() => {}} submitForm={() => {}} />);

    const guestsInput = screen.getByLabelText(/Number of guests/i);
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });
});


// =============== JAVASCRIPT VALIDATION TESTS =====================
describe("BookingForm JS validation", () => {
  test("returns invalid state if required fields are empty", () => {
    const mockSubmit = jest.fn();
    render(
      <BookingForm
        availableTimes={initializeTimes()}
        dispatch={() => {}}
        submitForm={mockSubmit}
      />
    );
    fireEvent.click(screen.getByText(/Make Your reservation/i));
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  test("returns valid state when all fields are filled correctly", () => {
    const mockSubmit = jest.fn();
    render(
      <BookingForm
        availableTimes={initializeTimes()}
        dispatch={() => {}}
        submitForm={mockSubmit}
      />
    );

    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: "John" } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: "Doe" } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText(/Phone number/i), { target: { value: "12345678" } });
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: "2025-11-20" } });

    const timeOption = screen.getAllByRole("option")[1];
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: timeOption.value } });

    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: "2" } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "Birthday" } });

    fireEvent.click(screen.getByText(/Make Your reservation/i));
    expect(mockSubmit).toHaveBeenCalled();
  });
});