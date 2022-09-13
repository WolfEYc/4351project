import { useEffect, useState } from "react";
import { createBooking } from "../fetchers/createBooking";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Button, Form } from "react-bootstrap";
import { GetNumBookings } from "../fetchers/getNumBookings";

export function CreateBooking()
{
    const [date, changeDate] = useState(new Date())
    const [guestCount, changeGuestCount] = useState(1)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const handleChangeGuestCount = (event: any) => {
        changeGuestCount(event.target.valueAsNumber);
    };

    const handleNameChange = (event: any) => {
        setName(event.target.value);
    };

    const handlePhoneChange = (event: any) => {
        setPhone(event.target.value.toString());
    };

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    }

    useEffect(() => {
        setName(localStorage.getItem("name") || "")
    }, [])

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        const needPopUp = await GetNumBookings(date);

        let okToBook = true;

        if(needPopUp > 15){
            okToBook = confirm("We will charge $10 for a no show on this day due to a surge in bookings")
        }

        if(!okToBook) return;

        const success = await createBooking({ time: date.toISOString(), guests: guestCount, name: name, phone: phone, email: email })
        

        if(success)
        {
            alert("Created booking successfully")
        }
        else 
        {
            alert("Failed to create booking")
        }
    }
    
    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <DatePicker onChange={(date) => changeDate(date || new Date())} selected={date} showTimeSelect />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="number"
                    placeholder="# of Guests"
                    value={guestCount}
                    onChange={handleChangeGuestCount}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={handleNameChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="number"
                    placeholder="phone number"
                    value={phone}
                    onChange={handlePhoneChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={handleEmailChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Button variant="primary" type="submit">
                    Make Reservation
                </Button>
            </Form.Group>
        </Form>
        </>
    )
}
