import React,{Component,Suspense,Fragment} from 'react';
import { renderRoutes } from 'react-router-config';
import { Layout, Dropdown,Menu } from 'antd';
import { HashRouter, Route,Switch } from 'react-router-dom';
import MenuNav from './menu';
import Router from '../router'
const { Header, Sider, Content } = Layout;
// 外部跳转
let router = new HashRouter()

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
  logout = ()=>{
    router.history.push('/login')
  }
  render(){
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
                      <span onClick={this.toggle}></span>
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