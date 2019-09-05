import React from 'react';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import 'antd/dist/antd.css';

import AppRoutes from './routes';
import MenuComp from './components/menu';
import AppStore from './store';

const { Header, Content, Footer, Sider } = Layout;

class App extends React.PureComponent {
  state = {
    collapsed: false,
  };

  onCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Router>
        <Provider store={AppStore}>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
              <div className="logo">Expenseeve</div>
              <MenuComp />
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }} />
              <Content style={{ margin: '16px' }}>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                  <AppRoutes />
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Expenseeve ©2019 Created by SA Karim</Footer>
            </Layout>
          </Layout>
        </Provider>
      </Router>
    );
  }
}

export default App;
