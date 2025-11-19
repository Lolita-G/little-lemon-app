import React, { useState } from 'react';

function BookingForm ({ availableTimes, dispatch, submitForm }){
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[phone, setPhone] = useState("");
    const[date, setDate] = useState("");
    const[time, setTime] = useState("");
    const[guests, setGuests] = useState("");
    const[occasion, setOccasion] = useState("");

    const [touched, setTouched] = useState({
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      date: false,
      time: false,
      guests: false,
    });


    const getError = (field) => {
  switch (field) {
    case "firstName":
      return !firstName ? "Please enter your first name" : "";
    case "lastName":
      return !lastName ? "Please enter your last name" : "";
    case "email":
      if (!email) return "Please enter your email";
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return !regex.test(email) ? "Please enter a valid email" : "";
    case "phone":
      return !phone
        ? "Please enter your phone number" : phone.length < 10
        ? "Phone number is too short" : "";
    case "date":
      return !date ? "Please choose a date" : "";
    case "time":
      return !time ? "Please choose a time" : "";
    case "guests":
      return !guests || Number(guests) < 1 ? "Please enter number of guests" : "";
    default:
      return "";
  }
};

    const getIsFormValid = () => {
      return (
        firstName &&
        lastName &&
        email &&
        phone &&
        date &&
        time &&
        Number(guests) >= 1
      );
    };

    const clearForm = () => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setDate("");
      setTime("");
      setGuests("");
      setOccasion("");
       setTouched({
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      date: false,
      time: false,
      guests: false,
    });
   };

   const handleSubmit = (e) => {
    e.preventDefault();
    if (!getIsFormValid()) {
      alert("Please fill all required fields!");
      return;
    }
    const formData = { firstName, lastName, email, phone, date, time, guests, occasion };
    submitForm(formData);
    clearForm();
  };

   const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

    return (
        <form className="booking-form" onSubmit={handleSubmit} aria-label="Reservation Form">
            <fieldset>
                <div className="field">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value.replace(/[^a-zA-Z\s]/g, ""))}
                      onBlur={() => handleBlur("firstName")}
                      required
                      minLength={2}
                      aria-describedby="firstName-error"                
                      aria-label="On Click"
                    />
                    {touched.firstName && getError("firstName") && (
                      <p id="firstName-error" role="alert">{getError("firstName")}</p>
                    )}
                </div>
                <div className="field">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value.replace(/[^a-zA-Z\s]/g, ""))}
                      onBlur={() => handleBlur("lastName")}
                      required
                      minLength={2}
                      aria-describedby="lastName-error"
                      aria-label="On Click"
                    />
                      {touched.lastName && getError("lastName") && (
                        <p id="lastName-error" role="alert">{getError("lastName")}</p>
                      )}
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => handleBlur("email")}
                      required
                      aria-describedby="email-error"
                      aria-label="On Click"
                    />
                    {touched.email && getError("email") && (
                      <p id="email-error" role="alert">{getError("email")}</p>
                    )}
                </div>
                <div className="field">
                    <label htmlFor="phone">Phone number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      value={phone}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9]/g, "");
                        if (value.length <= 12) setPhone(value);
                        }}
                      onBlur={() => handleBlur("phone")}
                      required
                      minLength={10}
                      aria-describedby="phone-error"
                      aria-label="On Click"
                    />
                    {touched.phone && getError("phone") && (
                      <p id="phone-error" role="alert">{getError("phone")}</p>
                    )}
                </div>
                <div className="field">
                    <label htmlFor="res-date">Choose date</label>
                    <input 
                      type="date" 
                      id="res-date"
                      value={date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => {
                        setDate(e.target.value);
                        dispatch({ type: "UPDATE_TIMES", date: e.target.value });
                      }}
                      onBlur={() => handleBlur("date")}
                      required
                      aria-describedby="date-error"
                      aria-label="On Click"
                    />
                    {touched.date && getError("date") && (
                      <p id="date-error" role="alert">{getError("date")}</p>
                    )}
                </div>
                <div className="field">
                    <label htmlFor="res-time">Choose time</label>
                    <select 
                      id="res-time" 
                      value={time} 
                      onChange={(e) => setTime(e.target.value)}
                      onBlur={() => handleBlur("time")}
                      required
                      aria-describedby="time-error"
                      aria-label="On Click"
                    >
                      <option value="">Select a time</option>
                      {availableTimes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    {touched.time && getError("time") && (
                      <p id="time-error" role="alert">{getError("time")}</p>
                    )}
                </div>
                <div className="field">
                    <label htmlFor="guests">Number of guests</label>
                    <input 
                      type="number" 
                      placeholder="1" 
                      min="1" max="10" 
                      id="guests"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      onBlur={() => handleBlur("guests")}
                      required
                      aria-describedby="guests-error"
                      aria-label="On Click"
                    />
                    {touched.guests && getError("guests") && (
                      <p id="guests-error" role="alert">{getError("guests")}</p>
                    )}
                </div>
                <div className="field">
                    <label htmlFor="occasion">Occasion</label>
                    <select
                      id="occasion"
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      aria-label="On Click" 
                    >
                        <option value="">Select an occasion</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <div className="field">
                    <input 
                      type="submit" 
                      value="Make Your reservation"
                      className="btn"
                      disabled={!getIsFormValid()}
                      aria-label="Submit reservation" 
                      />
                </div>
            </fieldset>
        </form>
    );
}

export default BookingForm;