import React, { useState } from "react";
import axios from "axios";

const CreateEvent = () => {
  // State to manage form input values
  const [event_name, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [organizer, setOrganizer] = useState("");

  //   axios
  //   .post("https://example.con/login", { email, password })
  //   .then(response => {
  //     console.log(response)
  //     // Handle response
  //   })
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/", {
        event_name,
        description,
        date,
        time,
        location,
        organizer,
      })
      .then((response) => {
        console.log(response);
      });
    // Perform the logic to send the form data to the server
    // (e.g., using axios to make a POST request)
    console.log("Form submitted:", {
      event_name,
      description,
      date,
      time,
      location,
    });
    // Reset form fields after submission
    setEventName("");
    setDescription("");
    setDate("");
    setTime("");
    setLocation("");
  };

  return (
    <div>
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            type='text'
            value={event_name}
            onChange={(e) => setEventName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          Time:
          <input
            type='time'
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type='text'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <br />
        <label>
          Organizer:
          <input
            type='text'
            value={organizer}
            onChange={(e) => setOrganizer(e.target.value)}
          />
        </label>
        <button type='submit'>Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
