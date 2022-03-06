import React, { Component } from "react";
import "./index.css";
class GoodItem extends Component {
  // constructor(props) {
  //     super(props);
  // }
  state = {};
  render() {
    return (
      <div className="goodItem">
        <div className="gooditem-pic">
          <img
            style={{width:'100px',height:'100px'}}
            src="https://att.jitashe.org/data/attachment/forum/201701/17/104244fr9inrprakanqiaq.jpg"
            alt=""
          ></img>
        </div>
        <div className="ml-20">
          <div className="text-title">帕尔拉多ars3巴西玫瑰木虫胶漆</div>
          <div className="text-desc" style={{ marginTop: "3px" }}>
            全单吉他，音色完美，让人爱不释手。原价56000，现价46000转让，求一位伯乐带走.
            全单吉他，音色完美，让人爱不释手。原价56000，现价46000转让，求一位伯乐带走.
            全单吉他，音色完美，让人爱不释手。原价56000，现价46000转让，求一位伯乐带走.
            全单吉他，音色完美，让人爱不释手。原价56000，现价46000转让，求一位伯乐带走.
          </div>
          <div style={{ marginTop: "3px" }} className="goods-info">
            <span className="mr-30">nickname</span>
            发表于：<span className="mr-30">2022-03-06</span>
            <span className="mr-30">北京</span>
            收藏：<span className="mr-30">200</span>
            <span>9成新</span>
          </div>
        </div>
        <div className="flex-center" style={{ width: "300px" }}>
          <div>
            <span className="text-price">9999</span>
            <span>元</span>
          </div>
        </div>
      </div>
    );
  }
}

export default GoodItem;
