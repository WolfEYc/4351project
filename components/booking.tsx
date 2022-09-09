


export function Booking(props: {time: string, guests: number, name: string, phone: number, number: number })
{
    return <tr>
        <td>{ props.number }</td>
        <td>{new Date(props.time).toLocaleDateString()}</td>
        <td>{props.guests}</td>
        <td>{props.name}</td>
        <td>{props.phone}</td>
    </tr>
}