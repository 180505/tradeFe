import { Tooltip } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
class Header extends Component {
  // constructor(props) {
  //     super(props);
  // }
  state = {};
  render() {
    return (
      <div className="headerContainer">
        <Link to='/'>
        <div style={{ width: "160px", overflow: "hidden" }}>
          <img className="addLogo pointer" alt="" src="/navLogo.PNG"></img>
        </div>
        </Link>
        <div className="notice">
          <Tooltip title="今日吉他降价，钢琴降价，竖琴降价，琵琶降价，笛子降价，新注册的用户其他商品全场88折，欢迎选购！！！">
          <span>公告：</span>
          <span>今日吉他降价，钢琴降价，竖琴降价，琵琶降价，笛子降价，新注册的用户其他商品全场88折，欢迎选购！！！</span>
          </Tooltip>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <span className=" pointer hover-0d6bc4 color-1890ff"><Link to='/'>首页</Link></span>
          <span className=" pointer hover-1890ff margin-left-20">购物车 </span>
          <span className=" pointer hover-1890ff margin-left-20">我的收藏</span>
          <span className=" pointer hover-1890ff margin-left-20">我的订单</span>
          <span className=" pointer hover-1890ff margin-left-20">个人中心</span>
          <span className=" pointer color-1890ff-bold margin-left-20 hover-0d6bc4">
            发布
          </span>
          <span className=" pointer hover-1890ff margin-left-20"><Link to='/login'>登录</Link></span>
          <span className="pointer margin-left-20 hover-1890ff"><Link to='/register'>注册</Link></span>
          <span className="pointer margin-left-20 hover-1890ff">退出</span>
        </div>
      </div>
    );
  }
}

export default Header;
