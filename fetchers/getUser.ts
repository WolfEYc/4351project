import { fetchGraphQL } from "../graphql/fetchGraphQL";

export let User: { billingAddress: string,  mailingAddress: string, name: string, points: string, preferredPaymentMethod: string }

const operationsDoc = `
  query MyQuery($eq: String = "") {
    queryUser(filter: {mailingAddress: {eq: $eq}}) {
      billingAddress
      name
      points
      preferredPaymentMethod
    }
  }
`;

function fetchMyQuery(eq: any) {
  return fetchGraphQL(
    operationsDoc,
    "MyQuery",
    {"eq": eq}
  );
}

async function startFetchMyQuery(eq: any) {
  const { errors, data } = await fetchMyQuery(eq);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  return data.queryUser;
}



export async function getUser() {

    let mailingAddress = localStorage.getItem("mailing");

    if(!User && mailingAddress)
    {
        let arr = await startFetchMyQuery(mailingAddress);

        if(arr.length == 0) return User;

        User = arr[0];
        User.mailingAddress = mailingAddress;
    }

    return User;
}