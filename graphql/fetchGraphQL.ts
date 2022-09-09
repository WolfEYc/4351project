export async function fetchGraphQL(operationsDoc: string, operationName: string, variables: any) {
    const result = await fetch(
        "https://blue-surf-600010.us-east-1.aws.cloud.dgraph.io/graphql",
        {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Auth-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzL3Byb3h5IiwiZHVpZCI6IjB4MTcyN2I5ZmQiLCJleHAiOjE2NjI2Nzk4NzgsImlzcyI6InMvYXBpIn0.WWUhO62MW5kzEEZL1MFkhZD1GFEH4xh8FR-CTLzHPvo"
        },
        body: JSON.stringify({
            query: operationsDoc,
            variables: variables,
            operationName: operationName
        })
        }
    );

    return await result.json();
}