import { render } from '@testing-library/react';
import Sidebar from '../components/layout/Sidebar';
import { Provider } from 'react-redux';
import Store from '../store';

describe('testing the sidebar', () => {
  const getMainContainer = (sidebarOpen = true) => {
    const store = Store();
    const sidebar = render(
      <Provider store={store.store}>
        <Sidebar sidebarOpen={sidebarOpen}></Sidebar>
      </Provider>
    );

    const { container } = sidebar;
    return container;
  };

  it('should have the section element', () => {
    const mainSection = getMainContainer().getElementsByClassName('sidebar');
    expect(mainSection.length).toBe(1);
  });

  test('sidebar should be open', () => {
    const mainSection = getMainContainer().getElementsByClassName('sidebar');
    expect(mainSection[0]).toHaveClass('sidebar--open');
  });
});
