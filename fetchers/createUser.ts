import { fetchGraphQL } from "../graphql/fetchGraphQL";

  
const operationsDoc = `
mutation AddUser($billingAddress: String! = "", $mailingAddress: String! = "", $name: String! = "", $preferredPaymentMethod: String! = "") {
    addUser(input: {name: $name, mailingAddress: $mailingAddress, points: 0, billingAddress: $billingAddress, preferredPaymentMethod: $preferredPaymentMethod}) {
    numUids
    }
}
`;
  
function executeAddUser(billingAddress: string, mailingAddress: string, name: string, preferredPaymentMethod: string) {
    return fetchGraphQL(
        operationsDoc,
        "AddUser",
        {"billingAddress": billingAddress, "mailingAddress": mailingAddress, "name": name, "preferredPaymentMethod": preferredPaymentMethod}
    );
}
  
async function startExecuteAddUser(billingAddress: string, mailingAddress: string, name: string, preferredPaymentMethod: string) {
    const { errors, data } = await executeAddUser(billingAddress, mailingAddress, name, preferredPaymentMethod);

    if (errors) {
        // handle those errors like a pro
        console.error(errors);
    }

    // do something great with this precious data
    return data.addUser.numUids == 1
}
  
export async function createUser(billingAddress: string, mailingAddress: string, name: string, preferredPaymentMethod: string)
{
    localStorage.setItem("mailing", mailingAddress);

    return await startExecuteAddUser(billingAddress, mailingAddress, name, preferredPaymentMethod);
}
  
  