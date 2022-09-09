import { fetchGraphQL } from "../graphql/fetchGraphQL";

const operationsDoc = `
  mutation createBooking($input: [AddBookingInput!] = {time: "", guests: 10, name: "", phone: ""}) {
    addBooking(input: $input) {
      numUids
    }
  }
`;

function executeCreateBooking(input: { time: string, guests: Number, name: string, phone: string }) {
  return fetchGraphQL(
    operationsDoc,
    "createBooking",
    {"input": input }
  );
}

async function startExecuteCreateBooking(input: { time: string; guests: Number; name: string; phone: string; }) {
  
    console.log(input)

    const { errors, data } = await executeCreateBooking(input);

    if (errors) {
        // handle those errors like a pro
        console.error(errors);
        return false
    }

    return true
}

export async function createBooking(input: { time: string; guests: Number; name: string; phone: string; }) {
    return await startExecuteCreateBooking(input)
}