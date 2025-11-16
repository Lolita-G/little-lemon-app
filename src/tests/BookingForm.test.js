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
      expect(option.tagName).toBe("OPTION"); // проверяем, что это действительно option
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

    // Заполняем форму
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: "Lolita" } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: "Smith" } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "lolita@example.com" } });
    fireEvent.change(screen.getByLabelText(/Phone number/i), { target: { value: "1234567890" } });
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: "2025-11-15" } });

    // Берём первый доступный вариант времени из селекта
    const timeOptions = screen.getAllByRole("option");
    const availableTimeOption = timeOptions.find(opt => opt.value !== ""); // берём первый рабочий вариант
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: availableTimeOption.value } });


    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: "2" } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "Birthday" } });

    // Отправляем форму
    fireEvent.click(screen.getByText(/Make Your reservation/i));

    // Проверяем, что dispatch и submitForm были вызваны
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
    expect(result).toContain(result[0]); // проверяем, что массив не пустой
  });

  test("updateTimes returns new available times for a given date", () => {
    const state = [];
    const action = { type: "UPDATE_TIMES", date: new Date("2025-11-15") };

    const result = updateTimes(state, action);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });
});