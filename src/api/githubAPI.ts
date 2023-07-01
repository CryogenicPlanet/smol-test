import { request } from 'graphql-request';

export interface GithubData {
  user: {
    name: string;
    avatarUrl: string;
    repositories: {
      nodes: {
        name: string;
        description: string;
        url: string;
      }[];
    };
  };
}

const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';

export const githubAPI = {
  async fetchGithubData(token: string, username: string): Promise<GithubData> {
    const query = `
      query {
        user(login: "${username}") {
          name
          avatarUrl
          repositories(first: 10, orderBy: {field: UPDATED_AT, direction: DESC}) {
            nodes {
              name
              description
              url
            }
          }
        }
      }
    `;

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const data = await request<GithubData>(GITHUB_GRAPHQL_API, query, headers);
      return data;
    } catch (error) {
      console.error('Failed to fetch Github data', error);
      throw error;
    }
  },
};