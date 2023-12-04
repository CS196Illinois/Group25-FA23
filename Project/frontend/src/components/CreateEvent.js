import React, { useState } from "react";
import axios from "axios";
import Text from "./Text.js";
import { Button, Form } from "react-bootstrap";
import "../css/form.css";

const CreateEvent = (props) => {
  // State to manage form input values
  const [event_name, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [category, setCategory] = useState("");

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
        category,
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
      category,
    });
    // Reset form fields after submission
    setEventName("");
    setDescription("");
    setDate("");
    setTime("");
    setLocation("");
    setOrganizer("");
    setCategory("");
  };


  return (
    <div>
      <center>
        <Text size={2} {...props}>Create Event</Text>
        <br />
        <Form onSubmit={handleSubmit} {...props}>
          <Text size={6} {...props}>
            Event Title: 
            <FormField placeholder="Event Title" value={event_name}
              onChange={(e) => setEventName(e.target.value)}>
            </FormField>
          </Text>
          <Text size={6} {...props}>
            Description:
            <FormField placeholder="Describe your event here" value={description} rows={3}
              onChange={(e) => setDescription(e.target.value)}>
            </FormField>
          </Text>
          <Text size={6} {...props}>
            Date:
            <Form.Control type="date" size="sm" value={date} onChange={(e) => setDate(e.target.value)}  {...props} />
          </Text>
          <br />
          <Text size={6} {...props}>
            Time:
            <Form.Control type='time' size="sm" value={time} onChange={(e) => setTime(e.target.value)} {...props}/>
          </Text> 
          <br />
          <Text size={6} {...props}>
            Location:
            <FormField value={location} onChange={(e) => setLocation(e.target.value)} />
          </Text>
          <Text size={6} {...props}>
            Organizer:
            <FormField value={organizer} onChange={(e) => setOrganizer(e.target.value)} />
          </Text>
          <Text size={6} {...props}>
            Category:
            <FormSelect
              name="category" 
              id="category" 
              value={category} 
              onChange={e => setCategory(e.target.value)}
            >
              <option value="">Choose category</option>
              <option value="Politics">Politics</option>
              <option value="Technology">Technology</option>
              <option value="Science">Science</option>
              <option value="Socials">Socials</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Others">Others</option>
            </FormSelect>
          </Text>
          <br />
          <Button type='submit' size="sm" class="btn-custom" {...props}>Create Event</Button>
        </Form>
      </center>
    </div>
  );
};

const FormField = (props) => {
  return (
      <Form>
        <Form.Group className="mb-3" {...props}>
          <Form.Control size="sm" as="textarea" {...props} class="form-field"/>
        </Form.Group>
      </Form>
  )
}

const FormSelect = (props) => {
  return (
      <Form>
        <Form.Group className="mb-3" {...props}>
          <Form.Select size="sm" {...props} class="form-select"/>
        </Form.Group>
      </Form>
  )
}


export default CreateEvent;