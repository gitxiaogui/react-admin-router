import React,{Component} from 'react'
import { Form, Input, Button } from 'antd';
import { login } from '../api'
import '../styles/login.scss'
class Login extends Component{
  constructor(props){
    super(props)
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        login({
          userName:values.username,
          pwd:values.password,
          loginType:'0'
        }).then((res)=>{
          console.log(res)
          if(res.retCode === 200){
            localStorage.setItem('token',res.data.accessToken)
            this.props.history.push('/dashboard')
          }
        })
      }
    });
  };
  componentWillMount(){
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div className='login-wrap'>
          <div className="login-left">

          </div>
          <div className="login-right">
            <p className="login-name">登录</p>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item label="用户名">
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入用户名' }],
                })(
                  <Input
                    placeholder="请输入用户名"
                  />,
                )}
              </Form.Item>
              <Form.Item label="密码">
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码' }],
                })(
                  <Input
                    type="password"
                    placeholder="请输入密码"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
    );
  }
}
const LoginForm = Form.create({ name: 'normal_login' })(Login);
export default LoginForm