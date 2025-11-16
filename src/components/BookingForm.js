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
      return !email ? "Please enter your email" : "";
    case "phone":
      return !phone ? "Please enter your phone number" : "";
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
        <form className="booking-form" onSubmit={handleSubmit}>
            <fieldset>
                <div className="field">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value.replace(/[^a-zA-Z\s]/g, ""))}
                      onBlur={() => handleBlur("firstName")}
                      aria-required="true"
                      aria-describedby="firstName-error"
                    />
                    {touched.firstName && getError("firstName") && (
                      <p>{getError("firstName")}</p>
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
                      aria-required="true"
                      aria-describedby="lastName-error"
                    />
                      {touched.lastName && getError("lastName") && (
                        <p>{getError("lastName")}</p>
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
                      aria-required="true"
                      aria-describedby="email-error"
                    />
                    {touched.email && getError("email") && (
                      <p>{getError("email")}</p>
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
                      aria-required="true"
                      aria-describedby="phone-error"
                    />
                    {touched.phone && getError("phone") && (
                      <p>{getError("phone")}</p>
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
                      aria-required="true"
                      aria-describedby="date-error"
                    />
                    {touched.date && getError("date") && (
                      <p>{getError("date")}</p>
                    )}
                </div>
                <div className="field">
                    <label htmlFor="res-time">Choose time</label>
                    <select 
                      id="res-time" 
                      value={time} 
                      onChange={(e) => setTime(e.target.value)}
                      onBlur={() => handleBlur("time")}
                      aria-required="true"
                      aria-describedby="time-error"
                    >
                      <option value="">Select a time</option>
                      {availableTimes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    {touched.time && getError("time") && (
                      <p>{getError("time")}</p>
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
                      aria-required="true"
                      aria-describedby="guests-error"
                    />
                    {touched.guests && getError("guests") && (
                      <p>{getError("guests")}</p>
                    )}
                </div>
                <div className="field">
                    <label htmlFor="occasion">Occasion</label>
                    <select
                      id="occasion"
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
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
                      />
                </div>
            </fieldset>
        </form>
    );
}

export default BookingForm;