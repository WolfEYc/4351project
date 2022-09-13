import { startFetchGetBookings } from "./getAllBookings";

export async function GetNumBookings(date: Date)
{
    var dateplus1 = new Date();
        
    dateplus1.setDate(date.getDate() + 1);
    
    
    var arr = await startFetchGetBookings({ min: date.toISOString(), max: dateplus1.toISOString() })


    return arr.length;
}
