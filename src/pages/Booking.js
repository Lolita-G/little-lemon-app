import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../api";

export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

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
      navigate("/confirmed-booking"); 
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
