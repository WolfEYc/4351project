import { useEffect, useState } from "react";
import { startFetchGetBookings } from "../fetchers/getAllBookings";

import { Button, Form, Table } from "react-bootstrap";
import { Booking } from "./booking";



export function GetBookings()
{
    const [bookings, setBookings] = useState(new Array())

    useEffect(() => {
        var now = new Date();
        
        now.setDate(now.getDate() + 1);

        GetBookings(now);
    }, [])

    const GetBookings = async (futureDate: Date) => {

        var data = await startFetchGetBookings({ min: new Date().toISOString(), max: futureDate.toISOString()})
        
        for(let i = 0; i < data.length; i++)
        {
            data[i]["number"] = i;
        }

        setBookings(data)
    
    }


    return <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Date</th>
        <th>Guests</th>
        <th>Name</th>
        <th>Phone No</th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map((booking) => <Booking {...booking} key={booking.number}/>)
      }
    </tbody>
  </Table>

}
