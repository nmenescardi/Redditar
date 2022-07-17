/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import Redditar from '../Redditar';
import { Provider } from 'react-redux';
import Store from '../store';

describe('testing the main view', () => {
  let mainView;

  beforeEach(() => {
    const store = Store();

    mainView = render(
      <Provider store={store.store}>
        <Redditar />
      </Provider>
    );
  });

  it('renders welcome message', async () => {
    const title = await mainView.findByTestId('h1');
    expect(title).toBeInTheDocument();
  });

  it('debugs', async () => {
    //mainView.getByText('Debug');
  });
});
