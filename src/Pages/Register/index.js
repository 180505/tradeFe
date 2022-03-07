import { Button, Card, Input } from "antd";
import React, { Component } from "react";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import "./index.css";
import { Link } from "react-router-dom";
class Register extends Component {
  // constructor(props) {
  //     super(props);
  // }
  // state = {  }
  render() {
    return (
      <div className="loginContainer">
        <div className="returnIndex">
          <Link to="/">回到首页</Link>
        </div>
        <div className="login">
          <Card className="loginCard">
            <div className="mb-30 text-center">
              <h1 className="register_title">用户注册</h1>
            </div>
            <div className="mb-20">
              <Input
                placeholder="请输入用户名"
                prefix={<UserOutlined />}
                style={{ width: 400 }}
              ></Input>
            </div>
            <div className="mb-20">
              <Input
                placeholder="请输入密码（至少8位有效数字字母组合）"
                prefix={<LockOutlined />}
                type="password"
              ></Input>
            </div>
            <div className="mb-20">
              <Input
                placeholder="请再次确认密码"
                prefix={<LockOutlined />}
                type="password"
              ></Input>
            </div>
            <div className="mb-20">
              <Input
                placeholder="请输入电话"
                prefix={<PhoneOutlined />}
                type="tel"
              ></Input>
            </div>
            <div className="mb-20">
              <Input
                placeholder="请输入邮箱"
                prefix={<MailOutlined />}
                type="email"
              ></Input>
            </div>
            <div className="mb-20">
              <Button type="primary" style={{ width: 400 }}>
                注册
              </Button>
            </div>
            <div>
              <Button type="info" style={{ width: 400 }}>
                <Link to="/login">登录</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default Register;
