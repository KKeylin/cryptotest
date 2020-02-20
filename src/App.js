import React from 'react';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { TopLevelLayout } from './layouts/TopLevelLayout';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TopLevelLayout />
      </Provider>
    </div>
  );
}

export default App;
