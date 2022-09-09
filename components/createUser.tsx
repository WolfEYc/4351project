import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { createUser } from "../fetchers/createUser"

export function CreateUser()
{

    const [billing, setBilling] = useState("")
    const [mailing, setMailing] = useState("")
    const [payment, setPayment] = useState("")
    const [name, setName] = useState("")

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        const success = await createUser(billing, mailing, name, payment)

        if(success)
        {
            alert("Created user successfully")
        } else 
        {
            alert("Failed to create user")
        }
    }

    return <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="billing address (leave blank if same as mailing)"
                    value={billing}
                    onChange={(ev: any) => {setBilling(ev.target.value)}}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="mailing address"
                    value={mailing}
                    onChange={(ev: any) => {setMailing(ev.target.value)}}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(ev: any) => {setName(ev.target.value)}}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="prefered payment method"
                    value={payment}
                    onChange={(ev: any) => {setPayment(ev.target.value)}}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Button variant="primary" type="submit">
                    Create Account
                </Button>
            </Form.Group>
        </Form>
    </>
}