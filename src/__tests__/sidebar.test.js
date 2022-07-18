import { render } from '@testing-library/react';
import Sidebar from '../components/layout/Sidebar';
import ProviderMock from '../__mocks__/ProviderMock';

describe('testing the sidebar', () => {
  const getMainContainer = (sidebarOpen = true) => {
    const sidebar = render(
      <ProviderMock>
        <Sidebar sidebarOpen={sidebarOpen}></Sidebar>
      </ProviderMock>
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
