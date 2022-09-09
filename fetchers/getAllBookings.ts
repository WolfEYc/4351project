import { fetchGraphQL } from "../graphql/fetchGraphQL";

const operationsDoc = `
  query GetAllBooks($gt: DateTime = "") {
    queryBooking(filter: {time: {gt: $gt}}) {
      guests
      name
      phone
      time
    }
  }
`;

function fetchGetAllBooks(gt: string) {
  return fetchGraphQL(
    operationsDoc,
    "GetAllBooks",
    {"gt": gt}
  );
}

async function GetAllBooks(gt: Date) {
  const { errors, data } = await fetchGetAllBooks(gt.toISOString());

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  return data;
}