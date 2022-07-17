/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import Redditar from '../Redditar';
import { Provider } from 'react-redux';
import Store from '../store';

describe('testing the main view', () => {
  const store = Store();
  const mainView = render(
    <Provider store={store.store}>
      <Redditar />
    </Provider>
  );

  it('check main title element', async () => {
    const title = await mainView.findByTestId('h1');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Redditar');
  });

  it('debugs', async () => {
    //mainView.getByText('Debug');
  });
});
