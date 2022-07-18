/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import Redditar from '../Redditar';
import ProviderMock from '../__mocks__/ProviderMock';

describe('testing the main view', () => {
  const mainView = render(
    <ProviderMock>
      <Redditar />
    </ProviderMock>
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
