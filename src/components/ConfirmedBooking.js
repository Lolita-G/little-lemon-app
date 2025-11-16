import React from "react";

function ConfirmedBooking() {
  return (
    <main className="confirmed-booking">
      <div className="container">
        <div className="confirmed-card">
          <h1 className="booking-title">Booking Confirmed!</h1>
          <p>
            Thank you for your reservation! A confirmation email with all the
            details has been sent to you.
          </p>
        </div>
      </div>
    </main>
  );
}

export default ConfirmedBooking;
