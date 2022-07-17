/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import Navbar from '../components/navbar/Navbar';
import { Provider } from 'react-redux';
import Store from '../store';
import { layoutToggleSidebar } from '../store/posts/actions';

const store = Store();

describe('testing the sidebar', () => {
  const getElements = () => {
    const sidebar = render(
      <Provider store={store.store}>
        <Navbar layoutToggleSidebar={layoutToggleSidebar}></Navbar>
      </Provider>
    );

    return { sidebar: sidebar, container: sidebar.container };
  };

  it('should have the section element', () => {
    const { container } = getElements();
    const mainSection = container.getElementsByClassName('navbar');
    expect(mainSection.length).toBe(1);
  });

  it('should toggle navbar visibility on main section click.', async () => {
    const { sidebar } = getElements();

    const mainSection = await sidebar.findByTestId('navbar');
    mainSection.click();

    // TODO: check the store to see the changes
  });
});
