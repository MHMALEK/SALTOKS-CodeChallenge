import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import RepositoriesMainPage from './repositories-main-page';
describe('Not Found page Snappshot ', () => {
  test('repos main page renders', () => {
    const component = renderer.create(
        <MemoryRouter>
          <RepositoriesMainPage />
        </MemoryRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
