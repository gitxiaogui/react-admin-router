import React, {Component} from 'react';
import {Route, Link, withRouter,HashRouter} from 'react-router-dom'
import {Menu} from 'antd';

const {SubMenu} = Menu;
let router = new HashRouter();
class MenuNav extends Component {
  constructor(props) {
    super(props)
    this.onOpenChange = this.onOpenChange.bind(this)
    this.clickMenu = this.clickMenu.bind(this)
  }

  state = {
    collapsed: false,
    openKeys: [],
    selectedKeys: [],
    menuList: [
      {
        path: '/home',
        name: '首页',
        children: [
          {
            path: '/home/home1',
            name: '首页1',
          },
          {
            path: '/home/home2',
            name: '首页2',
          },
          {
            path: '/home/home3',
            name: '首页3',
          }
        ]
      },
      {
        path: '/user',
        name: '用户界面',
        children: [
          {
            path: '/user/user1',
            name: '用户1',
          },
          {
            path: '/user/user2',
            name: '用户2',
          }
        ]
      },
      {
        path: '/activity',
        name: '活动界面'
      }
    ]
  }
  routerWillLeave = (nextLocation) => {
    console.log(nextLocation)
  }
  componentWillReceiveProps(location) {
    // console.log(location.location)
    this.setState({
      selectedKeys: [location.location.pathname],
    })
  }
  componentWillMount(){
    let nameKey = this.props.location.pathname ==='/' ? '/home' : this.props.location.pathname
    let list = nameKey.split('/');
    //console.log(list,list.slice(0, 3).join('/'))
    switch (list.length){
      case 2:
        this.setState({
          selectedKeys: [nameKey],
        })
        break
      case 3:
        this.setState({
          selectedKeys: [nameKey],
          openKeys: [list.slice(0, 2).join('/')],
        })
    }
  }
  componentDidMount() {


  }

  onOpenChange(openKeys) {
    //此函数的作用只展开当前父级菜单（父级菜单下可能还有子菜单）
    if (openKeys.length === 0 || openKeys.length === 1) {
      this.setState({
        openKeys
      })
      return
    } else {
      // 当选中一个还有子集菜单的时候需要清掉之前的数组
      this.setState({
        openKeys: [openKeys[openKeys.length - 1]]
      })
    }
  }

  // 点击每个菜单的时候触发
  clickMenu(key) {
    this.setState({
      selectedKeys: [key.key]
    })
  }



  render() {
    // console.log('menu')
    const {menuList} = this.state;
    return (
        <div style={{width: '200px', height: '100%', display: 'flex', flexDirection: 'column'}}>
          <div className="logo"><Link to='/dashboard'>推广后台</Link></div>
          <Menu
              onOpenChange={this.onOpenChange}
              theme="dark"
              mode="inline"
              openKeys={this.state.openKeys}
              selectedKeys={this.state.selectedKeys}
              // onClick={(key)=>{this.setState({selectedKeys:[key]})}}
              onClick={this.clickMenu}
              style={{flex: 1}}
          >
            {
              menuList.map((item, index) => (
                  item.children ?
                      <SubMenu key={item.path} title={ <span><span>{item.name}</span></span>}>
                        {
                          item.children.map((ite, inde) => (
                              ite.children ?
                                  <SubMenu key={ite.path} title={ <span><span>{ite.name}</span></span>}>
                                    {
                                      ite.children.map((it, ind) => (
                                          it.children ?
                                              <SubMenu key={it.path} title={ <span><span>{it.name}</span></span>}></SubMenu> :
                                              <Menu.Item key={it.path}><Link to={it.path}><span>{it.name}</span></Link></Menu.Item>
                                      ))
                                    }
                                  </SubMenu> :
                                  <Menu.Item key={ite.path}><Link to={ite.path}><span>{ite.name}</span></Link></Menu.Item>
                          ))
                        }
                      </SubMenu> :
                      <Menu.Item key={item.path}><Link to={item.path}><span>{item.name}</span></Link></Menu.Item>
              ))
            }
            {/* <Menu.Item key="/home">
              <Link to='/home'>
                <span>首页</span>
              </Link>
            </Menu.Item>



            <SubMenu
                key="/user"
                title={
                  <span>
                <span>用户管理</span>
              </span>
                }
            >
              <Menu.Item key="/user/userManage">
                <Link to='/user/userManage'>
                  <span>用户信息管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/user/userCost">
                <Link to='/user/userCost'>
                  <span>消费查询</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/user/paynum">
                <Link to='/user/paynum'>
                  <span>充值查询</span>
                </Link>
              </Menu.Item>
            </SubMenu>*/}
          </Menu>
        </div>
    )
  }


}

export default withRouter(MenuNav)

