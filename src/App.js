import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout'
import './hoc/Layout/Layout.module.css'
import Quiz from './conteiners/Quiz/Quiz'

class App extends Component {
  render() {
    return (
      <Layout>
        <Quiz />
      </Layout>
    
    );
  }
}

export default App;
