import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://api.github.com/graphql';

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: 'Bearer YOUR_GITHUB_PERSONAL_ACCESS_TOKEN',
  },
});

export async function getImportantInfo() {
  const query = `{
    viewer {
      login
      avatarUrl
      repositories(first: 5, orderBy: {field: UPDATED_AT, direction: DESC}) {
        nodes {
          name
          updatedAt
          description
          url
        }
      }
    }
  }`;

  const data = await graphQLClient.request(query);
  return data;
}