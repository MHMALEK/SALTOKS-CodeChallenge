import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {repositoryDetailsApi} from '../../../../__mocks__/server-repsonse';
import RepositoryDetailsPageDumb from './repository-details-page.dumb';
describe('SnappShot for Repository details', () => {
  const mockProps = {
    isLoading: true,
    repositoryData: {},
    readMeUrl:
      'https://github.com/MHMALEK/service-worker-examples/blob/master/README.md',
    readmeContent: 'c2FsdG8ga3MgY29kZSBjaGFsbGVuZ2U=',
    requestRepositoryDetails: () => repositoryDetailsApi.mockFetch(),
  };
  test('snapshot renders', () => {
    const component = renderer.create(
        <MemoryRouter>
          <RepositoryDetailsPageDumb {...mockProps} />
        </MemoryRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
