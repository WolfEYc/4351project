import { fetchGraphQL } from "../graphql/fetchGraphQL";

const operationsDoc = `
  query GetBookings($between: DateTimeRange = {min: "", max: ""}) {
    queryBooking(filter: {time: {between: $between}}) {
      guests
      name
      phone
      time
    }
  }
`;

function fetchGetBookings(between: {min: string, max: string}) {
  return fetchGraphQL(
    operationsDoc,
    "GetBookings",
    {"between": between}
  );
}

export async function startFetchGetBookings(between: {min: string, max: string}) {

    

  const { errors, data } = await fetchGetBookings(between);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  return data.queryBooking
}