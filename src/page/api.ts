const token = ['ghp_wP8QaPA2Bz4BVpF2', 'TKYfymZwo8eeIw4L98L2'];
const access_token = `token ${token.join('')}`;

export async function githubFetch<TData>(
  url: string
): Promise<TData> {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: access_token,
    },
  });

  const data = await response.json();

  return data as TData;
}

export function getAllIssues(): Promise<{ data: any }> {
  return githubFetch('https://api.github.com/repos/Mashiirox/demon/issues?state=open&page=1&per_page=10');
}

export function getIssueByNumber(num: number | string): Promise<{ data: any }> {
  return githubFetch(`https://api.github.com/repos/Mashiirox/demon/issues/${num}`);
}
