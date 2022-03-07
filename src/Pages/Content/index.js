import React, { Component } from "react";
import { Button, Card, Input, Radio, Pagination } from "antd";
import GoodItem from "./components/GoodItem";
import { SortType } from "../../common/enum";
import "./index.css";

class Content extends Component {
  // constructor(props) {
  //     super(props);
  // }
  state = {
    type:'all',
    price:'all',
    oldType:'all',
    cities:'all',
    pageNum:'',
    pageSize:10,
    sortType:SortType.default
  };
  oldType = [
    {
      label: "全部",
      value: "all",
    },
    {
      label: "99成新",
      value: "old-99",
    },
    {
      label: "95成新",
      value: "old-95",
    },
    {
      label: "9成新",
      value: "old-9",
    },
    {
      label: "8成新",
      value: "old-8",
    },
    {
      label: "7成新",
      value: "old-7",
    },
    {
      label: "6成新及以下",
      value: "old-6",
    },
  ];
  cities = [
    {
      label: "全部",
      value: "all",
    },
    {
      label: "北京",
      value: "beijing",
    },
    {
      label: "上海",
      value: "shanghai",
    },
    {
      label: "广州",
      value: "guangzhou",
    },
    {
      label: "深圳",
      value: "shenzhen",
    },
    {
      label: "天津",
      value: "tianjin",
    },
    {
      label: "杭州",
      value: "hangzhou",
    },
    {
      label: "重庆",
      value: "chongqing",
    },
    {
      label: "武汉",
      value: "wuhan",
    },
    {
      label: "沈阳",
      value: "shenyang",
    },
    {
      label: "哈尔滨",
      value: "haerbin",
    },
    {
      label: "苏州",
      value: "suzhou",
    },
    {
      label: "厦门",
      value: "xiamen",
    },
    {
      label: "青岛",
      value: "qingdao",
    },
    {
      label: "其他",
      value: "other",
    },
  ];

  onChange = e => {
    console.log(e.target.value);
  }

  selectDefault = () => {
    this.setState({sortType: SortType.default})
  }

  selectLatest = () => {
    this.setState({sortType: SortType.latest})
  }

  selectAscend = () => {
    this.setState({sortType: SortType.priceAscend})
  }

  selectDescend = () => {
    this.setState({sortType: SortType.priceDescend})
  }

  renderCardTitle() {
    return (
      <div
        className="text-10"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className="pointer hover-1890ff mr-10" onClick={this.selectDefault} style={this.state.sortType===SortType.default?{color:'#1890FF'}:{}}>默认排序</div>
        <div className="pointer hover-1890ff mr-10" onClick={this.selectLatest} style={this.state.sortType===SortType.latest?{color:'#1890FF'}:{}}>最新发布</div>
        <div className="pointer hover-1890ff mr-10" onClick={this.selectAscend} style={this.state.sortType===SortType.priceAscend?{color:'#1890FF'}:{}}>价格升序</div>
        <div className="pointer hover-1890ff" onClick={this.selectDescend} style={this.state.sortType===SortType.priceDescend?{color:'#1890FF'}:{}}>价格降序</div>
        <div
          style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
        >
          <Input placeholder="请输入查询条件" size="small" />
          <Button type="primary" size="small">
            搜索
          </Button>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="contentContainer">
        <Card className="text-10" size="small">
          <div style={{ display: "flex" }}>
            <label style={{ marginRight: "10px" }} className="align-center">
              <div>分类：</div>
            </label>
            <Radio.Group defaultValue={this.state.type} buttonStyle="solid" size="small" onChange={this.onChange}>
              <Radio.Button value="all">全部</Radio.Button>
              <Radio.Button value="gt">吉他</Radio.Button>
              <Radio.Button value="gz">古筝</Radio.Button>
              <Radio.Button value="pp">琵琶</Radio.Button>
              <Radio.Button value="dtq">大提琴</Radio.Button>
              <Radio.Button value="cd">长笛</Radio.Button>
              <Radio.Button value="sks">萨克斯</Radio.Button>
              <Radio.Button value="jzg">架子鼓</Radio.Button>
              <Radio.Button value="hls">葫芦丝</Radio.Button>
              <Radio.Button value="eh">二胡</Radio.Button>
              <Radio.Button value="xtq">小提琴</Radio.Button>
              <Radio.Button value="sq">竖琴</Radio.Button>
              <Radio.Button value="sfq">手风琴</Radio.Button>
              <Radio.Button value="zd">竹笛</Radio.Button>
              <Radio.Button value="ch">长号</Radio.Button>
              <Radio.Button value="kq">口琴</Radio.Button>
              <Radio.Button value="sn">唢呐</Radio.Button>
              <Radio.Button value="xiao">萧</Radio.Button>
              <Radio.Button value="sd">竖笛</Radio.Button>
              <Radio.Button value="dbs">电贝司</Radio.Button>
              <Radio.Button value="lq">柳琴</Radio.Button>
              <Radio.Button value="smgq">数码钢琴</Radio.Button>
              <Radio.Button value="wb">乌巴</Radio.Button>
              <Radio.Button value="byq">八音琴</Radio.Button>
              <Radio.Button value="dyg">定音鼓</Radio.Button>
              <Radio.Button value="dzg">电子鼓</Radio.Button>
              <Radio.Button value="djt">电吉他</Radio.Button>
              <Radio.Button value="gq">古琴</Radio.Button>
              <Radio.Button value="zhb">指挥棒</Radio.Button>
              <Radio.Button value="other">其他</Radio.Button>
            </Radio.Group>
          </div>
          <div style={{ display: "flex", marginTop: "2px" }}>
            <label style={{ marginRight: "10px" }} className="align-center">
              <div>价格：</div>
            </label>
            <Radio.Group defaultValue={this.state.price} buttonStyle="solid" size="small" onChange={this.onChange}>
              <Radio.Button value="all">全部</Radio.Button>
              <Radio.Button value="less-100">100元以下</Radio.Button>
              <Radio.Button value="s-100-500">100-500元</Radio.Button>
              <Radio.Button value="s-500-1000">500-1000元</Radio.Button>
              <Radio.Button value="s-1000-2000">1000-2000元</Radio.Button>
              <Radio.Button value="s-2000-3000">2000-3000元</Radio.Button>
              <Radio.Button value="s-3000-5000">3000-5000元</Radio.Button>
              <Radio.Button value="more-5000">5000元以上</Radio.Button>
              <Radio.Button value="other">其他</Radio.Button>
            </Radio.Group>
          </div>
          <div style={{ display: "flex", marginTop: "2px" }}>
            <label style={{ marginRight: "10px" }} className="align-center">
              <div>新旧：</div>
            </label>
            <Radio.Group
              defaultValue={this.state.oldType}
              buttonStyle="solid"
              size="small"
              options={this.oldType}
              optionType="button"
              onChange={this.onChange}
            ></Radio.Group>
          </div>
          <div style={{ display: "flex", marginTop: "2px" }}>
            <label style={{ marginRight: "10px" }} className="align-center">
              <div>地区：</div>
            </label>
            <Radio.Group
              defaultValue={this.state.cities}
              buttonStyle="solid"
              size="small"
              options={this.cities}
              optionType="button"
              onChange={this.onChange}
            ></Radio.Group>
          </div>
        </Card>
        <Card title={this.renderCardTitle()} size="small">
          <GoodItem />
          <GoodItem />
          <GoodItem />
          <GoodItem />
          <GoodItem />
          <GoodItem />
          <GoodItem />
          <GoodItem />
          <GoodItem />
          <GoodItem />
        </Card>
        <div >
          <Pagination size="small" total={50}  showQuickJumper style={{marginLeft:'auto',width:"max-content"}} />
        </div>
      </div>
    );
  }
}

export default Content;
