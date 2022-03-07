import { Button, Card, Input } from "antd";
import React, { Component } from "react";
import { UserOutlined, LockOutlined} from "@ant-design/icons"; 
import { Link } from "react-router-dom";
import "./index.css";
class Login extends Component {
  // constructor(props) {
  //     super(props);
  // }
  // state = {  }
  render() {
    return (
      <div className="loginContainer">
        <div className="returnIndex"><Link to='/'>回到首页</Link></div>
        <div className="login">
          <Card className="loginCard">
            <div className="mb-30 text-center">
              <h1 className="login_title">二手乐器交易平台</h1>
            </div>
            <div className="mb-30">
              <Input
                placeholder="请输入用户名"
                prefix={<UserOutlined />}
                style={{ width: 300 }}
              ></Input>
            </div>
            <div className="mb-30">
              <Input placeholder="请输入密码" prefix={<LockOutlined />} type="password"></Input>
            </div>
            <div className="mb-20">
              <Button  type="primary" style={{ width: 300 }}>
                登录
              </Button>
            </div>
            <div>
              <Button type="info" style={{ width: 300 }}>
              <Link to='/register'>注册</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default Login;
