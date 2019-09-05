import React from 'react';
import { Menu, Icon} from 'antd';
import { Link } from 'react-router-dom';

class MenuComp extends React.PureComponent <{}, {}>{
  render() {
    // console.log(this.props)
    return (
      <Menu theme='dark' defaultSelectedKeys={[window.location.pathname]} mode='inline'>
        <Menu.Item key='/'>
          <Link to='/'>
            <Icon type='home' />
            <span>Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='/settings'>
          <Link to='/settings'>
            <Icon type='setting' />
            <span>Settings</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='/me'>
          <Link to='/me'>
            <Icon type='user' />
            <span>Profile</span>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuComp;
