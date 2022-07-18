import { Provider } from 'react-redux';
import Store from '../store';

const defaultStore = Store();

const ProviderMock = (props) => {
  const store = props.store || defaultStore.store;
  return <Provider store={store}>{props.children}</Provider>;
};

export default ProviderMock;
