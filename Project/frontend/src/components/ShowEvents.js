import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import useDebounce from "./hooks/use-debounce";
import Text from "./Text.js";
import { Form } from 'react-bootstrap';
import "../css/form.css";

import AuthContext from '../context/AuthContext';


const url = 'http://127.0.0.1:8000/search'

const ShowEvents = (props) => {

    const [events, setEvents] = useState([])
    const [searchText, setSearchText] = useState("")
    const [nameText, setNameText] = useState("")
    const [orderText, setOrderText] = useState("")
    const debounce = useDebounce(events, 250)

    let {authTokens, logoutUser} = useContext(AuthContext)

    /**
    const getEvents = async () => {
        const response = await axios.get('http://localhost:8000/')
        setEvents(response.data)
    }
    */
    const getEvents = async () => {
        const response = await axios.get('http://localhost:8000/api/')
        if (response.status === 200) {
            setEvents(response.data)
        } else if (response.statusText === "Unauthorized") {
            logoutUser()
        }
        
    }

    useEffect(() => {
        fetchData()
    }, [debounce])
    
    const fetchData = async() => {
        const endpoint = `${url}/posts/?category=${nameText}&search=${searchText}&ordering=${orderText}`
    
        try {
            const response = await axios.get(endpoint)
          //const events = await response.json()
            console.log(response.data)
            setEvents(response.data)
        } catch (e) {
            console.log(e)
        }
    }    



    return (
        <div>
            <Text size={2} {...props}>
                Events 
            </Text>
            <br />
            <div>
                <Form.Control 
                    type="search" 
                    placeholder="search..." 
                    value={searchText} 
                    onChange={e => setSearchText(e.target.value)}
                />
                <FormSelect  
                    name="ordering" 
                    id="ordering" 
                    value={orderText} 
                    onChange={e => setOrderText(e.target.value)}
                >
                    <option value="">Choose ordering</option>
                    <option value="event_name">Event - Ascending</option>
                    <option value="-event_name">Event - Descending</option>
                    <option value="description">Description - Ascending</option>
                    <option value="-description">Description - Descending</option>
                    <option value="date">Date - Earliest</option>
                    <option value="-date">Date - Latest</option>
                    <option value="time">Time - Earliest</option>
                    <option value="-time">Time - Latest</option>
                    <option value="location">Location - Ascending</option>
                    <option value="-location">Location - Descending</option>
                    <option value="organizer">Organizer - Ascending</option>
                    <option value="-organizer">Organizer - Descending</option>
                </FormSelect>
                <FormSelect
                    name="category" 
                    id="category" 
                    value={nameText} 
                    onChange={e => setNameText(e.target.value)}
                >
                    <option value="">Choose category</option>
                    <option value="Politics">Politics</option>
                    <option value="Technology">Technology</option>
                    <option value="Science">Science</option>
                    <option value="Socials">Socials</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Others">Others</option>
                </FormSelect>
            </div>
            {
                events && events.map(event =>
                    <ul>
                        <Text size={6} key={event.id} {...props}>
                            Event: {event.event_name} <br></br>
                            Description: {event.description} <br></br>
                            Date: {event.date} <br></br>
                            Time: {event.time} <br></br>
                            Location: {event.location} <br></br>
                            Organizer: {event.organizer} <br></br>
                            Category: {event.category}
                        </Text>
                    </ul>
                )
            }
        </div>
    );
};

const FormSelect = (props) => {
    return (
        <Form>
            <Form.Group className="mb-3" {...props}>
                <Form.Select size="sm" {...props} class="form-select"/>
            </Form.Group>
        </Form>
    )
}

export default ShowEvents;