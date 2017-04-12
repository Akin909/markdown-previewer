import React, { Component } from 'react';
import { Container, Title } from './styled/general';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import Previewer from './containers/previewer';

// Redux is likely unnecessary here
let store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Title>Markdown Previewer</Title>
          <Previewer />
        </Container>
      </Provider>
      );
  }
}

export default App;
