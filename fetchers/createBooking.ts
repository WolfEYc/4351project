import { fetchGraphQL } from "../graphql/fetchGraphQL";

const operationsDoc = `
  mutation createBooking($input: [AddBookingInput!]!) {
    addBooking(input: $input) {
      numUids
    }
  }
`;

function executeCreateBooking(input: { time: string, guests: Number, name: string, phone: string, email: string }) {
  return fetchGraphQL(
    operationsDoc,
    "createBooking",
    {"input": input }
  );
}

async function startExecuteCreateBooking(input: { time: string; guests: Number; name: string; phone: string; email: string }) {
  
    console.log(input)

    const { errors, data } = await executeCreateBooking(input);

    if (errors) {
        // handle those errors like a pro
        console.error(errors);
        return false
    }

    return true
}

export async function createBooking(input: { time: string; guests: Number; name: string; phone: string; email: string }) {
    if(input.name.length < 3 || (input.phone.length != 10 && input.phone.length != 11)){
        return false
    }
    
    return await startExecuteCreateBooking(input)
}
