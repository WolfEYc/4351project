

export function DisplayableUser(props: { billingAddress: string,  mailingAddress: string, name: string, points: string, preferredPaymentMethod: string })
{
    return <>
        {props.name}
        {props.points}
    </>


}