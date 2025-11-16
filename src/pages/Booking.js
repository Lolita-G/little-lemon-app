import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../api";
/* 
export const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

export function initializeTimes() {
  const today = new Date().toISOString().split("T")[0]; // "2025-11-11"
  return fetchAPI(today);
}

// updateTimes возвращает state (для упрощенного теста)
export function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(action.date); // получаем доступные времена для выбранной даты
  }
  return state;
}

function Booking() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes, initializeTimes);
*/
// Step 2.1 — инициализация: берём времена из API для сегодняшней даты
export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

// Step 2.2 — обновление: вызываем fetchAPI с новой датой из action.date
export function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(new Date(action.date));
  }
  return state;
}

function Booking() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

const navigate = useNavigate();

const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmed-booking"); // переходим на страницу подтверждения
    } else {
      alert("Failed to submit reservation. Please try again.");
    }
  };

  return (
     <main>
      <div className="container">
        <h1 className="booking-title">Reserve a Table</h1>
        <BookingForm
        availableTimes={availableTimes} 
        dispatch={dispatch}
        submitForm={submitForm}
        />
      </div>
    </main>
  );
}

export default Booking;
