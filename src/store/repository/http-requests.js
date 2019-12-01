import {publicHttpClient} from 'Services/client';

export const getRepositoriesHttpRequest = (
    query,
    page,
    sort,
    numberOfItemsPerPage
) => {
  return publicHttpClient.request(
      'GET',
      `search/repositories?q=${query}${page ? `&page=${page}` : ''}${
      sort ? `&sort=${sort}` : ''
      }${numberOfItemsPerPage ? `&per_page=${numberOfItemsPerPage}` : ''}`
  );
};

export const repositoryDetailsHttpRequest = (repoUrl) => {
  return publicHttpClient.request('GET', repoUrl);
};

export const repositoryReadMeHttpRequest = (repoUrl) => {
  return publicHttpClient.request('GET', `${repoUrl}/readme`);
};
