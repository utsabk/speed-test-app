import { NavigationContainer } from '@react-navigation/native';
import { React } from 'react';
import { Provider } from 'react-redux';

import MyTabs from './src/MainStackNavigator';
import configureStore from './src/store/store';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
