import React,{Component,Suspense,Fragment} from 'react';
import { renderRoutes } from 'react-router-config';
import { Layout, Dropdown,Menu } from 'antd';
import { withRouter } from 'react-router-dom'
import MenuNav from './menu';
import Router from '../router'
/*import Dashboard from '../pages/dashboard'
import Login from '../pages/login'*/
const { Header, Sider, Content } = Layout;
/*const Home1 = React.lazy(() => import('../pages/home/home1'))
const Home2 = React.lazy(() => import('../pages/home/home2'))
const Home3 = React.lazy(() => import('../pages/home/home3'))
const User1 = React.lazy(() => import('../pages/user/user1'))
const User2 = React.lazy(() => import('../pages/user/user2'))
const Activity = React.lazy(() => import('../pages/activity/activity'))*/
/*let router = [
  {
    path:'/dashboard',
    exact:true,
    component: Dashboard
  },
  {
    path:'/login',
    component: Login
  },

  {
    path:'/home/home1',
    component: Home1
  },
  {
    path:'/home/home2',
    component: Home2
  },
  {
    path:'/home/home3',
    component: Home3
  },
  {
    path:'/user/user1',
    component: User1
  },
  {
    path:'/user/user2',
    component: User2
  },
  {
    path:'/activity',
    component: Activity
  }
]*/
class LayoutWrap extends Component{
  constructor(props){
    super(props)
    this.state = {
      collapsed: false
    }
  }
  componentWillMount(){
    console.log(this.props.location.pathname,'layout')
  }
  render(){
    // console.log('layout')
    const menu = (
        <Menu>
          <Menu.Item style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <a target="_blank" rel="noopener noreferrer" onClick={this.logout} >
              退出登录
            </a>
          </Menu.Item>
        </Menu>
    );
    return (
        <Fragment>
          {
            this.props.location.pathname !== '/login' ?
                <div className="Layout" style={{display:'flex',width:'100%',height:'100%'}}>
                  <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <MenuNav></MenuNav>
                  </Sider>
                  <Layout>
                    <Header style={{ background: '#fff', padding: "0 20px",display:'flex',justifyContent:'space-between',alignItems:'center' }}>
                      {/*<Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
              />*/}
                      <span onClick={this.toggle}>哈哈哈</span>
                      <div>
                        <Dropdown overlay={menu}>
                          <img style={{height:"50px",width:'50px',borderRadius:'50%'}} src="http://img.17kuxiu.com/livingImg/defult_liveimg.png_cover" alt=""/>
                        </Dropdown>
                      </div>
                    </Header>
                    <Content
                        style={{
                          margin: '24px 16px',
                          padding: 24,
                          background: '#fff',
                          minHeight: 280,
                        }}
                    >
                      {renderRoutes(Router)}
                    </Content>
                  </Layout>
                </div> :
                <Fragment>{renderRoutes(Router)}</Fragment>

          }
        </Fragment>
    )
  }
}
export default LayoutWrap;