import { fetchGraphQL } from "../graphql/fetchGraphQL";

const operationsDoc = `
mutation SetPoints($id: [ID!] = "", $points: Int = 10) {
    updateUser(input: {filter: {id: $id}, set: {points: $points}}) {
      user {
        points
      }
    }
  }  
`;

function executeSetPoints(id: string, points: string) {
  return fetchGraphQL(
    operationsDoc,
    "SetPoints",
    {"id": id, "points": parseInt(points)}
  );
}

async function startExecuteSetPoints(id: string, points: string) {
  const { errors, data } = await executeSetPoints(id, points);

    if (errors) {
        // handle those errors like a pro
        console.error(errors);
        return false
    }

    console.log(data.updateUser.user.length)
    
    return true
}

export async function setPoints(id: string, points: string)
{
    return await startExecuteSetPoints(id, points);
}
     