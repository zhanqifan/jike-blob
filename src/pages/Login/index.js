import './index.scss'
import { Card, Form, Input, Button } from 'antd'
import logo from '@/assets/logo.png'

const Login = () => {
  const onFinish = (value) =>{
   console.log(value)
  }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form validateTrigger="onBlur" onFinish={onFinish}>
          <Form.Item name="moblie" rules={[{
            required:true,
            message:'请输入手机号'
          },{
           pattern:/^1[3-9]\d{9}$/,
           message:'请输入正确的手机号格式'
          }]
          }>
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item name="password" rules={[{
            required:true,
            message:'请输入密码'
          }]}>
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
