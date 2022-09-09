import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { setPoints } from "../fetchers/setPoints"

export function SetPoints()
{
    const [id, setId] = useState("")
    const [points, setPts] = useState("")

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        console.log(points)

        const success = await setPoints(id, points)

        if(success)
        {
            alert("Set points successfully")
        }
        else
        {
            alert("Failed to set points")
        }
    }

    return  <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="id"
                    value={id}
                    onChange={(ev: any) => {setId(ev.target.value)}}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="number"
                    placeholder="points"
                    value={points}
                    onChange={(ev: any) => {setPts(ev.target.value)}}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Button variant="primary" type="submit">
                    Set Points
                </Button>
            </Form.Group>
        </Form>
    </>

}
