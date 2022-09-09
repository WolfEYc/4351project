import { fetchGraphQL } from "../graphql/fetchGraphQL";


const operationsDoc = `
  query GetUser($id: ID! = "") {
    getUser(id: $id) {
      billingAddress
      mailingAddress
      name
      points
      preferredPaymentMethod
    }
  }
`;

function fetchGetUser(id: string) {
  return fetchGraphQL(
    operationsDoc,
    "GetUser",
    {"id": id}
  );
}

async function startFetchGetUser(id: string) {
  const { errors, data } = await fetchGetUser(id);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);

    return false
  }

  // do something great with this precious data

  return data.getUser
}


export async function getUser(id: string) {
    return await startFetchGetUser(id)
}